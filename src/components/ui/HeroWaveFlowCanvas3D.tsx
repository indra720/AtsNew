import React, { useEffect, useRef } from "react";

interface WavePoint {
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

interface FloatingNode {
  homeXFrac: number;
  homeYFrac: number;
  cx: number;
  cy: number;
  phase: number;
  amp: number;
  speed: number;
  radius: number;
}

export const HeroWaveFlowCanvas3D: React.FC = () => {
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

    let { w: currentW, h: currentH } = getDimensions();
    canvas.width = currentW * dpr;
    canvas.height = currentH * dpr;

    // Mouse and interaction state
    const mouse = {
      x: currentW * 0.5,
      y: currentH * 0.5,
      targetX: currentW * 0.5,
      targetY: currentH * 0.5,
      prevX: currentW * 0.5,
      prevY: currentH * 0.5,
      vx: 0,
      vy: 0,
      speed: 0,
      isHovered: false,
    };

    // Camera 3D orientation with smooth lerp
    const camera = {
      pitch: 0.22,
      yaw: 0,
      targetPitch: 0.22,
      targetYaw: 0,
      tiltAmount: 0.08,
    };

    // 3D Grid Parameters (Topological Wireframe Mesh)
    const cols = 90; // Density across width
    const rows = 38; // Density across depth
    const gridX = new Float32Array(cols);
    const gridZ = new Float32Array(rows);

    const updateGridBounds = (w: number, h: number) => {
      const totalWidth = w * 1.55;
      const totalDepth = h * 1.45;
      for (let c = 0; c < cols; c++) {
        gridX[c] = (c / (cols - 1) - 0.5) * totalWidth;
      }
      for (let r = 0; r < rows; r++) {
        gridZ[r] = (r / (rows - 1) - 0.5) * totalDepth;
      }
    };
    updateGridBounds(currentW, currentH);

    // Floating Glass Accent Nodes
    const floatingNodes: FloatingNode[] = [
      { homeXFrac: 0.12, homeYFrac: 0.22, cx: 0, cy: 0, phase: 0.0, amp: 45, speed: 0.012, radius: 7 },
      { homeXFrac: 0.88, homeYFrac: 0.18, cx: 0, cy: 0, phase: 2.1, amp: 50, speed: 0.010, radius: 8 },
      { homeXFrac: 0.06, homeYFrac: 0.55, cx: 0, cy: 0, phase: 1.2, amp: 40, speed: 0.014, radius: 6 },
      { homeXFrac: 0.94, homeYFrac: 0.50, cx: 0, cy: 0, phase: 3.4, amp: 55, speed: 0.009, radius: 8 },
      { homeXFrac: 0.50, homeYFrac: 0.12, cx: 0, cy: 0, phase: 4.0, amp: 35, speed: 0.015, radius: 5 },
      { homeXFrac: 0.22, homeYFrac: 0.82, cx: 0, cy: 0, phase: 1.8, amp: 50, speed: 0.011, radius: 7 },
      { homeXFrac: 0.78, homeYFrac: 0.85, cx: 0, cy: 0, phase: 5.2, amp: 60, speed: 0.008, radius: 9 },
      { homeXFrac: 0.40, homeYFrac: 0.90, cx: 0, cy: 0, phase: 2.5, amp: 38, speed: 0.013, radius: 5 },
    ];

    const initNodePositions = (w: number, h: number) => {
      for (const node of floatingNodes) {
        node.cx = node.homeXFrac * w;
        node.cy = node.homeYFrac * h;
      }
    };
    initNodePositions(currentW, currentH);

    const focalLength = 650;
    const cameraDist = 650;

    // Helper to create safe gradients
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

    // Mouse movement listeners on window
    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      mouse.targetX = relX;
      mouse.targetY = relY;
      mouse.isHovered = true;

      // Calculate normalized position [-1, 1]
      const normX = Math.max(-1, Math.min(1, (relX / (rect.width || currentW) - 0.5) * 2));
      const normY = Math.max(-1, Math.min(1, (relY / (rect.height || currentH) - 0.5) * 2));

      // Target camera tilt based on cursor
      camera.targetPitch = 0.22 - normY * camera.tiltAmount;
      camera.targetYaw = normX * camera.tiltAmount;
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const dims = getDimensions();
      currentW = dims.w;
      currentH = dims.h;
      canvas.width = currentW * dpr;
      canvas.height = currentH * dpr;
      updateGridBounds(currentW, currentH);
      initNodePositions(currentW, currentH);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize);

    // ============================================================
    // MAIN RENDER LOOP (Continuous, Automatic, Silky Smooth 60fps)
    // ============================================================
    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.016;

