import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  color: string;
  label?: string;
  orbitRadius?: number;
  orbitSpeed?: number;
  orbitAngle?: number;
  pulsePhase: number;
}

interface SynapseConnection {
  from: number;
  to: number;
  strength: number;
  pulseOffset: number;
}

export const GenAiNeuralCore3DCanvas: React.FC<{
  activeCapability?: string;
  interactive?: boolean;
}> = ({ activeCapability = "All Systems", interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getDimensions = () => {
      const w = canvas.parentElement?.clientWidth || 600;
      const h = canvas.parentElement?.clientHeight || 450;
      return { w: Math.max(280, w), h: Math.max(280, h) };
    };

    let { w: initW, h: initH } = getDimensions();
    canvas.width = initW * dpr;
    canvas.height = initH * dpr;

    // Mouse & rotation state
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const state = {
      rotX: 0.2,
      rotY: 0,
      rotSpeed: 0.006,
      scale: 1,
    };

    // Build 3D Geodesic Neural Nodes
    const nodes: Node3D[] = [];
    const connections: SynapseConnection[] = [];

    // Central Nucleus (The Generative Core)
    nodes.push({
      x: 0,
      y: 0,
      z: 0,
      baseRadius: 28,
      color: "#00D2FF",
      label: "GEN-AI NUCLEUS",
      pulsePhase: 0,
    });

    // Inner Shell Nodes (Neural Processing Cluster)
    const innerCount = 26;
    const innerRadius = 110;
    for (let i = 0; i < innerCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / innerCount);
      const theta = Math.sqrt(innerCount * Math.PI) * phi;

      nodes.push({
        x: innerRadius * Math.cos(theta) * Math.sin(phi),
        y: innerRadius * Math.sin(theta) * Math.sin(phi),
        z: innerRadius * Math.cos(phi),
        baseRadius: 3.5 + Math.random() * 2.5,
        color: i % 2 === 0 ? "#0066FF" : "#38BDF8",
        pulsePhase: Math.random() * Math.PI * 2,
      });

      // Connect to central nucleus
      if (i % 3 === 0) {
        connections.push({
          from: 0,
          to: i + 1,
          strength: 0.6,
          pulseOffset: Math.random() * 5,
        });
      }
    }

    // Outer Orbital Satellites (Major Capabilities: LLM, RAG, Agents, Vision)
    const orbitalLabels = [
      { label: "AUTONOMOUS AGENTS", color: "#38BDF8", orbitR: 190, speed: 0.012 },
      { label: "NEURAL RAG", color: "#60A5FA", orbitR: 215, speed: -0.009 },
      { label: "MULTIMODAL VISION", color: "#A855F7", orbitR: 175, speed: 0.014 },
      { label: "REASONING LLM", color: "#00D2FF", orbitR: 230, speed: -0.011 },
    ];

    const orbitalStartIndex = nodes.length;
    orbitalLabels.forEach((orb, idx) => {
      nodes.push({
        x: 0,
        y: 0,
        z: 0,
        baseRadius: 9,
        color: orb.color,
        label: orb.label,
        orbitRadius: orb.orbitR,
        orbitSpeed: orb.speed,
        orbitAngle: (idx * Math.PI * 2) / orbitalLabels.length,
        pulsePhase: idx * 1.5,
      });
    });

    // Interconnect nearby inner nodes
    for (let i = 1; i < innerCount; i++) {
      for (let j = i + 1; j <= innerCount; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 85) {
          connections.push({
            from: i,
            to: j,
            strength: 0.45,
            pulseOffset: Math.random() * 3,
          });
        }
      }
    }

    // Connect orbital satellites to random inner nodes
    for (let o = 0; o < orbitalLabels.length; o++) {
      const orbIndex = orbitalStartIndex + o;
      const targetInner = 1 + (o * 6) % (innerCount - 1);
      connections.push({
        from: orbIndex,
        to: targetInner,
        strength: 0.75,
        pulseOffset: o * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      mouse.targetX = (cx / rect.width) * 1.5;
      mouse.targetY = -(cy / rect.height) * 1.5;
    };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { w, h } = getDimensions();
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };

    window.addEventListener("resize", handleResize);
    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }

    let time = 0;
    const focalLength = 480;

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

      state.rotY += state.rotSpeed + mouse.x * 0.01;
      state.rotX = 0.2 + mouse.y * 0.4;

      const cosY = Math.cos(state.rotY);
      const sinY = Math.sin(state.rotY);
      const cosX = Math.cos(state.rotX);
      const sinX = Math.sin(state.rotX);

      const centerX = renderW * 0.5;
      const centerY = renderH * 0.5;

      // Update orbital satellites
      for (let i = orbitalStartIndex; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.orbitRadius && node.orbitSpeed !== undefined && node.orbitAngle !== undefined) {
          node.orbitAngle += node.orbitSpeed;
          node.x = Math.cos(node.orbitAngle) * node.orbitRadius;
          node.z = Math.sin(node.orbitAngle) * node.orbitRadius;
          node.y = Math.sin(time * 1.8 + node.pulsePhase) * 28;
        }
      }

      // Project 3D nodes to 2D screen
      interface ProjectedNode {
        px: number;
        py: number;
        pz: number;
        scale: number;
        radius: number;
        color: string;
        label?: string;
        alpha: number;
      }

      const projected: ProjectedNode[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // 3D Rotation Y
        const x1 = node.x * cosY + node.z * sinY;
        const z1 = -node.x * sinY + node.z * cosY;

        // 3D Rotation X
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        const distance = 420;
        const denom = focalLength + z2 + distance;
        const scale = denom > 1 ? focalLength / denom : 0.5;

        const px = x1 * scale + centerX;
        const py = y2 * scale + centerY;

        const pulse = 1 + Math.sin(time * 2.5 + node.pulsePhase) * 0.15;
        const radius = Math.max(1.5, node.baseRadius * scale * pulse);
        const alpha = Math.min(1, Math.max(0.18, 0.45 + (z2 / 300) * 0.45));

        projected.push({
          px,
          py,
          pz: z2,
          scale,
          radius,
          color: node.color,
          label: node.label,
          alpha,
        });
      }

      // Draw Synapse Connection Beams
      for (let i = 0; i < connections.length; i++) {
        const conn = connections[i];
        const p1 = projected[conn.from];
        const p2 = projected[conn.to];
        if (!p1 || !p2) continue;

        const avgZ = (p1.pz + p2.pz) * 0.5;
        const beamAlpha = Math.min(0.85, Math.max(0.08, (conn.strength + (avgZ / 400) * 0.35)));

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = `rgba(0, 150, 255, ${beamAlpha * 0.5})`;
        ctx.lineWidth = Math.max(0.6, 1.2 * ((p1.scale + p2.scale) * 0.5));
        ctx.stroke();

        // Traveling neural pulse photon
        const photonProgress = (time * 1.5 + conn.pulseOffset) % 1;
        const photonX = p1.px + (p2.px - p1.px) * photonProgress;
        const photonY = p1.py + (p2.py - p1.py) * photonProgress;

        ctx.beginPath();
        ctx.arc(photonX, photonY, Math.max(1, 2.2 * p1.scale), 0, Math.PI * 2);
        ctx.fillStyle = "#00E5FF";
        ctx.shadowColor = "#00E5FF";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Nodes sorted by depth (back to front)
      const sortedIndices = projected
        .map((p, idx) => ({ idx, pz: p.pz }))
        .sort((a, b) => a.pz - b.pz);

      for (let i = 0; i < sortedIndices.length; i++) {
        const idx = sortedIndices[i].idx;
        const p = projected[idx];

        // Central Core Nucleus Glow
        if (idx === 0) {
          const coreGrad = ctx.createRadialGradient(
            p.px, p.py, 0,
            p.px, p.py, p.radius * 2.8
          );
          coreGrad.addColorStop(0, "rgba(0, 210, 255, 0.95)");
          coreGrad.addColorStop(0.35, "rgba(0, 102, 255, 0.65)");
          coreGrad.addColorStop(0.7, "rgba(147, 51, 234, 0.25)");
          coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.beginPath();
          ctx.arc(p.px, p.py, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = coreGrad;
          ctx.fill();
        }

        // Ambient outer glow for orbital satellites
        if (idx >= orbitalStartIndex) {
          const orbGlow = ctx.createRadialGradient(
            p.px, p.py, 0,
            p.px, p.py, p.radius * 2.2
          );
          orbGlow.addColorStop(0, p.color);
          orbGlow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = orbGlow;
          ctx.fill();
        }

        // Draw Node Solid Core
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label for Major Capabilities
        if (p.label) {
          ctx.font = `bold ${Math.max(9, Math.round(11 * p.scale))}px Inter, sans-serif`;
          ctx.textAlign = "center";
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "rgba(0,0,0,0.85)";
          ctx.shadowBlur = 4;
          ctx.fillText(p.label, p.px, p.py + p.radius + 14 * p.scale);
          ctx.shadowBlur = 0;
        }
      }

      ctx.restore();
    };

    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [activeCapability, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block cursor-grab active:cursor-grabbing"
    />
  );
};

export default GenAiNeuralCore3DCanvas;
