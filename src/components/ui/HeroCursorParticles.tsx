import React, { useEffect, useRef } from "react";

// Google Antigravity vibrant palette
const ANTIGRAVITY_COLORS = [
  "#4285F4", // Google Blue
  "#EA4335", // Google Red
  "#FBBC05", // Google Yellow
  "#34A853", // Google Green
  "#9333EA", // Purple
  "#FF6D00", // Bright Orange
  "#00E5FF", // Electric Cyan
  "#F43F5E", // Rose
  "#8B5CF6", // Violet
  "#10B981", // Emerald
];

interface DashParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  length: number;
  width: number;
  angle: number;
  color: string;
  alpha: number;
  scale: number;
  growth: number;
  isDot: boolean;
}

export default function HeroCursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent.clientWidth || window.innerWidth;
      const h = parent.clientHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };
    resize();

    const particles: DashParticle[] = [];
    const MAX = 220;

    let prevX = parent.clientWidth * 0.5;
    let prevY = parent.clientHeight * 0.5;

    const spawnParticles = (cx: number, cy: number, rawVx: number, rawVy: number) => {
      const speed = Math.sqrt(rawVx * rawVx + rawVy * rawVy);
      if (speed < 0.8) return;

      const count = Math.min(10, Math.max(2, Math.floor(speed * 0.55)));

      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX) {
          particles.splice(0, 3);
        }

        const baseAngle = Math.atan2(rawVy, rawVx);
        const angle =
          Math.random() < 0.65
            ? baseAngle + (Math.random() - 0.5) * Math.PI * 0.95
            : Math.random() * Math.PI * 2;

        const particleSpeed = (speed * 0.6 + 2.5) * (0.8 + Math.random() * 2.2);
        const spawnDist = 6 + Math.random() * 28;
        const isDot = Math.random() < 0.35;

        particles.push({
          x: cx + Math.cos(angle) * spawnDist,
          y: cy + Math.sin(angle) * spawnDist,
          vx: Math.cos(angle) * particleSpeed,
          vy: Math.sin(angle) * particleSpeed,
          life: 1.0,
          maxLife: 0.5 + Math.random() * 0.7,
          length: isDot ? 3 : 5 + Math.random() * 11,
          width: isDot ? 3 : 1.5 + Math.random() * 1.8,
          angle: angle,
          color: ANTIGRAVITY_COLORS[Math.floor(Math.random() * ANTIGRAVITY_COLORS.length)],
          alpha: 0.85 + Math.random() * 0.15,
          scale: 0.5,
          growth: 1.08 + Math.random() * 0.08,
          isDot,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      // Only trigger if mouse is inside the hero section
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const vx = cx - prevX;
      const vy = cy - prevY;
      spawnParticles(cx, cy, vx, vy);
      prevX = cx;
      prevY = cy;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const t = e.touches[0];
      const rect = parent.getBoundingClientRect();
      if (
        t.clientX < rect.left ||
        t.clientX > rect.right ||
        t.clientY < rect.top ||
        t.clientY > rect.bottom
      ) {
        return;
      }
      const cx = t.clientX - rect.left;
      const cy = t.clientY - rect.top;
      const vx = cx - prevX;
      const vy = cy - prevY;
      spawnParticles(cx, cy, vx, vy);
      prevX = cx;
      prevY = cy;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", resize);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.life -= 0.016 / p.maxLife;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.vx *= 0.91;
        p.vy *= 0.91;
        p.x += p.vx;
        p.y += p.vy;

        if (p.scale < 1.35) {
          p.scale *= p.growth;
        }

        if (!p.isDot && (Math.abs(p.vx) > 0.15 || Math.abs(p.vy) > 0.15)) {
          p.angle = Math.atan2(p.vy, p.vx);
        }

        const currentAlpha = p.life * p.alpha;
        if (currentAlpha < 0.02) continue;

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.translate(p.x, p.y);
        ctx.scale(p.scale, p.scale);

        if (p.isDot) {
          ctx.beginPath();
          ctx.arc(0, 0, p.width * 0.85, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          ctx.rotate(p.angle);
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(-p.length * 0.5, -p.width * 0.5, p.length, p.width, p.width * 0.5);
          } else {
            ctx.rect(-p.length * 0.5, -p.width * 0.5, p.length, p.width);
          }
          ctx.fillStyle = p.color;
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
    />
  );
}
