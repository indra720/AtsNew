import React, { useEffect, useRef } from "react";

export const ThreeDCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for 3D sphere/network
    const numParticles = 65;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
    }> = [];

    const colors = ["#00F2FE", "#3B82F6", "#6366F1", "#A855F7"];

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 120 + Math.random() * 80;

      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        radius: 1.5 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.006,
        vy: (Math.random() - 0.5) * 0.006,
        vz: (Math.random() - 0.5) * 0.006,
        color: colors[i % colors.length],
      });
    }

    let angleX = 0;
    let angleY = 0;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.0002;
      mouseY = (e.clientY - rect.top - height / 2) * 0.0002;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += 0.004 + mouseY * 0.5;
      angleY += 0.005 + mouseX * 0.5;

      const fov = 350;
      const projected: Array<{ x2d: number; y2d: number; scale: number; p: (typeof particles)[0] }> = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation matrix (Y-axis)
        let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        let z1 = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);

        // 3D rotation matrix (X-axis)
        let y2 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = z1 * Math.cos(angleX) + p.y * Math.sin(angleX);

        const depth = z2 + 300;
        if (depth <= 0) continue;

        const scale = fov / depth;
        const x2d = x1 * scale + width / 2;
        const y2d = y2 * scale + height / 2;

        projected.push({ x2d, y2d, scale, p });
      }

      // Draw connecting 3D wireframe mesh
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x2d - projected[j].x2d;
          const dy = projected[i].y2d - projected[j].y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.35 * Math.min(projected[i].scale, projected[j].scale);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x2d, projected[i].y2d);
            ctx.lineTo(projected[j].x2d, projected[j].y2d);
            ctx.stroke();
          }
        }
      }

      // Draw 3D glowing particle nodes
      for (const item of projected) {
        ctx.beginPath();
        ctx.arc(item.x2d, item.y2d, Math.max(1, item.p.radius * item.scale), 0, Math.PI * 2);
        ctx.fillStyle = item.p.color;
        ctx.shadowBlur = 10 * item.scale;
        ctx.shadowColor = item.p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={`w-full h-full pointer-events-none ${className}`} />;
};

export default ThreeDCanvas;
