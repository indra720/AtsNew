import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export const HeroInteractiveCyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Parallax offset for floating glass badges
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getDimensions = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth || window.innerWidth || 1280;
      const h = parent?.clientHeight || window.innerHeight || 720;
      return { w: Math.max(300, w), h: Math.max(300, h) };
    };

    let { w, h } = getDimensions();
    canvas.width = w * dpr;
    canvas.height = h * dpr;

    // Mouse coordinates relative to hero container
    const mouse = {
      x: w * 0.5,
      y: h * 0.45,
      targetX: w * 0.5,
      targetY: h * 0.45,
      radius: 200,
      isHovered: false,
    };

    // Initialize clean constellation & matrix nodes
    const nodes: Node[] = [];
    const nodeCount = Math.floor(Math.min(75, Math.max(40, (w * h) / 18000)));

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1.2 + Math.random() * 1.8,
        baseAlpha: 0.25 + Math.random() * 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
      });
    }

    // Grid dots in geometric alignment
    const gridCols = 24;
    const gridRows = 14;

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.isHovered = true;

      // Parallax calculation for floating glass cards
      const normX = (mouse.targetX / (rect.width || w) - 0.5) * 2;
      const normY = (mouse.targetY / (rect.height || h) - 0.5) * 2;
      setParallax({ x: normX * 14, y: normY * 12 });
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onMouseLeave = () => {
      mouse.isHovered = false;
      setParallax({ x: 0, y: 0 });
    };

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const dims = getDimensions();
      w = dims.w;
      h = dims.h;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("mouseleave", onMouseLeave);

    // ============================================================
    // 60FPS SMOOTH RENDER LOOP
    // ============================================================
    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.016;

      const dims = getDimensions();
      w = dims.w;
      h = dims.h;

      // Smooth mouse lerp
      const lerp = 0.08;
      mouse.x += (mouse.targetX - mouse.x) * lerp;
      mouse.y += (mouse.targetY - mouse.y) * lerp;

      // Ambient wandering when idle
      if (!mouse.isHovered) {
        mouse.targetX = w * 0.5 + Math.sin(time * 0.7) * (w * 0.22);
        mouse.targetY = h * 0.45 + Math.cos(time * 0.5) * (h * 0.18);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      // ============================================================
      // 1. SUBTLE LUXURY SPOTLIGHT ILLUMINATION
      // ============================================================
      const glowGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 10,
        mouse.x, mouse.y, mouse.radius * 1.8
      );
      glowGrad.addColorStop(0, "rgba(0, 210, 255, 0.15)");
      glowGrad.addColorStop(0.4, "rgba(0, 102, 255, 0.08)");
      glowGrad.addColorStop(1, "rgba(0, 102, 255, 0)");

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // ============================================================
      // 2. CLEAN GEOMETRIC BACKGROUND DOT MATRIX
      // ============================================================
      const colStep = w / (gridCols + 1);
      const rowStep = h / (gridRows + 1);

      for (let r = 1; r <= gridRows; r++) {
        for (let c = 1; c <= gridCols; c++) {
          const gx = c * colStep;
          const gy = r * rowStep;

          const dx = gx - mouse.x;
          const dy = gy - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle illumination if near cursor
          const nearCursor = dist < mouse.radius * 1.3;
          const proximity = nearCursor ? 1 - dist / (mouse.radius * 1.3) : 0;

          const dotRadius = nearCursor ? 1.4 + proximity * 1.4 : 1.0;
          const dotAlpha = 0.12 + proximity * 0.45;

          ctx.beginPath();
          ctx.arc(gx, gy, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = nearCursor
            ? `rgba(0, 210, 255, ${dotAlpha})`
            : `rgba(0, 102, 255, ${dotAlpha})`;
          ctx.fill();
        }
      }

      // ============================================================
      // 3. ORGANIC CONSTELLATION NODES & CONCURRENT CONNECTIONS
      // ============================================================
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Autonomous gentle float
        node.pulsePhase += node.pulseSpeed;
        node.x += node.vx + Math.sin(node.pulsePhase) * 0.25;
        node.y += node.vy + Math.cos(node.pulsePhase) * 0.22;

        // Wrap around boundaries
        if (node.x < -30) node.x = w + 30;
        if (node.x > w + 30) node.x = -30;
        if (node.y < -30) node.y = h + 30;
        if (node.y > h + 30) node.y = -30;

        // Cursor magnetic reaction
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentAlpha = node.baseAlpha + Math.sin(node.pulsePhase) * 0.15;
        let currentRadius = node.radius;

        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius;
          // Gentle push away
          node.x += (dx / dist) * factor * 1.8;
          node.y += (dy / dist) * factor * 1.8;
          currentAlpha = Math.min(0.95, currentAlpha + factor * 0.55);
          currentRadius = node.radius + factor * 1.8;
        }

        // Draw connections between neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const ndx = node.x - nodeB.x;
          const ndy = node.y - nodeB.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
          const maxConnectDist = 135;

          if (nDist < maxConnectDist) {
            const lineFactor = 1 - nDist / maxConnectDist;
            
            // Check if connection is near cursor to highlight
            const midX = (node.x + nodeB.x) * 0.5;
            const midY = (node.y + nodeB.y) * 0.5;
            const curDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
            const isNearCursor = curDist < mouse.radius * 1.1;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.lineWidth = isNearCursor ? 1.0 : 0.6;
            ctx.strokeStyle = isNearCursor
              ? `rgba(0, 210, 255, ${lineFactor * 0.55})`
              : `rgba(0, 102, 255, ${lineFactor * 0.18})`;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = dist < mouse.radius ? "#00D2FF" : "#0066FF";
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Extra halo for excited nodes
        if (dist < mouse.radius * 0.8) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 210, 255, 0.25)";
          ctx.fill();
        }
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
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Main High-Performance Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. Soft Ambient Multi-Spectrum Aurora Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-[#0066FF]/12 via-[#00D2FF]/14 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-gradient-to-t from-[#00D2FF]/10 via-[#0066FF]/8 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* 3. Floating 3D Frosted Glass Telemetry Badges (Desktop & Tablet) */}
      {/* Left Glass Telemetry Card */}
      <motion.div
        style={{
          transform: `translate3d(${parallax.x * -1}px, ${parallax.y * -1}px, 0)`,
          transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="absolute top-24 left-6 xl:left-14 hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 dark:bg-slate-900/80 border border-blue-200/80 dark:border-blue-500/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,102,255,0.08)] pointer-events-auto hover:border-[#0066FF]/60 hover:shadow-[0_12px_36px_rgba(0,102,255,0.18)] transition-all group cursor-pointer"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D2FF]/20 to-[#0066FF]/30 border border-cyan-400/40 flex items-center justify-center text-[#0066FF] dark:text-cyan-300 shadow-sm group-hover:scale-105 transition-transform">
          <Brain className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider font-mono text-slate-800 dark:text-slate-100 uppercase">
              NEURAL CORE 3.0
            </span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
            4.2ms Latency &bull; 99.98% Accuracy
          </div>
        </div>
      </motion.div>

      {/* Right Glass Telemetry Card */}
      <motion.div
        style={{
          transform: `translate3d(${parallax.x * 1.1}px, ${parallax.y * 1.1}px, 0)`,
          transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="absolute bottom-28 right-6 xl:right-14 hidden lg:flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/85 dark:bg-slate-900/80 border border-blue-200/80 dark:border-blue-500/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,102,255,0.08)] pointer-events-auto hover:border-[#00D2FF]/60 hover:shadow-[0_12px_36px_rgba(0,210,255,0.18)] transition-all group cursor-pointer"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D2FF]/30 border border-blue-400/40 flex items-center justify-center text-[#0066FF] dark:text-cyan-300 shadow-sm group-hover:scale-105 transition-transform">
          <Activity className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider font-mono text-slate-800 dark:text-slate-100 uppercase">
              CLOUD THROUGHPUT
            </span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">142.5K+</span>
            <span>ops/sec &bull; Real-time Mesh</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroInteractiveCyberGrid;
