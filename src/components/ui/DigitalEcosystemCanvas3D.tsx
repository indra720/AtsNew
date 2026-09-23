import React, { useEffect, useRef } from "react";

interface TerrainParticle {
  gridX: number;
  gridZ: number;
  baseY: number;
  phase: number;
  layer: "bg" | "mid" | "fg";
}

interface FloatingParticle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function DigitalEcosystemCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse Tracking with Spring Damping for 3D Camera Parallax
    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
    };

    let camRotX = 0.42; // Base isometric pitch
    let camRotY = -0.22; // Base isometric yaw
    let targetCamRotX = 0.42;
    let targetCamRotY = -0.22;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;

      const normX = (mouse.targetX / width - 0.5) * 2;
      const normY = (mouse.targetY / height - 0.5) * 2;

      targetCamRotY = -0.22 + normX * 0.14;
      targetCamRotX = 0.42 - normY * 0.12;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // 1. Generate 3D Structured Particle Wave Terrain Grid
    // Moving from bottom-left toward right-center
    const cols = 48;
    const rows = 36;
    const spacing = 34;
    const terrainParticles: TerrainParticle[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const gridX = (c - cols / 2) * spacing;
        const gridZ = (r - rows / 2) * spacing;

        // Determine depth layer
        let layer: "bg" | "mid" | "fg" = "mid";
        if (r > rows * 0.72) layer = "fg";
        else if (r < rows * 0.28) layer = "bg";

        terrainParticles.push({
          gridX,
          gridZ,
          baseY: 0,
          phase: (c * 0.2) + (r * 0.25),
          layer,
        });
      }
    }

    // 2. Generate Atmospheric Drifting Dust & Volumetric Light Particles
    const numFloating = 75;
    const floatingParticles: FloatingParticle[] = [];
    const colors = ["#0066FF", "#00D2FF", "#38BDF8", "#FFFFFF"];

    for (let i = 0; i < numFloating; i++) {
      floatingParticles.push({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 800,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.35,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;
    const focalLength = 650;

    const render = () => {
      time += 0.018;

      // Smooth camera interpolation
      camRotX += (targetCamRotX - camRotX) * 0.06;
      camRotY += (targetCamRotY - camRotY) * 0.06;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(camRotX);
      const sinX = Math.sin(camRotX);
      const cosY = Math.cos(camRotY);
      const sinY = Math.sin(camRotY);

      // Camera Offset Center: positioned to let wave flow from bottom-left to center-right
      const originX = width * 0.58;
      const originY = height * 0.64;

      // ============================================================
      // A. RENDER SUBTLE TECHNICAL GRID & DEPTH HAZE
      // ============================================================
      ctx.save();
      const radialGlow = ctx.createRadialGradient(
        originX, originY - 120, 20,
        originX, originY - 80, width * 0.65
      );
      radialGlow.addColorStop(0, "rgba(0, 210, 255, 0.12)");
      radialGlow.addColorStop(0.35, "rgba(0, 102, 255, 0.08)");
      radialGlow.addColorStop(0.7, "rgba(240, 247, 255, 0.3)");
      radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // ============================================================
      // B. 3D FLOWING PARTICLE TERRAIN WAVE (Thousands of particles)
      // ============================================================
      const projectedTerrain: Array<{
        px: number;
        py: number;
        z2: number;
        scale: number;
        size: number;
        alpha: number;
        color: string;
        col: number;
        row: number;
      }> = [];

      for (let i = 0; i < terrainParticles.length; i++) {
        const pt = terrainParticles[i];
        const col = i % cols;
        const row = Math.floor(i / cols);

        // Wave elevation formula: moving from bottom-left to right-center
        const wave1 = Math.sin(time * 1.5 + (pt.gridX * 0.006) - (pt.gridZ * 0.007)) * 48;
        const wave2 = Math.cos(time * 0.9 + (pt.gridX * 0.009) + (pt.gridZ * 0.005)) * 32;
        const ripple = Math.sin(time * 2.2 + pt.phase) * 14;

        // Diagonal rise from left-bottom to center-right
        const diagonalSlope = (pt.gridX * 0.08) - (pt.gridZ * 0.12);
        const y = wave1 + wave2 + ripple + diagonalSlope;

        const x = pt.gridX;
        const z = pt.gridZ;

        // 3D Rotations
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;
        const x2 = x * cosY + z1 * sinY;
        const z2 = -x * sinY + z1 * cosY;

        const cameraDistance = 750;
        const scale = focalLength / (focalLength + z2 + cameraDistance);
        const px = x2 * scale + originX;
        const py = y1 * scale + originY;

        // Depth-based sizing & alpha (Foreground vs Middle vs Background)
        let baseSize = 1.6;
        let baseAlpha = 0.55;
        let pColor = "#0066FF";

        if (pt.layer === "fg") {
          baseSize = 3.2; // Foreground: larger glowing particles
          baseAlpha = 0.85;
          pColor = "#00D2FF";
        } else if (pt.layer === "bg") {
          baseSize = 0.9; // Background: smaller fading particles in depth haze
          baseAlpha = 0.25;
          pColor = "#38BDF8";
        } else {
          // Middle ground
          baseSize = 1.8;
          baseAlpha = 0.6;
          pColor = col % 4 === 0 ? "#00D2FF" : "#0066FF";
        }

        const size = Math.max(0.6, baseSize * scale * 1.4);
        const alpha = Math.min(1, Math.max(0.08, baseAlpha * scale * 1.3));

        projectedTerrain.push({
          px,
          py,
          z2,
          scale,
          size,
          alpha,
          color: pColor,
          col,
          row,
        });
      }

      // Draw faint ribbon lines connecting structured particle waves along rows
      ctx.lineWidth = 0.75;
      for (let r = 0; r < rows; r += 2) {
        ctx.beginPath();
        let started = false;
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const p = projectedTerrain[idx];
          if (!p || p.px < -50 || p.px > width + 50 || p.py < -50 || p.py > height + 50) continue;

          if (!started) {
            ctx.moveTo(p.px, p.py);
            started = true;
          } else {
            ctx.lineTo(p.px, p.py);
          }
        }
        ctx.strokeStyle = `rgba(0, 102, 255, ${0.08 * (r / rows)})`;
        ctx.stroke();
      }

      // Draw particle points of the terrain wave
      for (let i = 0; i < projectedTerrain.length; i++) {
        const p = projectedTerrain[i];
        if (p.px < -20 || p.px > width + 20 || p.py < -20 || p.py > height + 20) continue;

        // Foreground particles get soft bloom halo
        if (p.size > 2.2) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 210, 255, ${p.alpha * 0.25})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // ============================================================
      // C. FOREGROUND DRIFTING VOLUMETRIC LIGHT & PARTICLES
      // ============================================================
      for (let i = 0; i < floatingParticles.length; i++) {
        const fp = floatingParticles[i];
        fp.x += fp.vx;
        fp.y += fp.vy;

        // Wrap around boundary
        if (fp.y < -350) fp.y = 350;
        if (fp.x > 600) fp.x = -600;
        if (fp.x < -600) fp.x = 600;

        // Rotate in 3D
        const y1 = fp.y * cosX - fp.z * sinX;
        const z1 = fp.y * sinX + fp.z * cosX;
        const x2 = fp.x * cosY + z1 * sinY;
        const z2 = -fp.x * sinY + z1 * cosY;

        const scale = focalLength / (focalLength + z2 + 600);
        const px = x2 * scale + originX;
        const py = y1 * scale + originY - 60;

        if (px < 0 || px > width || py < 0 || py > height) continue;

        // Halo + Particle
        ctx.beginPath();
        ctx.arc(px, py, fp.size * scale * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${fp.alpha * scale * 0.3})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, fp.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = fp.color;
        ctx.globalAlpha = fp.alpha * scale;
        ctx.fill();
        ctx.globalAlpha = 1;
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

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
