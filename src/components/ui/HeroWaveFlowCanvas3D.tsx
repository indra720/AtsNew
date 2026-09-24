import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface WaveRibbonPoint {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
  scale: number;
  size: number;
  alpha: number;
  color: string;
}

// Fixed-position subtle accent spheres spread across the hero (NOT orbiting cursor)
interface HeroBall {
  homeXFrac: number;
  homeYFrac: number;
  cx: number;
  cy: number;
  floatPhase: number;
  floatAmp: number;
  floatSpeed: number;
  baseRadius: number;
  blur: number;
}

export default function HeroWaveFlowCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getDimensions = () => {
      const w = canvas.parentElement?.clientWidth || window.innerWidth || 1280;
      const h = canvas.parentElement?.clientHeight || window.innerHeight || 720;
      return { w: Math.max(300, w), h: Math.max(300, h) };
    };

    let { w: initW, h: initH } = getDimensions();
    canvas.width = initW * dpr;
    canvas.height = initH * dpr;

    const mouse = {
      x: initW * 0.5,
      y: initH * 0.5,
      targetX: initW * 0.5,
      targetY: initH * 0.5,
      prevX: initW * 0.5,
      prevY: initH * 0.5,
      vx: 0,
      vy: 0,
    };

    const state = {
      activity: 0,
      smoothNormX: 0,
      smoothNormY: 0,
      camPitch: 0.20,
      camYaw: 0,
    };

    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    // ============================================================
    // 1. FULL-HEIGHT HORIZONTAL 3D WAVE MESH GRAPH
    // cols dense for full width, rows dense for full height
    // ============================================================
    const cols = 110;
    const rows = 50; // taller coverage top-to-bottom

    const gridX = new Float32Array(cols);
    const gridZ = new Float32Array(rows);

    const updateGridSpan = (w: number, h: number) => {
      const totalWidth = w * 1.65;
      for (let c = 0; c < cols; c++) {
        gridX[c] = (c / (cols - 1) - 0.5) * totalWidth;
      }
      // Deeper Z span so projected mesh fills full hero height
      const totalDepth = h * 1.5;
      for (let r = 0; r < rows; r++) {
        gridZ[r] = (r / (rows - 1) - 0.5) * totalDepth;
      }
    };
    updateGridSpan(initW, initH);

    // ============================================================
    // 2. FIXED-POSITION BALLS — SUBTLE & COMPACT
    // Sizes: baseRadius 5–9px (delicate mini glass spheres)
    // ============================================================
    const heroBalls: HeroBall[] = [
      { homeXFrac: 0.08, homeYFrac: 0.16, cx: 0, cy: 0, floatPhase: 0.0, floatAmp: 60, floatSpeed: 0.012, baseRadius: 7, blur: 0 },
      { homeXFrac: 0.88, homeYFrac: 0.13, cx: 0, cy: 0, floatPhase: 2.1, floatAmp: 65, floatSpeed: 0.010, baseRadius: 9, blur: 1 },
      { homeXFrac: 0.04, homeYFrac: 0.48, cx: 0, cy: 0, floatPhase: 1.0, floatAmp: 55, floatSpeed: 0.014, baseRadius: 6, blur: 0 },
      { homeXFrac: 0.94, homeYFrac: 0.44, cx: 0, cy: 0, floatPhase: 3.5, floatAmp: 70, floatSpeed: 0.009, baseRadius: 8, blur: 0.5 },
      { homeXFrac: 0.50, homeYFrac: 0.07, cx: 0, cy: 0, floatPhase: 4.2, floatAmp: 50, floatSpeed: 0.016, baseRadius: 5, blur: 0 },
      { homeXFrac: 0.19, homeYFrac: 0.80, cx: 0, cy: 0, floatPhase: 1.8, floatAmp: 65, floatSpeed: 0.011, baseRadius: 7, blur: 0 },
      { homeXFrac: 0.76, homeYFrac: 0.83, cx: 0, cy: 0, floatPhase: 5.0, floatAmp: 75, floatSpeed: 0.008, baseRadius: 9, blur: 1.5 },
      { homeXFrac: 0.38, homeYFrac: 0.92, cx: 0, cy: 0, floatPhase: 2.7, floatAmp: 45, floatSpeed: 0.013, baseRadius: 5, blur: 0 },
    ];

    const initBallPositions = (w: number, h: number) => {
      for (const ball of heroBalls) {
        ball.cx = ball.homeXFrac * w;
        ball.cy = ball.homeYFrac * h;
      }
    };
    initBallPositions(initW, initH);

    const focalLength = 700;

    const createSafeRadial = (
      x0: number, y0: number, r0: number,
      x1: number, y1: number, r1: number
    ): CanvasGradient | null => {
      if (
        !Number.isFinite(x0) || !Number.isFinite(y0) || !Number.isFinite(r0) ||
        !Number.isFinite(x1) || !Number.isFinite(y1) || !Number.isFinite(r1) ||
        r0 < 0 || r1 <= 0 || r0 >= r1
      ) return null;
      try {
        return ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
      } catch {
        return null;
      }
    };

    // ============================================================
    // MOUSE & TOUCH EVENT HANDLERS
    // ============================================================
    const handleMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const currentW = rect.width || initW;
      const currentH = rect.height || initH;

      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;

      const normX = currentW > 0 ? Math.max(-1, Math.min(1, (mouse.targetX / currentW - 0.5) * 2)) : 0;
      const normY = currentH > 0 ? Math.max(-1, Math.min(1, (mouse.targetY / currentH - 0.5) * 2)) : 0;

      gsap.to(state, {
        smoothNormX: normX,
        smoothNormY: normY,
        camPitch: 0.20 - normY * 0.05,
        camYaw: normX * 0.05,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(mouse, {
        x: mouse.targetX,
        y: mouse.targetY,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.killTweensOf(state, "activity");
      gsap.to(state, {
        activity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        gsap.to(state, {
          activity: 0,
          duration: 1.6,
          ease: "power2.inOut",
        });
      }, 900);
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { w, h } = getDimensions();
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      updateGridSpan(w, h);
      initBallPositions(w, h);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // ============================================================
    // GSAP TICKER RENDER LOOP
    // ============================================================
    let time = 0;

    const render = () => {
      time += 0.016;

      const { w: renderW, h: renderH } = getDimensions();
      if (renderW <= 0 || renderH <= 0) return;

      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (state.activity < 0.004) return;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.globalAlpha = state.activity;

      const cosX = Math.cos(state.camPitch);
      const sinX = Math.sin(state.camPitch);
      const cosY = Math.cos(state.camYaw);
      const sinY = Math.sin(state.camYaw);

      // Centered X, slightly above center Y so mesh covers full vertical height
      const originX = renderW * 0.5;
      const originY = renderH * 0.52;

      // Soft ambient glow
      const ambientGlow = createSafeRadial(
        mouse.x, mouse.y, 10,
        mouse.x, mouse.y, renderW * 0.5
      );
      if (ambientGlow) {
        ambientGlow.addColorStop(0, "rgba(0, 210, 255, 0.12)");
        ambientGlow.addColorStop(0.4, "rgba(0, 102, 255, 0.06)");
        ambientGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = ambientGlow;
        ctx.fillRect(0, 0, renderW, renderH);
      }

      const cursorGlow = createSafeRadial(
        mouse.x, mouse.y, 4,
        mouse.x, mouse.y, 80
      );
      if (cursorGlow) {
        cursorGlow.addColorStop(0, "rgba(0, 210, 255, 0.26)");
        cursorGlow.addColorStop(0.45, "rgba(0, 102, 255, 0.09)");
        cursorGlow.addColorStop(1, "rgba(0, 102, 255, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();
      }

      // ============================================================
      // 3D PARTICLE WAVE TERRAIN — Full Width + Full Height
      // ============================================================
      const projectedRibbons: WaveRibbonPoint[][] = [];

      for (let r = 0; r < rows; r++) {
        const ribbon: WaveRibbonPoint[] = [];
        const z = gridZ[r];

        for (let c = 0; c < cols; c++) {
          const x = gridX[c];

          const w1 = Math.sin(time * 1.4 + x * 0.003 - z * 0.003) * 35;
          const w2 = Math.cos(time * 1.0 + x * 0.005 + z * 0.003) * 22;
          const ripple = Math.sin(time * 2.0 + c * 0.13 + r * 0.14) * 8;

          let y = w1 + w2 + ripple;

          const y1 = y * cosX - z * sinX;
          const z1 = y * sinX + z * cosX;
          const x2 = x * cosY + z1 * sinY;
          const z2 = -x * sinY + z1 * cosY;

          const cameraDist = 700;
          const denom = focalLength + z2 + cameraDist;
          const scale = denom > 10 ? focalLength / denom : 0.5;

          let px = x2 * scale + originX;
          let py = y1 * scale + originY;

          // Cursor zoom flow — lift + radial push + swirl
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const distSq = dx * dx + dy * dy;
          const bulgeRadius = 360;
          const bulgeRadiusSq = bulgeRadius * bulgeRadius;

          let size = Math.max(0.8, 1.3 * scale);
          let alpha = Math.min(0.95, Math.max(0.18, 0.40 * scale));
          let color = c % 2 === 0 ? "#00D2FF" : "#0066FF";

          if (distSq < bulgeRadiusSq) {
            const dist = Math.sqrt(distSq);
            const norm = dist / bulgeRadius;
            const liftFactor = Math.cos(norm * (Math.PI * 0.5));

            py -= liftFactor * 88;

            // Radial zoom push outward
            const radialPush = liftFactor * 36;
            if (dist > 1) {
              px += (dx / dist) * radialPush;
              py += (dy / dist) * radialPush * 0.45;
            }

            // Swirl
            const swirlAngle = Math.atan2(dy, dx) + time * 2.6;
            const swirlStrength = liftFactor * 16;
            px += Math.cos(swirlAngle) * swirlStrength;
            py += Math.sin(swirlAngle) * (swirlStrength * 0.4);

            alpha = Math.min(1, alpha + liftFactor * 0.58);
            size = Math.min(4.8, size + liftFactor * 2.6);
            color = liftFactor > 0.4 ? "#00D2FF" : "#38BDF8";
          }

          ribbon.push({ x, y, z, px, py, scale, size, alpha, color });
        }
        projectedRibbons.push(ribbon);
      }

      // Render horizontal ribbon lines
      ctx.lineWidth = 0.8;
      for (let r = 0; r < rows; r += 2) {
        const ribbon = projectedRibbons[r];
        if (!ribbon || ribbon.length === 0) continue;

        ctx.beginPath();
        let started = false;
        for (let c = 0; c < cols; c++) {
          const pt = ribbon[c];
          if (!pt || !Number.isFinite(pt.px) || !Number.isFinite(pt.py)) continue;
          if (pt.px < -100 || pt.px > renderW + 100 || pt.py < -100 || pt.py > renderH + 100) continue;
          if (!started) { ctx.moveTo(pt.px, pt.py); started = true; }
          else { ctx.lineTo(pt.px, pt.py); }
        }
        ctx.strokeStyle = "rgba(0, 102, 255, 0.18)";
        ctx.stroke();
      }

      // Render vertical column lines
      for (let c = 0; c < cols; c += 3) {
        ctx.beginPath();
        let started = false;
        for (let r = 0; r < rows; r++) {
          const pt = projectedRibbons[r]?.[c];
          if (!pt || !Number.isFinite(pt.px) || !Number.isFinite(pt.py)) continue;
          if (pt.px < -100 || pt.px > renderW + 100 || pt.py < -100 || pt.py > renderH + 100) continue;
          if (!started) { ctx.moveTo(pt.px, pt.py); started = true; }
          else { ctx.lineTo(pt.px, pt.py); }
        }
        ctx.strokeStyle = "rgba(0, 210, 255, 0.12)";
        ctx.stroke();
      }

      // Render particle dots
      ctx.globalAlpha = state.activity;
      for (let r = 0; r < rows; r++) {
        const ribbon = projectedRibbons[r];
        for (let c = 0; c < cols; c++) {
          const pt = ribbon[c];
          if (!Number.isFinite(pt.px) || !Number.isFinite(pt.py)) continue;
          if (pt.px < -30 || pt.px > renderW + 30 || pt.py < -30 || pt.py > renderH + 30) continue;

          if (pt.size > 2.5) {
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, pt.size * 1.9, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 210, 255, ${pt.alpha * 0.28})`;
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(pt.px, pt.py, pt.size, 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = pt.alpha * state.activity;
          ctx.fill();
        }
      }

      // ============================================================
      // FIXED-POSITION HERO BALLS — DELICATE MINI GLASS SPHERES
      // Float independently at their home positions (±45–75px)
      // Gentle parallax from cursor direction (NOT orbit)
      // ============================================================
      ctx.globalAlpha = state.activity;

      for (let i = 0; i < heroBalls.length; i++) {
        const ball = heroBalls[i];
        ball.floatPhase += ball.floatSpeed;

        const homeX = ball.homeXFrac * renderW;
        const homeY = ball.homeYFrac * renderH;

        const floatY = Math.sin(ball.floatPhase) * ball.floatAmp;

        // Subtle parallax
        const parallaxX = state.smoothNormX * 15 * (i % 2 === 0 ? 1 : -0.5);
        const parallaxY = state.smoothNormY * 18 * (i % 3 === 0 ? 1 : -0.6);

        const targetX = homeX + parallaxX;
        const targetY = homeY + floatY + parallaxY;

        ball.cx += (targetX - ball.cx) * 0.038;
        ball.cy += (targetY - ball.cy) * 0.038;

        const bpx = ball.cx;
        const bpy = ball.cy;
        const br = ball.baseRadius;

        if (!Number.isFinite(bpx) || !Number.isFinite(bpy)) continue;

        ctx.save();
        if (ball.blur > 0) ctx.filter = `blur(${ball.blur}px)`;

        // Drop shadow
        ctx.beginPath();
        ctx.ellipse(bpx + 1.5, bpy + br * 0.88, br * 0.82, br * 0.25, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 40, 130, 0.15)";
        ctx.fill();

        // 3D glass sphere gradient
        const orbR0 = Math.max(0.1, br * 0.05);
        const orbR1 = Math.max(orbR0 + 0.5, br);
        const orbGrad = createSafeRadial(
          bpx - br * 0.28, bpy - br * 0.30, orbR0,
          bpx, bpy, orbR1
        );

        ctx.beginPath();
        ctx.arc(bpx, bpy, br, 0, Math.PI * 2);
        if (orbGrad) {
          orbGrad.addColorStop(0, "#D6F0FF");
          orbGrad.addColorStop(0.20, "#00D2FF");
          orbGrad.addColorStop(0.58, "#0066FF");
          orbGrad.addColorStop(0.86, "#003DB0");
          orbGrad.addColorStop(1, "#001E60");
          ctx.fillStyle = orbGrad;
        } else {
          ctx.fillStyle = "#0066FF";
        }
        ctx.globalAlpha = 0.86 * state.activity;
        ctx.fill();

        // Specular highlight
        const glintR0 = 0.1;
        const glintR1 = Math.max(glintR0 + 0.5, br * 0.40);
        const glint = createSafeRadial(
          bpx - br * 0.28, bpy - br * 0.30, glintR0,
          bpx, bpy, glintR1
        );

        ctx.beginPath();
        ctx.arc(bpx - br * 0.28, bpy - br * 0.30, br * 0.40, 0, Math.PI * 2);
        if (glint) {
          glint.addColorStop(0, "rgba(255, 255, 255, 0.97)");
          glint.addColorStop(0.40, "rgba(255, 255, 255, 0.26)");
          glint.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = glint;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.80)";
        }
        ctx.globalAlpha = 0.95 * state.activity;
        ctx.fill();

        ctx.filter = "none";
        ctx.restore();
      }

      ctx.restore();
    };

    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      if (idleTimer) clearTimeout(idleTimer);
      gsap.killTweensOf(mouse);
      gsap.killTweensOf(state);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