      const { w: renderW, h: renderH } = getDimensions();
      if (renderW <= 0 || renderH <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // If user is not moving mouse, ambient virtual cursor slowly meanders
      if (!mouse.isHovered) {
        const ambientSpeed = time * 0.8;
        mouse.targetX = renderW * 0.5 + Math.sin(ambientSpeed) * (renderW * 0.28);
        mouse.targetY = renderH * 0.5 + Math.cos(ambientSpeed * 0.7) * (renderH * 0.22);
        camera.targetPitch = 0.22 + Math.cos(ambientSpeed * 0.5) * 0.03;
        camera.targetYaw = Math.sin(ambientSpeed * 0.5) * 0.04;
      }

      // Smooth mouse lerp
      const lerpFactor = 0.07;
      mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
      mouse.y += (mouse.targetY - mouse.y) * lerpFactor;

      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;
      mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      // Smooth camera tilt lerp
      camera.pitch += (camera.targetPitch - camera.pitch) * 0.05;
      camera.yaw += (camera.targetYaw - camera.yaw) * 0.05;

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      const cosX = Math.cos(camera.pitch);
      const sinX = Math.sin(camera.pitch);
      const cosY = Math.cos(camera.yaw);
      const sinY = Math.sin(camera.yaw);

      const originX = renderW * 0.5;
      const originY = renderH * 0.54;

      // ============================================================
      // 1. AMBIENT CURSOR ILLUMINATION AURA
      // ============================================================
      const auraRadius = 260 + Math.min(100, mouse.speed * 6);
      const cursorGlow = createSafeRadial(
        mouse.x, mouse.y, 4,
        mouse.x, mouse.y, auraRadius
      );
      if (cursorGlow) {
        cursorGlow.addColorStop(0, "rgba(0, 210, 255, 0.22)");
        cursorGlow.addColorStop(0.35, "rgba(0, 102, 255, 0.10)");
        cursorGlow.addColorStop(0.75, "rgba(56, 189, 248, 0.04)");
        cursorGlow.addColorStop(1, "rgba(0, 102, 255, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();
      }

      // ============================================================
      // 2. 3D TOPOLOGICAL WAVE GRAPH CALCULATION
      // ============================================================
      const projectedRibbons: WavePoint[][] = [];

      for (let r = 0; r < rows; r++) {
        const ribbon: WavePoint[] = [];
        const z = gridZ[r];

        for (let c = 0; c < cols; c++) {
          const x = gridX[c];

          // Automatic harmonic waves (running all the time)
          const wave1 = Math.sin(time * 1.5 + x * 0.0032 - z * 0.0034) * 34;
          const wave2 = Math.cos(time * 1.1 + x * 0.0048 + z * 0.0028) * 22;
          const microRipple = Math.sin(time * 2.2 + c * 0.12 - r * 0.14) * 9;

          let y = wave1 + wave2 + microRipple;

          // 3D rotation transform
          const y1 = y * cosX - z * sinX;
          const z1 = y * sinX + z * cosX;
          const x2 = x * cosY + z1 * sinY;
          const z2 = -x * sinY + z1 * cosY;

          // Perspective projection
          const denom = focalLength + z2 + cameraDist;
          const scale = denom > 10 ? focalLength / denom : 0.5;

          let px = x2 * scale + originX;
          let py = y1 * scale + originY;

          // Dynamic Cursor Reaction: Dome Uplift & Outward Push
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const distSq = dx * dx + dy * dy;
          const bulgeRadius = 340;
          const bulgeRadiusSq = bulgeRadius * bulgeRadius;

          let size = Math.max(0.7, 1.2 * scale);
          let alpha = Math.min(0.95, Math.max(0.20, 0.42 * scale));
          let color = c % 2 === 0 ? "#00D2FF" : "#0066FF";

          if (distSq < bulgeRadiusSq) {
            const dist = Math.sqrt(distSq);
            const norm = dist / bulgeRadius;
            // Bell curve lift
            const liftFactor = Math.cos(norm * (Math.PI * 0.5));

            // Vertical uplift
            py -= liftFactor * 80;

            // Radial outward dispersion
            const radialPush = liftFactor * 32;
            if (dist > 1) {
              px += (dx / dist) * radialPush;
              py += (dy / dist) * radialPush * 0.4;
            }

            // Highlighting near cursor
            alpha = Math.min(1, alpha + liftFactor * 0.55);
            size = Math.min(4.5, size + liftFactor * 2.5);
            color = liftFactor > 0.4 ? "#00D2FF" : "#38BDF8";
          }

          ribbon.push({ x, y, z, px, py, scale, size, alpha, color });
        }
        projectedRibbons.push(ribbon);
      }

      // ============================================================
      // 3. RENDER 3D WIREFRAME MESH LINES
      // ============================================================
      
      // Horizontal Wave Ribbons
      ctx.lineWidth = 0.9;
      for (let r = 0; r < rows; r += 2) {
        const ribbon = projectedRibbons[r];
        if (!ribbon || ribbon.length === 0) continue;

        ctx.beginPath();
        let started = false;
        for (let c = 0; c < cols; c++) {
          const pt = ribbon[c];
          if (!pt || !Number.isFinite(pt.px) || !Number.isFinite(pt.py)) continue;
          if (pt.px < -80 || pt.px > renderW + 80 || pt.py < -80 || pt.py > renderH + 80) continue;

          if (!started) {
            ctx.moveTo(pt.px, pt.py);
            started = true;
          } else {
            ctx.lineTo(pt.px, pt.py);
          }
        }
        ctx.strokeStyle = "rgba(0, 102, 255, 0.22)";
        ctx.stroke();
      }

      // Longitudinal Cross-Grid Lines (True 3D Wireframe Mesh)
      ctx.lineWidth = 0.7;
      for (let c = 0; c < cols; c += 3) {
        ctx.beginPath();
        let started = false;
        for (let r = 0; r < rows; r++) {
          const pt = projectedRibbons[r]?.[c];
          if (!pt || !Number.isFinite(pt.px) || !Number.isFinite(pt.py)) continue;
          if (pt.px < -80 || pt.px > renderW + 80 || pt.py < -80 || pt.py > renderH + 80) continue;

          if (!started) {
            ctx.moveTo(pt.px, pt.py);
            started = true;
          } else {
            ctx.lineTo(pt.px, pt.py);
          }
        }
        ctx.strokeStyle = "rgba(0, 210, 255, 0.14)";
        ctx.stroke();
      }

      // ============================================================
      // 4. RENDER GLOWING VERTEX NODES
      // ============================================================
      for (let r = 0; r < rows; r++) {
        const ribbon = projectedRibbons[r];
        for (let c = 0; c < cols; c++) {
          const pt = ribbon[c];
          if (!Number.isFinite(pt.px) || !Number.isFinite(pt.py)) continue;
          if (pt.px < -20 || pt.px > renderW + 20 || pt.py < -20 || pt.py > renderH + 20) continue;

          // Outer halo for larger foreground/cursor-excited nodes
          if (pt.size > 2.4) {
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, pt.size * 2.0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 210, 255, ${pt.alpha * 0.35})`;
            ctx.fill();
          }

          // Core vertex dot
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, pt.size, 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = pt.alpha;
          ctx.fill();
        }
      }

      // ============================================================
      // 5. FLOATING GLASS ACCENT SPHERES (Atmospheric Parallax)
      // ============================================================
      for (let i = 0; i < floatingNodes.length; i++) {
        const node = floatingNodes[i];
        node.phase += node.speed;

        const homeX = node.homeXFrac * renderW;
        const homeY = node.homeYFrac * renderH;
        const floatY = Math.sin(node.phase) * node.amp;

        // Subtle cursor parallax
        const normX = (mouse.x / renderW - 0.5) * 2;
        const normY = (mouse.y / renderH - 0.5) * 2;
        const parallaxX = normX * 18 * (i % 2 === 0 ? 1 : -0.6);
        const parallaxY = normY * 20 * (i % 3 === 0 ? 1 : -0.7);

        const targetX = homeX + parallaxX;
        const targetY = homeY + floatY + parallaxY;

        node.cx += (targetX - node.cx) * 0.04;
        node.cy += (targetY - node.cy) * 0.04;

        const bpx = node.cx;
        const bpy = node.cy;
        const br = node.radius;

        if (!Number.isFinite(bpx) || !Number.isFinite(bpy)) continue;

        ctx.save();

        // Soft drop shadow
        ctx.beginPath();
        ctx.ellipse(bpx + 1, bpy + br * 0.85, br * 0.8, br * 0.25, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 60, 180, 0.16)";
        ctx.fill();

        // 3D Glass Radial Gradient
        const orbGrad = createSafeRadial(
          bpx - br * 0.3, bpy - br * 0.3, br * 0.05,
          bpx, bpy, br
        );

        ctx.beginPath();
        ctx.arc(bpx, bpy, br, 0, Math.PI * 2);
        if (orbGrad) {
          orbGrad.addColorStop(0, "#E0F4FF");
          orbGrad.addColorStop(0.25, "#00D2FF");
          orbGrad.addColorStop(0.65, "#0066FF");
          orbGrad.addColorStop(1, "#003399");
          ctx.fillStyle = orbGrad;
        } else {
          ctx.fillStyle = "#0066FF";
        }
        ctx.globalAlpha = 0.90;
        ctx.fill();

        // Specular glint
        const glint = createSafeRadial(
          bpx - br * 0.3, bpy - br * 0.3, 0.1,
          bpx, bpy, br * 0.4
        );
        ctx.beginPath();
        ctx.arc(bpx - br * 0.3, bpy - br * 0.3, br * 0.4, 0, Math.PI * 2);
        if (glint) {
          glint.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          glint.addColorStop(0.4, "rgba(255, 255, 255, 0.25)");
          glint.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = glint;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        }
        ctx.globalAlpha = 0.95;
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default HeroWaveFlowCanvas3D;
