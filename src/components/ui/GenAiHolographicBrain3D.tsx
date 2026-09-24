import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BrainPoint3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  color: string;
  hemisphere: "left" | "right";
  pulsePhase: number;
}

interface SynapseLine {
  p1: number;
  p2: number;
  strength: number;
  pulseOffset: number;
}

interface GenAiHolographicBrain3DProps {
  activePillar?: string | null;
  onHoverPillar?: (pillar: string | null) => void;
}

export const GenAiHolographicBrain3D: React.FC<GenAiHolographicBrain3DProps> = ({
  activePillar,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getDimensions = () => {
      const w = canvas.parentElement?.clientWidth || 700;
      const h = canvas.parentElement?.clientHeight || 560;
      return { w: Math.max(320, w), h: Math.max(340, h) };
    };

    let { w: initW, h: initH } = getDimensions();
    canvas.width = initW * dpr;
    canvas.height = initH * dpr;

    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const state = {
      rotY: 0,
      rotX: 0.18,
      speed: 0.007,
      pedestalSpin: 0,
    };

    // ============================================================
    // GENERATE 3D ANATOMICAL BRAIN MESH (Two Hemispheres + Gyri)
    // ============================================================
    const brainPoints: BrainPoint3D[] = [];
    const synapses: SynapseLine[] = [];

    const totalNodes = 360;
    const scaleX = 110;
    const scaleY = 88;
    const scaleZ = 125;

    for (let i = 0; i < totalNodes; i++) {
      const isRight = i % 2 === 0;
      const hemisphere = isRight ? "right" : "left";

      // Uniform spherical sampling
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const sinP = Math.sin(phi);
      const cosP = Math.cos(phi);
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      // Base ellipsoid
      let bx = Math.abs(sinP * cosT); // keep positive for one hemisphere
      let by = cosP;
      let bz = sinP * sinT;

      // Brain shape deformations:
      // Flatten at bottom, elongate front-to-back, taper frontal & occipital lobes
      by *= 0.85;
      if (by < -0.2) by *= 1.15; // cerebellum dip
      bz *= 1.12; // anterior-posterior length

      // Gyri & Sulci surface folds (wrinkles of the cortex)
      const wrinkle1 = Math.sin(bx * 7.5) * Math.cos(by * 8.0) * Math.sin(bz * 6.5) * 0.09;
      const wrinkle2 = Math.sin(bx * 13.0) * Math.cos(bz * 11.0) * 0.05;
      const wrinkle = wrinkle1 + wrinkle2;

      let r = 1.0 + wrinkle;

      // Separate into Left and Right Hemispheres with longitudinal fissure
      const fissureGap = 10;
      let posX = (bx * scaleX * r) + fissureGap;
      if (!isRight) posX = -posX;

      let posY = -by * scaleY * r - 25; // center slightly above pedestal
      let posZ = bz * scaleZ * r;

      // Cerebellum clump at bottom posterior
      if (posZ < -35 && posY > 15) {
        posY += 10;
        posX *= 0.88;
      }

      brainPoints.push({
        x: posX,
        y: posY,
        z: posZ,
        baseRadius: 2.2 + Math.random() * 2.2,
        color: Math.random() < 0.25 ? "#38BDF8" : Math.random() < 0.6 ? "#00D2FF" : "#60A5FA",
        hemisphere,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Interconnect neighbouring synapses
    for (let i = 0; i < brainPoints.length; i++) {
      let connectionsCount = 0;
      for (let j = i + 1; j < brainPoints.length; j++) {
        // Mostly connect within same hemisphere
        if (brainPoints[i].hemisphere !== brainPoints[j].hemisphere && Math.random() > 0.06) {
          continue;
        }

        const dx = brainPoints[i].x - brainPoints[j].x;
        const dy = brainPoints[i].y - brainPoints[j].y;
        const dz = brainPoints[i].z - brainPoints[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 34 && connectionsCount < 3) {
          synapses.push({
            p1: i,
            p2: j,
            strength: Math.max(0.2, 1 - dist / 34),
            pulseOffset: Math.random() * 4,
          });
          connectionsCount++;
        }
      }
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      mouse.targetX = (cx / rect.width) * 1.2;
      mouse.targetY = -(cy / rect.height) * 0.8;
    };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { w, h } = getDimensions();
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    const focalLength = 520;

    const render = () => {
      time += 0.016;

      const { w: renderW, h: renderH } = getDimensions();
      if (renderW <= 0 || renderH <= 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      state.rotY += state.speed + mouse.x * 0.008;
      state.rotX = 0.16 + mouse.y * 0.28;
      state.pedestalSpin += 0.005;

      const cosY = Math.cos(state.rotY);
      const sinY = Math.sin(state.rotY);
      const cosX = Math.cos(state.rotX);
      const sinX = Math.sin(state.rotX);

      const centerX = renderW * 0.5;
      const centerY = renderH * 0.48;

      // ============================================================
      // 1. FUTURISTIC 3D GLOWING PEDESTAL & RAYS (Image 1 style)
      // ============================================================
      const pedestalY = centerY + 140;

      // Vertical Laser Beam from platform to brain
      const laserGrad = ctx.createLinearGradient(centerX, pedestalY + 20, centerX, centerY - 60);
      laserGrad.addColorStop(0, "rgba(0, 210, 255, 0.45)");
      laserGrad.addColorStop(0.3, "rgba(0, 102, 255, 0.25)");
      laserGrad.addColorStop(0.8, "rgba(56, 189, 248, 0.12)");
      laserGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX - 48, pedestalY + 10);
      ctx.lineTo(centerX + 48, pedestalY + 10);
      ctx.lineTo(centerX + 85, centerY - 60);
      ctx.lineTo(centerX - 85, centerY - 60);
      ctx.closePath();
      ctx.fillStyle = laserGrad;
      ctx.fill();
      ctx.restore();

      // Pedestal Concentric Neon Blue Rings
      const ringRadii = [185, 140, 105, 75, 45];
      ringRadii.forEach((rad, idx) => {
        ctx.save();
        ctx.beginPath();
        // Perspective ellipse for pedestal surface
        ctx.ellipse(centerX, pedestalY + idx * 4, rad, rad * 0.32, 0, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 1 ? "rgba(0, 210, 255, 0.85)" : "rgba(0, 102, 255, 0.45)";
        ctx.lineWidth = idx === 1 ? 2.2 : 1.2;
        if (idx === 1) {
          ctx.shadowColor = "#00D2FF";
          ctx.shadowBlur = 16;
        }
        ctx.stroke();
        ctx.restore();
      });

      // Rotating Pedestal Radial Grid Rays
      const raysCount = 16;
      for (let r = 0; r < raysCount; r++) {
        const angle = (r * Math.PI * 2) / raysCount + state.pedestalSpin;
        const innerR = 45;
        const outerR = 185;

        const x0 = centerX + Math.cos(angle) * innerR;
        const y0 = pedestalY + Math.sin(angle) * (innerR * 0.32);
        const x1 = centerX + Math.cos(angle) * outerR;
        const y1 = pedestalY + Math.sin(angle) * (outerR * 0.32);

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = "rgba(0, 102, 255, 0.20)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Pedestal Platform Glow Core
      const corePedestalGlow = ctx.createRadialGradient(
        centerX, pedestalY, 5,
        centerX, pedestalY, 110
      );
      corePedestalGlow.addColorStop(0, "rgba(0, 210, 255, 0.7)");
      corePedestalGlow.addColorStop(0.5, "rgba(0, 102, 255, 0.3)");
      corePedestalGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.ellipse(centerX, pedestalY, 110, 35, 0, 0, Math.PI * 2);
      ctx.fillStyle = corePedestalGlow;
      ctx.fill();

      // ============================================================
      // 2. PROJECT 3D BRAIN MESH POINTS & RENDER
      // ============================================================
      interface ProjectedPt {
        px: number;
        py: number;
        pz: number;
        scale: number;
        radius: number;
        color: string;
        alpha: number;
      }

      const projected: ProjectedPt[] = [];

      for (let i = 0; i < brainPoints.length; i++) {
        const pt = brainPoints[i];

        // Rotation Y
        const x1 = pt.x * cosY + pt.z * sinY;
        const z1 = -pt.x * sinY + pt.z * cosY;

        // Rotation X
        const y2 = pt.y * cosX - z1 * sinX;
        const z2 = pt.y * sinX + z1 * cosX;

        const cameraDist = 480;
        const denom = focalLength + z2 + cameraDist;
        const scale = denom > 1 ? focalLength / denom : 0.5;

        const px = x1 * scale + centerX;
        const py = y2 * scale + centerY;

        const pulse = 1 + Math.sin(time * 3.0 + pt.pulsePhase) * 0.25;
        const radius = Math.max(1.2, pt.baseRadius * scale * pulse);
        const depthAlpha = Math.min(1, Math.max(0.18, 0.55 + (z2 / 240) * 0.45));

        projected.push({
          px,
          py,
          pz: z2,
          scale,
          radius,
          color: pt.color,
          alpha: depthAlpha,
        });
      }

      // Draw Synapse Lines
      for (let i = 0; i < synapses.length; i++) {
        const syn = synapses[i];
        const p1 = projected[syn.p1];
        const p2 = projected[syn.p2];
        if (!p1 || !p2) continue;

        const avgZ = (p1.pz + p2.pz) * 0.5;
        const beamAlpha = Math.min(0.85, Math.max(0.08, (syn.strength + (avgZ / 260) * 0.4)));

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = `rgba(0, 160, 255, ${beamAlpha * 0.45})`;
        ctx.lineWidth = Math.max(0.5, 0.9 * ((p1.scale + p2.scale) * 0.5));
        ctx.stroke();

        // High-velocity energy pulses travelling through brain synapses
        if (i % 3 === 0) {
          const prog = (time * 1.8 + syn.pulseOffset) % 1;
          const photonX = p1.px + (p2.px - p1.px) * prog;
          const photonY = p1.py + (p2.py - p1.py) * prog;

          ctx.beginPath();
          ctx.arc(photonX, photonY, Math.max(0.8, 1.8 * p1.scale), 0, Math.PI * 2);
          ctx.fillStyle = "#E0F2FE";
          ctx.shadowColor = "#00D2FF";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Depth sort nodes (back to front)
      const sorted = projected
        .map((p, idx) => ({ idx, pz: p.pz }))
        .sort((a, b) => a.pz - b.pz);

      // Render glowing nodes
      for (let i = 0; i < sorted.length; i++) {
        const p = projected[sorted[i].idx];

        // Bloom for front nodes
        if (p.pz > 20) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 210, 255, ${p.alpha * 0.35})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = "#00D2FF";
        ctx.shadowBlur = p.pz > 0 ? 8 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      // ============================================================
      // 3. CYBORG ROBOTIC HAND TOUCH POINT (Image 1 style)
      // Touching the brain with a radiant spark of intelligence
      // ============================================================
      const touchX = centerX + 115;
      const touchY = centerY - 10;

      // Radiant energy spark
      const sparkGlow = ctx.createRadialGradient(touchX, touchY, 1, touchX, touchY, 38);
      sparkGlow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      sparkGlow.addColorStop(0.2, "rgba(0, 210, 255, 0.85)");
      sparkGlow.addColorStop(0.6, "rgba(0, 102, 255, 0.35)");
      sparkGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(touchX, touchY, 38, 0, Math.PI * 2);
      ctx.fillStyle = sparkGlow;
      ctx.fill();

      // Spark flare star
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(touchX - 18, touchY);
      ctx.lineTo(touchX + 18, touchY);
      ctx.moveTo(touchX, touchY - 18);
      ctx.lineTo(touchX, touchY + 18);
      ctx.stroke();

      // Robotic finger tip segment
      ctx.save();
      ctx.translate(touchX, touchY);
      ctx.rotate(0.55); // angled finger

      // Finger tip joint
      ctx.beginPath();
      ctx.roundRect(8, -5, 45, 10, 5);
      ctx.fillStyle = "#E2E8F0";
      ctx.shadowColor = "rgba(0, 102, 255, 0.5)";
      ctx.shadowBlur = 10;
      ctx.fill();

      // Finger second segment
      ctx.beginPath();
      ctx.roundRect(56, -6, 50, 12, 6);
      ctx.fillStyle = "#94A3B8";
      ctx.fill();

      // Finger third segment
      ctx.beginPath();
      ctx.roundRect(110, -7, 60, 14, 7);
      ctx.fillStyle = "#64748B";
      ctx.fill();

      // Neon cyan accent line on finger
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(165, 0);
      ctx.strokeStyle = "#00D2FF";
      ctx.lineWidth = 2.0;
      ctx.shadowColor = "#00D2FF";
      ctx.shadowBlur = 8;
      ctx.stroke();

      ctx.restore();

      ctx.restore();
    };

    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activePillar]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block cursor-grab active:cursor-grabbing"
    />
  );
};

export default GenAiHolographicBrain3D;
