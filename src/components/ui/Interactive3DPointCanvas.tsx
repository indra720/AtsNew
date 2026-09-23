import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  phase: number;
}

export default function Interactive3DPointCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse Tracking with Smooth Damping
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    // Camera Rotation Damping (Follows Cursor in 3D Space)
    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    // 3D Spatial Volume Settings
    const focalLength = 550;
    const numPoints = Math.min(220, Math.floor((width * height) / 4500));
    const points: Point3D[] = [];

    // Initialize 3D Point-Cloud in a Broad Spatial Field
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (Math.random() - 0.5) * 1100,
        y: (Math.random() - 0.5) * 700,
        z: (Math.random() - 0.5) * 600,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        baseRadius: Math.random() * 1.8 + 1.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;

      // Calculate 3D camera tilt angles from normalized cursor position
      const normX = (mouse.targetX / width - 0.5) * 2;
      const normY = (mouse.targetY / height - 0.5) * 2;
      targetRotY = normX * 0.28; // Yaw
      targetRotX = -normY * 0.22; // Pitch
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      targetRotX = 0;
      targetRotY = 0;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth camera interpolation towards cursor
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Projected Points Cache for Proximity Connections
      const projected: Array<{
        px: number;
        py: number;
        scale: number;
        z2: number;
        radius: number;
        glow: number;
      }> = [];

      // 1. Update and Project 3D Points
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // 3D Harmonic Wave Motion (Living flow field)
        pt.x += pt.vx + Math.sin(time + pt.phase) * 0.3;
        pt.y += pt.vy + Math.cos(time + pt.phase) * 0.3;
        pt.z += pt.vz + Math.sin(time * 0.5 + pt.phase) * 0.2;

        // Bounding Box Re-circulation
        if (pt.x > 600) pt.x = -600;
        if (pt.x < -600) pt.x = 600;
        if (pt.y > 380) pt.y = -380;
        if (pt.y < -380) pt.y = 380;
        if (pt.z > 350) pt.z = -350;
        if (pt.z < -350) pt.z = 350;

        // 3D Rotations (Pitch & Yaw)
        const y1 = pt.y * cosX - pt.z * sinX;
        const z1 = pt.y * sinX + pt.z * cosX;
        const x2 = pt.x * cosY + z1 * sinY;
        const z2 = -pt.x * sinY + z1 * cosY;

        // Perspective Scale Calculation
        const cameraZ = 550;
        const scale = focalLength / (focalLength + z2 + cameraZ);
        const px = x2 * scale + width / 2;
        const py = y1 * scale + height / 2;

        // Mouse Proximity Force (Repulsion / Magnetic Energy)
        let glow = 0;
        if (mouse.isHovered) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            glow = (1 - dist / 130) * 1.5;
            // Gentle spatial push
            pt.x += (dx / dist) * 1.2;
            pt.y += (dy / dist) * 1.2;
          }
        }

        const radius = Math.max(0.6, pt.baseRadius * scale * (1 + glow * 0.8));

        projected.push({
          px,
          py,
          scale,
          z2,
          radius,
          glow,
        });
      }

      // 2. Draw 3D Neural Connectors Between Close Points
      const maxConnectDist = 80;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.px < 0 || p1.px > width || p1.py < 0 || p1.py > height) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.22 * p1.scale * p2.scale;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`;
            ctx.lineWidth = 0.9 * p1.scale;
            ctx.stroke();
          }
        }

        // 3. Draw Laser Connectors to Cursor when nearby
        if (mouse.isHovered && p1.glow > 0.2) {
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 210, 255, ${p1.glow * 0.4})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // 4. Draw 3D Glowing Particle Points with Depth Glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (p.px < -20 || p.px > width + 20 || p.py < -20 || p.py > height + 20) continue;

        const depthAlpha = Math.min(1, Math.max(0.2, (p.z2 + 350) / 700 * 0.85 + 0.15));

        // Outer Neon Halo
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius * (p.glow > 0 ? 3.5 : 2), 0, Math.PI * 2);
        ctx.fillStyle = p.glow > 0
          ? `rgba(0, 210, 255, ${0.35 * depthAlpha})`
          : `rgba(0, 102, 255, ${0.15 * depthAlpha})`;
        ctx.fill();

        // Core Point
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.glow > 0
          ? "#00D2FF"
          : `rgba(0, 102, 255, ${depthAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
