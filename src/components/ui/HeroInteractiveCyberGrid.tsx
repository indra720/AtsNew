import React, { useEffect, useRef } from "react";

interface CyberNode {
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
  side: "left" | "right";
  minX: number;
  maxX: number;
}

export const HeroInteractiveCyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      radius: 220,
      isHovered: false,
    };

    // ============================================================
    // PERFECTLY BALANCED SYMMETRICAL LEFT & RIGHT CYBER NODES
    // ============================================================
    const nodes: CyberNode[] = [];
    const sideCount = Math.floor(Math.min(30, Math.max(18, (w * h) / 38000)));

    // 1. Left Wing Nodes (0 to 36% of screen width)
    for (let i = 0; i < sideCount; i++) {
      const minX = -10;
      const maxX = w * 0.36;
      const x = minX + Math.random() * (maxX - minX);
      const y = Math.random() * h;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1.4 + Math.random() * 1.8,
        baseAlpha: 0.35 + Math.random() * 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.02,
        side: "left",
        minX,
        maxX,
      });
    }

    // 2. Right Wing Nodes (64% to 100% of screen width)
    for (let i = 0; i < sideCount; i++) {
      const minX = w * 0.64;
      const maxX = w + 10;
      const x = minX + Math.random() * (maxX - minX);
      const y = Math.random() * h;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1.4 + Math.random() * 1.8,
        baseAlpha: 0.35 + Math.random() * 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.02,
        side: "right",
        minX,
        maxX,
      });
    }

    // Grid dots in geometric alignment
    const gridCols = 26;
    const gridRows = 14;

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.isHovered = true;
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onMouseLeave = () => {
      mouse.isHovered = false;
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
        mouse.targetX = w * 0.5 + Math.sin(time * 0.6) * (w * 0.25);
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
      // 3. ORGANIC CONSTELLATION NODES & BALANCED CONNECTIONS
      // ============================================================
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Autonomous gentle float
        node.pulsePhase += node.pulseSpeed;
        node.x += node.vx + Math.sin(node.pulsePhase) * 0.25;
        node.y += node.vy + Math.cos(node.pulsePhase) * 0.22;

        // Wrap around boundaries within its designated wing (left or right)
        if (node.x < node.minX) node.x = node.maxX;
        if (node.x > node.maxX) node.x = node.minX;
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
          node.x += (dx / dist) * factor * 1.6;
          node.y += (dy / dist) * factor * 1.6;
          currentAlpha = Math.min(0.95, currentAlpha + factor * 0.5);
          currentRadius = node.radius + factor * 1.6;
        }

        // Draw connections between nodes on the SAME side
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          if (node.side !== nodeB.side) continue; // Keep center clear

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
              ? `rgba(0, 210, 255, ${lineFactor * 0.6})`
              : `rgba(0, 102, 255, ${lineFactor * 0.22})`;
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

      {/* 2. Symmetrical Ambient Multi-Spectrum Aurora Lights (Left & Right Balanced) */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[450px] bg-gradient-to-tr from-[#0066FF]/12 via-[#00D2FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[450px] bg-gradient-to-tl from-[#0066FF]/12 via-[#00D2FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
};

export default HeroInteractiveCyberGrid;
