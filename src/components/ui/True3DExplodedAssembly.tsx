import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import {
  Brain,
  Cpu,
  Layers,
  Wrench,
  Code2,
  Database,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  RotateCcw,
  BookOpen,
  Laptop,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

interface LayerData {
  id: number;
  name: string;
  badge: string;
  leftTitle: string;
  leftDesc: string;
  leftIcon: React.ElementType;
  rightTitle: string;
  rightDesc: string;
  targetY: number; // Exploded Y position in 3D scene
  color: string;
}

const LAYERS_INFO: LayerData[] = [
  {
    id: 1,
    name: "User Interface Tablet",
    badge: "INTERFACE TIER",
    leftTitle: "PROMPT ENGINEERING",
    leftDesc: "Craft powerful inputs that drive intelligent outputs & deterministic controls",
    leftIcon: Terminal,
    rightTitle: "USER INTERFACE",
    rightDesc: "Chat UI, dynamic dashboards, 3D visualizations & human interactions",
    targetY: 3.1,
    color: "#00D2FF",
  },
  {
    id: 2,
    name: "Output Synthesis Matrix",
    badge: "SYNTHESIS TIER",
    leftTitle: "LLMS & FOUNDATIONS",
    leftDesc: "Understand Large Language Models, tokenizers, and multi-turn context",
    leftIcon: Brain,
    rightTitle: "OUTPUT LAYER",
    rightDesc: "Generated text, images, code AST, synthetic voice & business insights",
    targetY: 2.1,
    color: "#A855F7",
  },
  {
    id: 3,
    name: "AI Foundation Models",
    badge: "NEURAL CORE",
    leftTitle: "AI TOOLS & PLATFORMS",
    leftDesc: "Leverage cutting-edge LLMs, diffusion backbones, and fine-tuning pipelines",
    leftIcon: Cpu,
    rightTitle: "AI FOUNDATION MODELS",
    rightDesc: "GPT-4o, Claude 3.5, LLaMA 3.3, Flux, CLIP, and domain-tuned weights",
    targetY: 1.1,
    color: "#38BDF8",
  },
  {
    id: 4,
    name: "Agentic Orchestration Gears",
    badge: "ORCHESTRATION",
    leftTitle: "MODEL INTEGRATION",
    leftDesc: "Connect AI models seamlessly into real-world enterprise databases & APIs",
    leftIcon: Code2,
    rightTitle: "AGENTIC ORCHESTRATION",
    rightDesc: "MCP protocol, tool calling, multi-agent swarms, DAG execution & memory",
    targetY: 0.1,
    color: "#0066FF",
  },
  {
    id: 5,
    name: "Data & Context Pipeline PCB",
    badge: "DATA PIPELINE",
    leftTitle: "DATA & CONTEXT LAYER",
    leftDesc: "Use enterprise data intelligently with embeddings, vectors & context management",
    leftIcon: Database,
    rightTitle: "DATA PIPELINE",
    rightDesc: "Data ingestion, OCR extraction, semantic chunking & dense vector embeddings",
    targetY: -0.9,
    color: "#00E5FF",
  },
  {
    id: 6,
    name: "Cloud GPU Infrastructure",
    badge: "COMPUTE HARDWARE",
    leftTitle: "INFRASTRUCTURE LAYER",
    leftDesc: "Built on scalable cloud orchestration, high-throughput GPUs & Kubernetes",
    leftIcon: Server,
    rightTitle: "CLOUD INFRASTRUCTURE",
    rightDesc: "NVIDIA H100 clusters, TensorRT-LLM, vLLM distributed inference & VPCs",
    targetY: -1.9,
    color: "#60A5FA",
  },
  {
    id: 7,
    name: "Security & Governance Base",
    badge: "GOVERNANCE TIER",
    leftTitle: "ETHICS & GOVERNANCE",
    leftDesc: "Ensure responsible AI with privacy, fairness, audit trails and transparency",
    leftIcon: ShieldCheck,
    rightTitle: "SECURITY & ETHICS",
    rightDesc: "Air-gapped guardrails, PII redaction, bias mitigation & SOC-2 / HIPAA",
    targetY: -2.9,
    color: "#10B981",
  },
];

// ================================================================
// DYNAMIC PROCEDURAL CANVAS TEXTURE HELPERS (Ultra-Crisp 1024x700)
// ================================================================

// 1. Tablet Screen with Glowing Brain & "GENERATIVE AI"
function createTabletScreenTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 700;
  const ctx = canvas.getContext("2d")!;

  // Deep dark glass background
  const bgGrad = ctx.createLinearGradient(0, 0, 1024, 700);
  bgGrad.addColorStop(0, "#040A17");
  bgGrad.addColorStop(0.5, "#081329");
  bgGrad.addColorStop(1, "#040A17");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 700);

  // Subtle cyber grid
  ctx.strokeStyle = "rgba(0, 210, 255, 0.08)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 1024; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 700);
    ctx.stroke();
  }
  for (let y = 0; y < 700; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Top Status Bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "bold 18px monospace";
  ctx.fillText("09:41", 40, 42);
  ctx.fillText("ATS NEURAL OS v4.2", 400, 42);
  ctx.fillText("● 100% 5G [SECURE]", 820, 42);

  // Status Bar Line
  ctx.strokeStyle = "rgba(0, 210, 255, 0.25)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(40, 56);
  ctx.lineTo(984, 56);
  ctx.stroke();

  // Central Glowing Brain Network
  const cx = 512;
  const cy = 270;

  // Outer radial glow behind brain
  const brainGlow = ctx.createRadialGradient(cx, cy, 30, cx, cy, 220);
  brainGlow.addColorStop(0, "rgba(0, 210, 255, 0.45)");
  brainGlow.addColorStop(0.5, "rgba(0, 102, 255, 0.25)");
  brainGlow.addColorStop(1, "transparent");
  ctx.fillStyle = brainGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, 220, 0, Math.PI * 2);
  ctx.fill();

  // Draw Brain Left & Right Lobes with Synapse Lines
  ctx.strokeStyle = "#00D2FF";
  ctx.lineWidth = 2.5;
  ctx.shadowColor = "#00D2FF";
  ctx.shadowBlur = 12;

  // Lobe outlines
  ctx.beginPath();
  // Left lobe
  ctx.ellipse(cx - 75, cy, 95, 115, -0.15, 0, Math.PI * 2);
  ctx.stroke();
  // Right lobe
  ctx.beginPath();
  ctx.ellipse(cx + 75, cy, 95, 115, 0.15, 0, Math.PI * 2);
  ctx.stroke();

  // Neural Synapse Nodes and Connecting Sparks
  const nodes = [
    [-120, -50], [-90, -90], [-30, -100], [-70, -20], [-130, 20], [-90, 70], [-40, 90],
    [-20, 30], [-60, 40], [-10, -40],
    [120, -50], [90, -90], [30, -100], [70, -20], [130, 20], [90, 70], [40, 90],
    [20, 30], [60, 40], [10, -40],
    [0, -70], [0, 0], [0, 60]
  ];

  ctx.strokeStyle = "rgba(56, 189, 248, 0.6)";
  ctx.lineWidth = 1.5;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 85) {
        ctx.beginPath();
        ctx.moveTo(cx + nodes[i][0], cy + nodes[i][1]);
        ctx.lineTo(cx + nodes[j][0], cy + nodes[j][1]);
        ctx.stroke();
      }
    }
  }

  // Draw bright nodes
  ctx.fillStyle = "#FFFFFF";
  ctx.shadowColor = "#00D2FF";
  ctx.shadowBlur = 15;
  nodes.forEach(([nx, ny]) => {
    ctx.beginPath();
    ctx.arc(cx + nx, cy + ny, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Center Bold Text: "GENERATIVE AI"
  ctx.shadowColor = "#00D2FF";
  ctx.shadowBlur = 25;
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 48px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("GENERATIVE AI", cx, 490);

  // Glowing Underline Bar
  const barGrad = ctx.createLinearGradient(cx - 200, 0, cx + 200, 0);
  barGrad.addColorStop(0, "transparent");
  barGrad.addColorStop(0.5, "#00D2FF");
  barGrad.addColorStop(1, "transparent");
  ctx.fillStyle = barGrad;
  ctx.fillRect(cx - 220, 510, 440, 4);

  // Bottom Telemetry Widgets
  ctx.shadowBlur = 0;
  ctx.font = "14px monospace";
  ctx.fillStyle = "rgba(0, 210, 255, 0.8)";
  ctx.fillText("LATENCY: 8.4ms  •  CONTEXT: 128K TOKENS  •  ACTIVE WEIGHTS: 70B", cx, 560);

  ctx.strokeStyle = "rgba(0, 210, 255, 0.25)";
  ctx.strokeRect(30, 20, 964, 660);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 2. Output Layer Laser Optical Matrix Texture
function createLaserAcrylicTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 700;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#061022";
  ctx.fillRect(0, 0, 1024, 700);

  // Grid
  ctx.strokeStyle = "rgba(168, 85, 247, 0.12)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 1024; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 700);
    ctx.stroke();
  }

  // Glowing Purple & Cyan Laser Waveguides
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#C084FC";
  ctx.strokeStyle = "#A855F7";
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(80, 180);
  ctx.bezierCurveTo(300, 80, 600, 280, 940, 180);
  ctx.stroke();

  ctx.shadowColor = "#00D2FF";
  ctx.strokeStyle = "#00D2FF";
  ctx.beginPath();
  ctx.moveTo(80, 520);
  ctx.bezierCurveTo(350, 620, 650, 420, 940, 520);
  ctx.stroke();

  // Matrix Processing Labels
  ctx.shadowBlur = 0;
  ctx.font = "bold 16px monospace";
  ctx.fillStyle = "rgba(192, 132, 252, 0.85)";
  ctx.fillText("SYNTHESIS BUS // TEXT • CODE • AST • AUDIO STREAMING", 120, 360);

  // Standoff screw rings in 4 corners
  const corners = [[80, 80], [944, 80], [80, 620], [944, 620]];
  ctx.strokeStyle = "#E2E8F0";
  ctx.lineWidth = 3;
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.stroke();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 3. AI Models Neural Circuit Texture
function createNeuralCoreTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 700;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#071228";
  ctx.fillRect(0, 0, 1024, 700);

  // Central Core Radiant Glow
  const grad = ctx.createRadialGradient(512, 350, 40, 512, 350, 320);
  grad.addColorStop(0, "rgba(0, 210, 255, 0.45)");
  grad.addColorStop(0.6, "rgba(0, 102, 255, 0.2)");
  grad.addColorStop(1, "transparent");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(512, 350, 320, 0, Math.PI * 2);
  ctx.fill();

  // Detailed Dense Circuit Paths
  ctx.strokeStyle = "#00D2FF";
  ctx.lineWidth = 2;
  ctx.shadowColor = "#00D2FF";
  ctx.shadowBlur = 10;

  // Radiating bus lines from center die
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
    const sx = 512 + Math.cos(angle) * 120;
    const sy = 350 + Math.sin(angle) * 100;
    const ex = 512 + Math.cos(angle) * 320;
    const ey = 350 + Math.sin(angle) * 240;

    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo((sx + ex) / 2, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();

    // Node contact
    ctx.fillStyle = "#38BDF8";
    ctx.beginPath();
    ctx.arc(ex, ey, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Socket Center Box Markings
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(245, 158, 11, 0.8)";
  ctx.lineWidth = 2;
  ctx.strokeRect(400, 250, 224, 200);

  ctx.font = "bold 15px monospace";
  ctx.fillStyle = "#38BDF8";
  ctx.textAlign = "center";
  ctx.fillText("ATS NEURAL SILICON DIE • 4nm FINFET", 512, 230);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 4. Data Pipeline PCB Texture (Dark Teal with Copper/Gold Traces)
function createPcbTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 700;
  const ctx = canvas.getContext("2d")!;

  // Dark Teal PCB Solder Mask
  ctx.fillStyle = "#072322";
  ctx.fillRect(0, 0, 1024, 700);

  // Copper & Gold Traces
  ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
  ctx.lineWidth = 1.5;

  for (let i = 0; i < 20; i++) {
    const y = 60 + i * 30;
    ctx.beginPath();
    ctx.moveTo(60, y);
    ctx.lineTo(260 + (i % 4) * 40, y);
    ctx.lineTo(360 + (i % 4) * 40, y + 25);
    ctx.lineTo(950, y + 25);
    ctx.stroke();
  }

  // Silver Solder Pads & Test Points
  ctx.fillStyle = "#E2E8F0";
  for (let px = 100; px < 950; px += 70) {
    for (let py = 80; py < 650; py += 70) {
      if ((px + py) % 3 === 0) {
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // PCB Silk-Screen Markings
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "bold 16px monospace";
  ctx.textAlign = "left";
  ctx.fillText("ATS-DATA-PIPELINE-PCB // REV 3.4", 80, 50);
  ctx.fillText("VECTOR BUS: 2,048-BIT  •  DENSE RAG CACHE", 80, 660);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 5. Security & Governance Shield Base Texture
function createShieldTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#081224";
  ctx.fillRect(0, 0, 512, 512);

  const cx = 256;
  const cy = 256;

  // Radial blue glow
  const grad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 220);
  grad.addColorStop(0, "rgba(0, 210, 255, 0.6)");
  grad.addColorStop(0.5, "rgba(0, 102, 255, 0.3)");
  grad.addColorStop(1, "transparent");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, 220, 0, Math.PI * 2);
  ctx.fill();

  // Shield Emblem Outline
  ctx.shadowColor = "#00D2FF";
  ctx.shadowBlur = 25;
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 6;

  ctx.beginPath();
  ctx.moveTo(cx, cy - 140);
  ctx.lineTo(cx + 120, cy - 80);
  ctx.lineTo(cx + 100, cy + 50);
  ctx.quadraticCurveTo(cx + 60, cy + 140, cx, cy + 170);
  ctx.quadraticCurveTo(cx - 60, cy + 140, cx - 100, cy + 50);
  ctx.lineTo(cx - 120, cy - 80);
  ctx.closePath();
  ctx.stroke();

  // Cross lines inside shield
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx, cy - 120);
  ctx.lineTo(cx, cy + 150);
  ctx.moveTo(cx - 90, cy - 10);
  ctx.lineTo(cx + 90, cy - 10);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ================================================================
// MAIN EXPORTED COMPONENT
// ================================================================
export const True3DExplodedAssembly: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeLayer, setActiveLayer] = useState<number>(3);
  const [isExploded, setIsExploded] = useState<boolean>(true);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const layerGroupsRef = useRef<THREE.Group[]>([]);
  const gearsRef = useRef<THREE.Mesh[]>([]);
  const serverLedsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 680;
    const height = container.clientHeight || 700;

    // ============================================================
    // 1. SCENE, CAMERA, RENDERER
    // ============================================================
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Isometric Top-Down Diagonal Perspective (Matches reference photo!)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(5.8, 5.0, 7.6);
    camera.lookAt(0, -0.1, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // ============================================================
    // 2. ORBIT CONTROLS
    // ============================================================
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = true;
    controls.minDistance = 6.0;
    controls.maxDistance = 15;
    controls.minPolarAngle = Math.PI / 6; // Don't flip under floor
    controls.maxPolarAngle = (Math.PI * 2.8) / 4;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;
    controls.target.set(0, -0.1, 0);

    // ============================================================
    // 3. STUDIO LIGHTING RIG
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0x1a2942, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(7, 14, 9);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00d2ff, 4.0);
    cyanRimLight.position.set(-9, 5, -7);
    scene.add(cyanRimLight);

    const blueFillLight = new THREE.DirectionalLight(0x0066ff, 2.4);
    blueFillLight.position.set(2, -6, 7);
    scene.add(blueFillLight);

    const topSoftLight = new THREE.PointLight(0x38bdf8, 2.8, 12);
    topSoftLight.position.set(0, 5, 2);
    scene.add(topSoftLight);

    // Main rotating stack group
    const assemblyGroup = new THREE.Group();
    // Pre-angle slightly like the reference photo
    assemblyGroup.rotation.y = -0.32;
    scene.add(assemblyGroup);

    // ============================================================
    // 4. SHARED MASTER MATERIALS
    // ============================================================
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.95,
      roughness: 0.12,
    });

    const brushedTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.25,
    });

    const darkChassisMat = new THREE.MeshStandardMaterial({
      color: 0x091122,
      metalness: 0.85,
      roughness: 0.3,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
    });

    const cyanEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 2.5,
    });

    const emeraldEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 2.2,
    });

    // 4 Corner Vertical Chrome Connecting Rods
    const rodRadius = 0.025;
    const rodHeight = 6.8;
    const rodPositions = [
      [-1.85, -1.25],
      [1.85, -1.25],
      [-1.85, 1.25],
      [1.85, 1.25],
    ];

    rodPositions.forEach(([rx, rz]) => {
      const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(rodRadius, rodRadius, rodHeight, 16),
        chromeMat
      );
      rod.position.set(rx, 0, rz);
      rod.castShadow = true;
      assemblyGroup.add(rod);

      // Top knurled thumbscrew cap on each rod
      const thumbCap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.14, 16),
        chromeMat
      );
      thumbCap.position.set(rx, rodHeight / 2 + 0.07, rz);
      assemblyGroup.add(thumbCap);
    });

    const layerGroups: THREE.Group[] = [];
    layerGroupsRef.current = layerGroups;

    // Helper: Add corner chrome washer collars on each layer
    const addCornerCollars = (group: THREE.Group) => {
      rodPositions.forEach(([rx, rz]) => {
        const collar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16),
          chromeMat
        );
        collar.position.set(rx, 0, rz);
        group.add(collar);
      });
    };

    // ============================================================
    // LAYER 1: USER INTERFACE TABLET (Y = 3.1)
    // ============================================================
    const l1Group = new THREE.Group();
    l1Group.position.y = 3.1;

    // Tablet body with silver chamfer rim
    const l1Chassis = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 0.16, 2.6),
      darkChassisMat
    );
    l1Chassis.castShadow = true;
    l1Chassis.receiveShadow = true;
    l1Group.add(l1Chassis);

    // Silver side trim border
    const l1Border = new THREE.Mesh(
      new THREE.BoxGeometry(3.84, 0.04, 2.64),
      chromeMat
    );
    l1Group.add(l1Border);

    // High-Resolution Tablet Screen with Glowing Brain & "GENERATIVE AI"
    const tabletTex = createTabletScreenTexture();
    const l1ScreenMat = new THREE.MeshStandardMaterial({
      map: tabletTex,
      emissive: 0x00d2ff,
      emissiveMap: tabletTex,
      emissiveIntensity: 0.6,
      roughness: 0.15,
      metalness: 0.2,
    });
    const l1Screen = new THREE.Mesh(
      new THREE.PlaneGeometry(3.65, 2.45),
      l1ScreenMat
    );
    l1Screen.rotation.x = -Math.PI / 2;
    l1Screen.position.y = 0.085;
    l1Group.add(l1Screen);

    addCornerCollars(l1Group);
    assemblyGroup.add(l1Group);
    layerGroups.push(l1Group);

    // ============================================================
    // LAYER 2: OUTPUT SYNTHESIS MATRIX & KEYBOARD (Y = 2.1)
    // ============================================================
    const l2Group = new THREE.Group();
    l2Group.position.y = 2.1;

    // Acrylic / Smoked glass top plate with Laser Wave
    const laserTex = createLaserAcrylicTexture();
    const l2GlassMat = new THREE.MeshPhysicalMaterial({
      map: laserTex,
      emissive: 0xa855f7,
      emissiveMap: laserTex,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.88,
      roughness: 0.1,
      metalness: 0.3,
    });
    const l2Plate = new THREE.Mesh(
      new THREE.BoxGeometry(3.75, 0.06, 2.5),
      l2GlassMat
    );
    l2Plate.castShadow = true;
    l2Group.add(l2Plate);

    // 28 Chiclet Output Generation Keycaps
    const keyGeo = new THREE.BoxGeometry(0.18, 0.04, 0.18);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
    });
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 7; c++) {
        const key = new THREE.Mesh(keyGeo, keyMat);
        key.position.set(-1.1 + c * 0.37, 0.045, -0.6 + r * 0.4);
        l2Group.add(key);
      }
    }

    addCornerCollars(l2Group);
    assemblyGroup.add(l2Group);
    layerGroups.push(l2Group);

    // ============================================================
    // LAYER 3: AI FOUNDATION MODELS NEURAL DIE (Y = 1.1)
    // ============================================================
    const l3Group = new THREE.Group();
    l3Group.position.y = 1.1;

    const neuralTex = createNeuralCoreTexture();
    const l3SubstrateMat = new THREE.MeshStandardMaterial({
      map: neuralTex,
      emissive: 0x00d2ff,
      emissiveMap: neuralTex,
      emissiveIntensity: 0.5,
      roughness: 0.25,
      metalness: 0.7,
    });
    const l3Plate = new THREE.Mesh(
      new THREE.BoxGeometry(3.75, 0.08, 2.5),
      l3SubstrateMat
    );
    l3Plate.castShadow = true;
    l3Group.add(l3Plate);

    // Central Titanium Neural Accelerator Die
    const dieMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.08, 0.95),
      brushedTitaniumMat
    );
    dieMesh.position.set(0, 0.08, 0);
    l3Group.add(dieMesh);

    // Glowing Cyan Core on Die
    const dieCore = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.02, 0.55),
      cyanEmissiveMat
    );
    dieCore.position.set(0, 0.125, 0);
    l3Group.add(dieCore);

    // 4 High-Speed HBM3 Memory Stacks
    const ramGeo = new THREE.BoxGeometry(0.14, 0.06, 0.7);
    [-1.0, -0.7, 0.7, 1.0].forEach((rx) => {
      const ram = new THREE.Mesh(ramGeo, goldMat);
      ram.position.set(rx, 0.07, 0);
      l3Group.add(ram);
    });

    addCornerCollars(l3Group);
    assemblyGroup.add(l3Group);
    layerGroups.push(l3Group);

    // ============================================================
    // LAYER 4: AGENTIC ORCHESTRATION (REAL 3D ROTATING GEARS) (Y = 0.1)
    // ============================================================
    const l4Group = new THREE.Group();
    l4Group.position.y = 0.1;

    // Brushed metal plate
    const l4Plate = new THREE.Mesh(
      new THREE.BoxGeometry(3.75, 0.08, 2.5),
      brushedTitaniumMat
    );
    l4Plate.castShadow = true;
    l4Group.add(l4Plate);

    // Helper: Create 3D Metallic Spur Gear with realistic teeth
    const createSpurGear = (
      radius: number,
      teeth: number,
      thickness: number,
      mat: THREE.Material
    ) => {
      const gearGroup = new THREE.Group();
      // Main hub
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, thickness, 24),
        mat
      );
      gearGroup.add(hub);

      // Center axle cap
      const cap = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.35, radius * 0.35, thickness + 0.04, 16),
        chromeMat
      );
      gearGroup.add(cap);

      // Teeth
      const toothGeo = new THREE.BoxGeometry(0.09, thickness, 0.09);
      for (let t = 0; t < teeth; t++) {
        const angle = (t * Math.PI * 2) / teeth;
        const tooth = new THREE.Mesh(toothGeo, mat);
        tooth.position.set(
          Math.cos(angle) * (radius + 0.04),
          0,
          Math.sin(angle) * (radius + 0.04)
        );
        tooth.rotation.y = -angle;
        gearGroup.add(tooth);
      }
      return gearGroup;
    };

    // 4 Interlocking Gears (Center, Left, Right, Planetary)
    const gearCenter = createSpurGear(0.48, 16, 0.07, chromeMat);
    gearCenter.position.set(0, 0.075, 0);
    l4Group.add(gearCenter);

    const gearLeft = createSpurGear(0.38, 12, 0.07, brushedTitaniumMat);
    gearLeft.position.set(-0.95, 0.075, 0.15);
    l4Group.add(gearLeft);

    const gearRight = createSpurGear(0.35, 11, 0.07, chromeMat);
    gearRight.position.set(0.9, 0.075, -0.15);
    l4Group.add(gearRight);

    const gearFront = createSpurGear(0.24, 8, 0.07, goldMat);
    gearFront.position.set(0.05, 0.075, 0.72);
    l4Group.add(gearFront);

    gearsRef.current = [
      gearCenter as any,
      gearLeft as any,
      gearRight as any,
      gearFront as any,
    ];

    addCornerCollars(l4Group);
    assemblyGroup.add(l4Group);
    layerGroups.push(l4Group);

    // ============================================================
    // LAYER 5: DATA PIPELINE PCB (DARK TEAL WITH CHIPS) (Y = -0.9)
    // ============================================================
    const l5Group = new THREE.Group();
    l5Group.position.y = -0.9;

    const pcbTex = createPcbTexture();
    const l5PcbMat = new THREE.MeshStandardMaterial({
      map: pcbTex,
      roughness: 0.35,
      metalness: 0.6,
    });
    const l5Plate = new THREE.Mesh(
      new THREE.BoxGeometry(3.75, 0.08, 2.5),
      l5PcbMat
    );
    l5Plate.castShadow = true;
    l5Group.add(l5Plate);

    // 3D Silicon IC Chips on Board
    const bigChip = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.08, 0.7),
      brushedTitaniumMat
    );
    bigChip.position.set(-0.35, 0.08, 0.1);
    l5Group.add(bigChip);

    const smChipGeo = new THREE.BoxGeometry(0.32, 0.05, 0.32);
    [
      [0.6, -0.4],
      [0.6, 0.4],
      [-1.1, -0.3],
    ].forEach(([cx, cz]) => {
      const chip = new THREE.Mesh(smChipGeo, darkChassisMat);
      chip.position.set(cx, 0.065, cz);
      l5Group.add(chip);
    });

    // Silver Cylindrical Capacitors
    const capGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12);
    [-0.8, -0.6, 0.2, 0.4].forEach((cx, idx) => {
      const cap = new THREE.Mesh(capGeo, chromeMat);
      cap.position.set(cx, 0.1, -0.65 + idx * 0.15);
      l5Group.add(cap);
    });

    addCornerCollars(l5Group);
    assemblyGroup.add(l5Group);
    layerGroups.push(l5Group);

    // ============================================================
    // LAYER 6: CLOUD INFRASTRUCTURE (BLADE SERVER CHASSIS) (Y = -1.9)
    // ============================================================
    const l6Group = new THREE.Group();
    l6Group.position.y = -1.9;

    // Chassis base tray
    const l6Base = new THREE.Mesh(
      new THREE.BoxGeometry(3.75, 0.15, 2.5),
      darkChassisMat
    );
    l6Base.castShadow = true;
    l6Group.add(l6Base);

    // 12 Vertical Server Blades
    const bladeGeo = new THREE.BoxGeometry(0.18, 0.32, 2.1);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const leds: THREE.Mesh[] = [];

    for (let b = 0; b < 12; b++) {
      const bx = -1.45 + b * 0.26;
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(bx, 0.22, 0);
      l6Group.add(blade);

      // Glowing Vertical Status LED bar on front of each blade
      const ledGeo = new THREE.BoxGeometry(0.03, 0.16, 0.02);
      const isCyan = b % 3 !== 0;
      const led = new THREE.Mesh(
        ledGeo,
        isCyan ? cyanEmissiveMat : emeraldEmissiveMat
      );
      led.position.set(bx, 0.24, 1.06);
      l6Group.add(led);
      leds.push(led);
    }
    serverLedsRef.current = leds;

    addCornerCollars(l6Group);
    assemblyGroup.add(l6Group);
    layerGroups.push(l6Group);

    // ============================================================
    // LAYER 7: SECURITY & ETHICS BASE PLATE (Y = -2.9)
    // ============================================================
    const l7Group = new THREE.Group();
    l7Group.position.y = -2.9;

    // Heavy CNC Milled Titanium Base
    const l7Base = new THREE.Mesh(
      new THREE.BoxGeometry(3.85, 0.26, 2.65),
      brushedTitaniumMat
    );
    l7Base.castShadow = true;
    l7Base.receiveShadow = true;
    l7Group.add(l7Base);

    // Recessed Glowing Shield Well
    const shieldTex = createShieldTexture();
    const shieldWellMat = new THREE.MeshStandardMaterial({
      map: shieldTex,
      emissive: 0x00d2ff,
      emissiveMap: shieldTex,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const shieldWell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.04, 32),
      shieldWellMat
    );
    shieldWell.position.set(0, 0.14, 0);
    l7Group.add(shieldWell);

    // Outer Glowing Ring on Well
    const shieldRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.58, 0.025, 16, 32),
      cyanEmissiveMat
    );
    shieldRing.rotation.x = Math.PI / 2;
    shieldRing.position.set(0, 0.155, 0);
    l7Group.add(shieldRing);

    addCornerCollars(l7Group);
    assemblyGroup.add(l7Group);
    layerGroups.push(l7Group);

    // ============================================================
    // 5. GSAP SEQUENTIAL EXPLOSION ON LOAD
    // ============================================================
    layerGroups.forEach((group) => {
      group.position.y = 0;
      group.scale.set(0.9, 0.9, 0.9);
    });

    LAYERS_INFO.forEach((info, idx) => {
      gsap.to(layerGroups[idx].position, {
        y: info.targetY,
        duration: 1.4,
        delay: 0.1 * idx,
        ease: "power3.out",
      });
      gsap.to(layerGroups[idx].scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        delay: 0.1 * idx,
        ease: "back.out(1.2)",
      });
    });

    // ============================================================
    // 6. RENDER LOOP
    // ============================================================
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth OrbitControls
      controls.update();

      // Rotate mechanical gears in Layer 4
      if (gearsRef.current.length >= 4) {
        gearsRef.current[0].rotation.y += delta * 1.6;
        gearsRef.current[1].rotation.y -= delta * 2.1;
        gearsRef.current[2].rotation.y += delta * 1.9;
        gearsRef.current[3].rotation.y -= delta * 3.2;
      }

      // Blink server LEDs in Layer 6
      if (serverLedsRef.current.length > 0) {
        serverLedsRef.current.forEach((led, idx) => {
          led.visible = Math.sin(time * 6 + idx * 1.3) > -0.6;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth || 680;
      const h = container.clientHeight || 700;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Layer Selection & Elevation Animation
  const handleSelectLayer = (id: number) => {
    setActiveLayer(id);
    layerGroupsRef.current.forEach((group, idx) => {
      const layerId = idx + 1;
      const baseTargetY = LAYERS_INFO[idx].targetY;
      if (layerId === id) {
        gsap.to(group.position, { y: baseTargetY + 0.4, duration: 0.4, ease: "power2.out" });
        gsap.to(group.scale, { x: 1.05, y: 1.05, z: 1.05, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(group.position, { y: baseTargetY, duration: 0.4, ease: "power2.out" });
        gsap.to(group.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.4, ease: "power2.out" });
      }
    });
  };

  // Toggle Collapse vs Explode
  const handleToggleExplode = () => {
    const nextState = !isExploded;
    setIsExploded(nextState);

    layerGroupsRef.current.forEach((group, idx) => {
      const targetY = nextState ? LAYERS_INFO[idx].targetY : idx * 0.16 - 0.48;
      gsap.to(group.position, {
        y: targetY,
        duration: 1.0,
        delay: 0.05 * idx,
        ease: "power3.inOut",
      });
    });
  };

  const activeLayerData = LAYERS_INFO.find((l) => l.id === activeLayer) || LAYERS_INFO[2];

  return (
    <div className="relative w-full bg-gradient-to-b from-[#061022] via-[#040B18] to-[#02060E] text-white py-6 sm:py-8 px-3 sm:px-6 lg:px-8 overflow-hidden rounded-3xl border border-blue-500/25 shadow-[0_20px_70px_rgba(0,102,255,0.2)]">
      {/* Background Volumetric Cyan/Sapphire Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[300px] bg-gradient-to-b from-[#0066FF]/20 via-[#00D2FF]/12 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-[#0066FF]/12 rounded-full blur-[130px] pointer-events-none" />

      {/* ============================================================ */}
      {/* SECTION HEADER: ATS GLOBAL TECH ENTERPRISE PALETTE */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-5 border-b border-blue-500/20">
          <div className="space-y-1">
            {/* ATS Blue & Cyan Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#00D2FF] text-white font-black flex items-center justify-center text-lg font-mono shadow-[0_0_20px_rgba(0,102,255,0.5)] border border-cyan-300 shrink-0">
                AT
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
                  ATS GLOBAL TECH • GEN AI STUDIO
                </div>
                <div className="text-xs text-slate-300 font-medium">Enterprise Hardware & Model Tiering</div>
              </div>
            </div>

            {/* Master The GEN AI REVOLUTION */}
            <div className="pt-2">
              <div className="text-xs sm:text-sm font-black tracking-widest text-slate-400 uppercase font-mono">
                MASTER THE
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white leading-none">
                GEN AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0066FF]">
                  REVOLUTION
                </span>
              </h2>
              <div className="text-xs sm:text-sm font-bold tracking-widest text-[#00D2FF] uppercase font-mono mt-1">
                BY ATS GLOBAL TECH
              </div>
            </div>
          </div>

          {/* Right Subtext & Explode Control */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <div className="text-left lg:text-right max-w-sm">
              <div className="text-sm sm:text-base font-bold text-white">
                Explore. Understand. Build.
              </div>
              <div className="text-sm sm:text-base font-extrabold text-[#00D2FF]">
                The Future is Generative.
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                An architectural breakdown of the 7 enterprise tiers powering generative artificial intelligence.
              </p>
            </div>

            {/* Active layer pill + Assemble/Explode button */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-blue-950/80 px-3.5 py-1.5 rounded-xl border border-cyan-400/40">
                <Activity className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse" />
                <span className="font-bold">{activeLayerData.badge}</span>
              </div>

              <button
                onClick={handleToggleExplode}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0040A8] text-white text-xs font-mono font-bold shadow-[0_0_15px_rgba(0,102,255,0.4)] transition cursor-pointer border border-cyan-400/30"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-300" />
                <span>{isExploded ? "Assemble Stack" : "Explode Stack"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN 3-COLUMN LAYOUT */}
      {/* Left Callouts | Center True 3D WebGL Canvas | Right Callouts */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
        
        {/* Left Column: 7 Left Callout Pins */}
        <div className="lg:col-span-3 space-y-2 order-2 lg:order-1">
          <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            FOUNDATIONS & INPUTS
          </div>

          {LAYERS_INFO.map((layer) => {
            const isSelected = activeLayer === layer.id;
            const Icon = layer.leftIcon;

            return (
              <div
                key={`left-${layer.id}`}
                onClick={() => handleSelectLayer(layer.id)}
                className={`group p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-900/90 to-[#0A1629] border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.35)] translate-x-1"
                    : "bg-[#09152B]/60 hover:bg-[#0E2042] border-blue-500/20 hover:border-cyan-400/40"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isSelected
                        ? "bg-[#00D2FF] text-[#0A1629] font-bold shadow-[0_0_12px_#00D2FF]"
                        : "bg-white/10 text-cyan-300 group-hover:text-white group-hover:bg-[#0066FF]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-xs font-bold tracking-tight font-mono uppercase ${
                          isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {layer.leftTitle}
                      </h4>
                      {/* Cyan connector pin pointing toward the center 3D model */}
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                          isSelected
                            ? "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"
                            : "bg-slate-600 group-hover:bg-[#00D2FF]"
                        }`}
                      />
                    </div>
                    <p className="text-[10px] text-slate-300 leading-relaxed mt-0.5 line-clamp-2">
                      {layer.leftDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Column: TRUE WEBGL THREE.JS 3D CANVAS */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[580px] sm:min-h-[660px] order-1 lg:order-2">
          
          {/* WebGL Mounting Container */}
          <div
            ref={mountRef}
            className="w-full h-[580px] sm:h-[660px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
          />

          {/* Interactive Instructions Tag */}
          <div className="absolute bottom-2 px-3.5 py-1.5 rounded-full bg-blue-950/85 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md pointer-events-none flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Drag mouse to orbit 3D stack • Scroll to zoom • Click tiers to inspect</span>
          </div>
        </div>

        {/* Right Column: 7 Right Callout Pins */}
        <div className="lg:col-span-3 space-y-2 order-3">
          <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            OUTPUTS & EXECUTION
          </div>

          {LAYERS_INFO.map((layer) => {
            const isSelected = activeLayer === layer.id;

            return (
              <div
                key={`right-${layer.id}`}
                onClick={() => handleSelectLayer(layer.id)}
                className={`group p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative ${
                  isSelected
                    ? "bg-gradient-to-l from-blue-900/90 to-[#0A1629] border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.35)] -translate-x-1"
                    : "bg-[#09152B]/60 hover:bg-[#0E2042] border-blue-500/20 hover:border-cyan-400/40"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {/* Cyan connector pin pointing toward the center 3D model */}
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 mt-1 transition-all ${
                      isSelected
                        ? "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"
                        : "bg-slate-600 group-hover:bg-[#00D2FF]"
                    }`}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-xs font-bold tracking-tight font-mono uppercase ${
                          isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {layer.rightTitle}
                      </h4>
                      {isSelected && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] font-bold border border-[#00D2FF]/40">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-300 leading-relaxed mt-0.5 line-clamp-2">
                      {layer.rightDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ============================================================ */}
      {/* BOTTOM FOOTER BAR: ATS ENTERPRISE BRANDING */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto mt-6 pt-5 border-t border-blue-500/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Left: From Zero To Gen AI Expert */}
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-black font-mono tracking-wider text-cyan-300 uppercase text-center lg:text-left">
              FROM ZERO TO GEN AI EXPERT
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-[#09152B]/80 px-2.5 py-1.5 rounded-lg border border-blue-500/20">
                <BookOpen className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <span className="font-medium text-[11px]">Hands-on Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-[#09152B]/80 px-2.5 py-1.5 rounded-lg border border-blue-500/20">
                <Laptop className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <span className="font-medium text-[11px]">Real-world Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-[#09152B]/80 px-2.5 py-1.5 rounded-lg border border-blue-500/20">
                <Brain className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <span className="font-medium text-[11px]">Expert Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-[#09152B]/80 px-2.5 py-1.5 rounded-lg border border-blue-500/20">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <span className="font-medium text-[11px]">Enterprise Scale</span>
              </div>
            </div>
          </div>

          {/* Right: Join the Gen AI Revolution Card CTA */}
          <Link
            to="/lets-create"
            className="group p-3 rounded-2xl bg-gradient-to-r from-blue-600/20 via-blue-900/40 to-blue-950/80 border border-blue-400/40 hover:border-cyan-400 shadow-[0_0_25px_rgba(0,102,255,0.25)] transition-all flex items-center gap-4 shrink-0 text-left"
          >
            <div>
              <div className="text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
                JOIN THE GEN AI REVOLUTION
              </div>
              <div className="text-xs font-black tracking-widest text-white uppercase mt-0.5">
                LEARN • BUILD • INNOVATE
              </div>
              <div className="text-[11px] text-slate-300">with ATS Global Tech Solutions</div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#0066FF] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00D2FF] group-hover:text-slate-950 transition-all shadow-md">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="text-center mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>www.atsglobaltech.com</span>
        </div>
      </div>

    </div>
  );
};

export default True3DExplodedAssembly;
