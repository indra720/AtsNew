import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import {
  Brain,
  Cpu,
  Layers,
  Bot,
  Database,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Play,
  RotateCcw,
  Zap,
  Code2,
  Eye,
  Maximize2,
  X,
  Send,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

// ================================================================
// GENERATIVE AI CAPABILITIES DATA
// ================================================================
export interface GenAICapability {
  id: string;
  title: string;
  tag: string;
  category: string;
  icon: React.ElementType;
  color: string;
  hex: number;
  shortDesc: string;
  fullDesc: string;
  metrics: { label: string; value: string }[];
  pipelineSteps: string[];
  samplePrompt: string;
  simulatedOutput: string;
}

const CAPABILITIES: GenAICapability[] = [
  {
    id: "llm-reasoning",
    title: "Foundation LLM Reasoning",
    tag: "CHAIN-OF-THOUGHT",
    category: "NEURAL COGNITION",
    icon: Brain,
    color: "#00D2FF",
    hex: 0x00d2ff,
    shortDesc: "Multi-step contextual reasoning, structured AST generation & token synthesis.",
    fullDesc:
      "Enterprise-grade foundation models fine-tuned for high-precision business reasoning, deterministic output formatting, and zero-shot problem decomposition.",
    metrics: [
      { label: "Token Throughput", value: "140 tok/s" },
      { label: "Context Window", value: "2M+ Tokens" },
      { label: "Hallucination Rate", value: "< 0.08%" },
    ],
    pipelineSteps: [
      "Semantic Prompt Decomposition & Context Injection",
      "Multi-Head Self-Attention Across 128k Token Context",
      "Deterministic Grammar Constrained Decoding (JSON/AST)",
    ],
    samplePrompt: "Synthesize microservices architecture for multi-region financial ledger.",
    simulatedOutput:
      "✓ Architecture synthesized:\n- Distributed Event Log: Apache Kafka with Raft consensus\n- Double-entry ledger state machine with sub-second finality\n- Zero-knowledge audit trail using SHA-256 state anchors.",
  },
  {
    id: "agentic-swarms",
    title: "Autonomous Agentic Swarms",
    tag: "MULTI-AGENT DAG",
    category: "AUTONOMOUS SYSTEMS",
    icon: Bot,
    color: "#0066FF",
    hex: 0x0066ff,
    shortDesc: "Self-directing AI agents with tool calling, API execution & auto-healing.",
    fullDesc:
      "Multi-agent orchestrations coordinated through directed acyclic graphs (DAGs). Agents execute custom terminal tools, query databases, and autonomously self-correct.",
    metrics: [
      { label: "Task Success", value: "98.9%" },
      { label: "Tool Protocol", value: "MCP / OpenAPI" },
      { label: "Self-Healing", value: "Autonomous" },
    ],
    pipelineSteps: [
      "Goal Parser & Hierarchical Task Planner",
      "Isolated Tool Execution via Sandboxed Workers",
      "Dynamic AST Evaluation & Self-Correction Loop",
    ],
    samplePrompt: "Run autonomous security and compliance audit across repository.",
    simulatedOutput:
      "✓ Swarm Executed: 3 Agents (Auditor, PatchGen, Tester)\n- 14 micro-APIs inspected\n- 0 critical vulnerabilities found\n- 2 automated PR security patches generated and validated.",
  },
  {
    id: "vector-rag",
    title: "Hybrid Neural Vector RAG",
    tag: "SUB-40MS RETRIEVAL",
    category: "ENTERPRISE MEMORY",
    icon: Database,
    color: "#38BDF8",
    hex: 0x38bdf8,
    shortDesc: "Zero-leakage enterprise knowledge retrieval with dense semantic vectors.",
    fullDesc:
      "Hybrid sparse-dense retrieval combining BM25 keyword matching with high-dimensional vector embeddings and cross-encoder reranking over enterprise data stores.",
    metrics: [
      { label: "Search Latency", value: "< 38ms" },
      { label: "Retrieval Accuracy", value: "99.4%" },
      { label: "Data Leakage", value: "0.00% Airgap" },
    ],
    pipelineSteps: [
      "Semantic Chunking with Metadata Hierarchy Preservation",
      "Dense 1536-dim Embedding Generation via H100 Vector Cluster",
      "Cross-Encoder Re-Ranking for Zero-Hallucination Grounding",
    ],
    samplePrompt: "Retrieve Q3 banking regulations and correlate with risk ledger.",
    simulatedOutput:
      "✓ 4 relevant compliance clauses retrieved (Cosine Sim: 0.96)\n- Basel III Capital Requirements verified\n- Liquidity Coverage Ratio: 142% (Meets regulatory mandate)\n- Zero unauthorized data exposure detected.",
  },
  {
    id: "multimodal-vision",
    title: "Multimodal Vision & Audio",
    tag: "REAL-TIME STREAMING",
    category: "PERCEPTION MATRIX",
    icon: Eye,
    color: "#A855F7",
    hex: 0xa855f7,
    shortDesc: "Real-time document OCR, visual spatial analysis & bidirectional voice.",
    fullDesc:
      "Native multimodal comprehension processing video streams, CAD blueprints, complex financial charts, and voice frequencies at sub-100ms streaming latencies.",
    metrics: [
      { label: "Audio Latency", value: "180ms Glass-to-Ear" },
      { label: "OCR Accuracy", value: "99.8%" },
      { label: "Frame Rate", value: "60 FPS Analysis" },
    ],
    pipelineSteps: [
      "Visual Tokenization via Vision-Transformer Backbone",
      "Cross-Modal Fusion Layer Aligning Audio, Text & Imagery",
      "Low-Latency Streaming Voice Output via WaveNet Synthesis",
    ],
    samplePrompt: "Analyze architectural blueprint for HVAC duct compliance.",
    simulatedOutput:
      "✓ Blueprint analyzed: 4 zones mapped\n- Zone 2 duct clearance: 450mm (Pass)\n- Zone 4 fire damper verification: Confirmed compliant\n- Annotated CAD layer overlay generated.",
  },
  {
    id: "code-synthesis",
    title: "Deterministic Code Synthesis",
    tag: "FULL-STACK COMPILER",
    category: "SOFTWARE ENGINEERING",
    icon: Code2,
    color: "#00E5FF",
    hex: 0x00e5ff,
    shortDesc: "Production-ready backend, UI & database schema generation with test suites.",
    fullDesc:
      "Trained on millions of production repositories, generating type-safe TypeScript, Python, Go, and Rust with built-in unit tests, Dockerfiles, and CI/CD pipelines.",
    metrics: [
      { label: "Compilation Pass", value: "99.2%" },
      { label: "Test Coverage", value: "> 95%" },
      { label: "Refactor Speed", value: "Instant" },
    ],
    pipelineSteps: [
      "Requirements Mapping to Typed API Schema & Prisma ORM",
      "Deterministic AST Generation with Zero TypeScript Lints",
      "Automated Vitest/Jest Unit Test Suite Synthesis",
    ],
    samplePrompt: "Generate GraphQL API with JWT auth and rate-limiting middleware.",
    simulatedOutput:
      "✓ Generated code package:\n- Schema: GraphQL SDL with query/mutation resolvers\n- Security: Argon2id password hashing + Redis token bucket\n- Vitest: 18 passing unit tests (100% branch coverage).",
  },
  {
    id: "enterprise-shield",
    title: "Zero-Trust Security & Airgap",
    tag: "SOC-2 / HIPAA ALIGNED",
    category: "CYBER GOVERNANCE",
    icon: ShieldCheck,
    color: "#10B981",
    hex: 0x10b981,
    shortDesc: "Real-time PII scrubbing, prompt injection defense & airgapped VPCs.",
    fullDesc:
      "Enterprise security perimeter inspecting every input and output token. Defends against jailbreaks, prompt injection, and unauthorized data egress in real time.",
    metrics: [
      { label: "Threat Block Rate", value: "99.99%" },
      { label: "PII Redaction", value: "< 2ms Latency" },
      { label: "Compliance", value: "SOC-2 Type II" },
    ],
    pipelineSteps: [
      "Deterministic PII / Sensitive Data Masking Layer",
      "Adversarial Prompt Injection & Jailbreak Classifier",
      "Tamper-Evident Cryptographic Audit Logging",
    ],
    samplePrompt: "Scan customer prompt for confidential credentials and injection attacks.",
    simulatedOutput:
      "✓ Security Scan Completed:\n- 0 injection payloads detected\n- 1 API token automatically redacted prior to LLM routing\n- SHA-256 audit entry registered in immutable security log.",
  },
];

export const FantasticGenAICore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [selectedCap, setSelectedCap] = useState<GenAICapability>(CAPABILITIES[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [simulatedOutputText, setSimulatedOutputText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Three.js References for dynamic 3D manipulation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const coreWireRef = useRef<THREE.Mesh | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);
  const ring1Ref = useRef<THREE.Mesh | null>(null);
  const ring2Ref = useRef<THREE.Mesh | null>(null);
  const ring3Ref = useRef<THREE.Mesh | null>(null);
  const satellitesRef = useRef<{ group: THREE.Group; hex: number }[]>([]);
  const beamsRef = useRef<THREE.Line[]>([]);

  // ============================================================
  // THREE.JS WEBGL RENDERER & 3D NEURAL SCENE
  // ============================================================
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 650;
    const height = container.clientHeight || 580;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 4.5;
    controls.maxDistance = 12;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;

    // Master Assembly Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ============================================================
    // LIGHTING SETUP
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0x0a1936, 2.4);
    scene.add(ambientLight);

    const centralLight = new THREE.PointLight(0x00d2ff, 4.5, 15);
    centralLight.position.set(0, 0, 0);
    scene.add(centralLight);
    pointLightRef.current = centralLight;

    const cyanDir = new THREE.DirectionalLight(0x00d2ff, 3.0);
    cyanDir.position.set(5, 8, 6);
    scene.add(cyanDir);

    const blueRim = new THREE.DirectionalLight(0x0066ff, 3.5);
    blueRim.position.set(-6, -4, -6);
    scene.add(blueRim);

    // ============================================================
    // 1. CENTRAL QUANTUM CRYSTAL CORE
    // ============================================================
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x00d2ff,
      emissive: 0x0052cc,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.82,
      ior: 1.55,
      transparent: true,
      opacity: 0.92,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // Wireframe Cage around Core
    const wireGeo = new THREE.IcosahedronGeometry(1.34, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreWire = new THREE.Mesh(wireGeo, wireMat);
    masterGroup.add(coreWire);
    coreWireRef.current = coreWire;

    // Inner Glowing Core Sphere
    const innerCoreGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    masterGroup.add(innerCore);

    // ============================================================
    // 2. FIBONACCI NEURAL SYNAPSE NETWORK (100 Nodes & Lasers)
    // ============================================================
    const nodeCount = 90;
    const nodeRadius = 2.4;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 3.0,
    });

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = nodeRadius + (Math.sin(i * 1.5) * 0.2);

      const pos = new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      masterGroup.add(nodeMesh);
    }

    // Connect Neighbor Nodes with Laser Synapses
    const lineIndices: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 1.1) {
          lineIndices.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineIndices, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const synapseLines = new THREE.LineSegments(lineGeo, lineMat);
    masterGroup.add(synapseLines);

    // ============================================================
    // 3. 3 CONCENTRIC GYROSCOPIC ORBITAL RINGS
    // ============================================================
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 1.2,
      roughness: 0.15,
      metalness: 0.9,
    });
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x0066ff,
      emissive: 0x0066ff,
      emissiveIntensity: 1.0,
      roughness: 0.15,
      metalness: 0.9,
    });
    const ringMat3 = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.1,
      roughness: 0.15,
      metalness: 0.9,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.025, 16, 100), ringMat1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.65, 0.028, 16, 100), ringMat2);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.03, 16, 100), ringMat3);
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 4;

    masterGroup.add(ring1);
    masterGroup.add(ring2);
    masterGroup.add(ring3);
    ring1Ref.current = ring1;
    ring2Ref.current = ring2;
    ring3Ref.current = ring3;

    // Small glowing beacons on each ring
    const beaconGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x00d2ff,
      emissiveIntensity: 3.5,
    });
    const beacon1 = new THREE.Mesh(beaconGeo, beaconMat);
    beacon1.position.set(2.1, 0, 0);
    ring1.add(beacon1);

    const beacon2 = new THREE.Mesh(beaconGeo, beaconMat);
    beacon2.position.set(0, 2.65, 0);
    ring2.add(beacon2);

    const beacon3 = new THREE.Mesh(beaconGeo, beaconMat);
    beacon3.position.set(0, 0, 3.2);
    ring3.add(beacon3);

    // ============================================================
    // 4. 6 ORBITING MODALITY SATELLITES WITH LASER BEAMS
    // ============================================================
    const satellites: { group: THREE.Group; hex: number }[] = [];
    const beams: THREE.Line[] = [];

    CAPABILITIES.forEach((cap, idx) => {
      const satGroup = new THREE.Group();
      const angle = (idx * Math.PI * 2) / CAPABILITIES.length;
      const dist = 3.4;

      satGroup.position.set(
        Math.cos(angle) * dist,
        Math.sin(angle * 2) * 0.6,
        Math.sin(angle) * dist
      );

      // Satellite Crystal
      const satCrystalMat = new THREE.MeshStandardMaterial({
        color: cap.hex,
        emissive: cap.hex,
        emissiveIntensity: 2.2,
        roughness: 0.1,
        metalness: 0.8,
      });
      const satCrystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), satCrystalMat);
      satGroup.add(satCrystal);

      // Satellite Orbit Halo Ring
      const satHalo = new THREE.Mesh(
        new THREE.TorusGeometry(0.36, 0.015, 12, 32),
        satCrystalMat
      );
      satHalo.rotation.x = Math.PI / 2;
      satGroup.add(satHalo);

      masterGroup.add(satGroup);
      satellites.push({ group: satGroup, hex: cap.hex });

      // Energy Beam connecting to Central Core
      const beamGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        satGroup.position,
      ]);
      const beamMat = new THREE.LineBasicMaterial({
        color: cap.hex,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      const beam = new THREE.Line(beamGeo, beamMat);
      masterGroup.add(beam);
      beams.push(beam);
    });

    satellitesRef.current = satellites;
    beamsRef.current = beams;

    // ============================================================
    // 5. AMBIENT PARTICLES (STARFIELD)
    // ============================================================
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePositions[p] = (Math.random() - 0.5) * 16;
      particlePositions[p + 1] = (Math.random() - 0.5) * 16;
      particlePositions[p + 2] = (Math.random() - 0.5) * 16;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00d2ff,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const starfield = new THREE.Points(particleGeo, particleMat);
    scene.add(starfield);

    // ============================================================
    // 6. RENDER LOOP WITH REAL-TIME CONTINUOUS ROTATION
    // ============================================================
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      controls.update();

      // Core pulsating breathing
      if (coreMeshRef.current && coreWireRef.current) {
        const pulse = 1 + Math.sin(time * 2.5) * 0.04;
        coreMeshRef.current.scale.set(pulse, pulse, pulse);
        coreWireRef.current.scale.set(pulse * 1.03, pulse * 1.03, pulse * 1.03);

        coreMeshRef.current.rotation.y += delta * 0.25;
        coreMeshRef.current.rotation.x += delta * 0.15;
        coreWireRef.current.rotation.y -= delta * 0.2;
      }

      // Gyroscopic rings rotation
      if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.6;
      if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.45;
      if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.5;

      // Satellites orbiting
      satellites.forEach((sat, i) => {
        sat.group.rotation.y += delta * 1.5;
        sat.group.rotation.x += delta * 0.8;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth || 650;
      const h = container.clientHeight || 580;
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

  // When capability is selected: Dynamic Core color transition
  const handleSelectCapability = (cap: GenAICapability) => {
    setSelectedCap(cap);
    setCustomPrompt(cap.samplePrompt);
    setSimulatedOutputText("");

    if (coreMeshRef.current && pointLightRef.current) {
      const targetColor = new THREE.Color(cap.hex);
      gsap.to((coreMeshRef.current.material as THREE.MeshPhysicalMaterial).color, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 0.6,
      });
      gsap.to((coreMeshRef.current.material as THREE.MeshPhysicalMaterial).emissive, {
        r: targetColor.r * 0.6,
        g: targetColor.g * 0.6,
        b: targetColor.b * 0.6,
        duration: 0.6,
      });
      gsap.to(pointLightRef.current.color, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 0.6,
      });

      // Quick core pop scale
      gsap.fromTo(
        coreMeshRef.current.scale,
        { x: 1.25, y: 1.25, z: 1.25 },
        { x: 1, y: 1, z: 1, duration: 0.8, ease: "elastic.out(1, 0.4)" }
      );
    }
  };

  // Run Real-Time Simulated Pipeline
  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedOutputText("");

    // Animate point light pulse
    if (pointLightRef.current) {
      gsap.to(pointLightRef.current, { intensity: 9.0, duration: 0.2, yoyo: true, repeat: 3 });
    }

    const fullText = selectedCap.simulatedOutput;
    let currentIdx = 0;

    const interval = setInterval(() => {
      currentIdx += 4;
      setSimulatedOutputText(fullText.slice(0, currentIdx));
      if (currentIdx >= fullText.length) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 24);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#040A18] via-[#061126] to-[#020712] text-white py-10 sm:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden rounded-3xl border border-blue-500/20 shadow-[0_25px_80px_rgba(0,102,255,0.25)]">
      {/* Background Ambient Cyber Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#0066FF]/20 via-[#00D2FF]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[350px] bg-[#0066FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      {/* ============================================================ */}
      {/* SECTION HEADER: ATS GLOBAL TECH ENTERPRISE PALETTE */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-blue-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-cyan-400/30 text-xs font-mono font-semibold text-[#00D2FF] mb-3 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>ATS GLOBAL TECH • NEXT-GEN GENERATIVE AI ENGINE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white mt-1 leading-[1.08]">
              Master The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0066FF]">
                Gen AI Revolution
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 max-w-xl leading-relaxed">
              Experience the 3D Neural Quantum Core powering enterprise agent swarms, sub-second RAG retrieval, and deterministic LLM reasoning.
            </p>
          </div>

          {/* Right Status Pill & CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-blue-950/80 px-3.5 py-2 rounded-2xl border border-cyan-400/30 backdrop-blur-md">
              <Activity className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span>CORE: {selectedCap.tag}</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0040A8] text-white text-xs font-mono font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)] transition cursor-pointer border border-cyan-400/40"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>Architecture Deep-Dive</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN INTERACTIVE 3D ARENA */}
      {/* Left Modality List | Center 3D Quantum Core | Right Live Console */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Left Column: 3 Capabilities */}
        <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
          <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            COGNITIVE MODALITIES
          </div>

          {CAPABILITIES.slice(0, 3).map((cap) => {
            const isSelected = selectedCap.id === cap.id;
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                onClick={() => handleSelectCapability(cap)}
                className={`group p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-900/90 to-[#0A1629] border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.35)] translate-x-1"
                    : "bg-[#09152B]/70 hover:bg-[#0E2042] border-blue-500/20 hover:border-cyan-400/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isSelected
                        ? "bg-[#00D2FF] text-[#0A1629] font-bold shadow-[0_0_15px_#00D2FF]"
                        : "bg-white/10 text-cyan-300 group-hover:text-white group-hover:bg-[#0066FF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-xs font-bold tracking-tight uppercase ${
                          isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {cap.title}
                      </h4>
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                          isSelected
                            ? "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"
                            : "bg-slate-600 group-hover:bg-[#00D2FF]"
                        }`}
                      />
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-1 line-clamp-2">
                      {cap.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Column: TRUE 3D QUANTUM NEURAL CORE CANVAS */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[480px] sm:min-h-[580px] order-1 lg:order-2">
          
          {/* Canvas Mount Container */}
          <div
            ref={mountRef}
            className="w-full h-[480px] sm:h-[580px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
          />

          {/* Instructions Tag */}
          <div className="absolute bottom-2 px-3.5 py-1.5 rounded-full bg-blue-950/85 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md pointer-events-none flex items-center gap-2 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Interactive 3D Core • Drag to orbit 360° • Click capability to pulse</span>
          </div>
        </div>

        {/* Right Column: 3 Capabilities */}
        <div className="lg:col-span-3 space-y-3 order-3">
          <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            EXECUTION MATRIX
          </div>

          {CAPABILITIES.slice(3, 6).map((cap) => {
            const isSelected = selectedCap.id === cap.id;
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                onClick={() => handleSelectCapability(cap)}
                className={`group p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative ${
                  isSelected
                    ? "bg-gradient-to-l from-blue-900/90 to-[#0A1629] border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.35)] -translate-x-1"
                    : "bg-[#09152B]/70 hover:bg-[#0E2042] border-blue-500/20 hover:border-cyan-400/40"
                }`}
              >
                <div className="flex items-start gap-3">
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
                        className={`text-xs font-bold tracking-tight uppercase ${
                          isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {cap.title}
                      </h4>
                      {isSelected && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] font-bold border border-[#00D2FF]/40">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-1 line-clamp-2">
                      {cap.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE LIVE SIMULATOR CONSOLE (RUN GEN AI IN REAL-TIME) */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto mt-8 p-4 sm:p-6 rounded-2xl bg-[#081329]/90 border border-blue-500/30 backdrop-blur-xl relative z-10 shadow-[0_15px_50px_rgba(0,102,255,0.2)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white shadow-[0_0_12px_#0066FF]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono uppercase">
                ATS Neural Runtime Console // {selectedCap.title}
              </h3>
              <p className="text-xs text-slate-400">
                Simulate generative output execution through real-time 3D pipeline
              </p>
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#00D2FF] hover:from-[#0052CC] hover:to-[#00B4D8] text-white font-bold text-xs font-mono shadow-[0_0_20px_rgba(0,102,255,0.4)] transition cursor-pointer disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <Activity className="w-3.5 h-3.5 animate-spin text-white" />
                <span>Computing In 3D...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-white fill-white" />
                <span>Run Gen AI Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* Pipeline Execution Console Box */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Left: Input Query & Steps */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Input Objective:</div>
            <div className="p-3 rounded-xl bg-[#040A18] border border-blue-500/20 text-xs font-mono text-cyan-200">
              "{selectedCap.samplePrompt}"
            </div>

            <div className="text-[11px] font-mono text-slate-400 uppercase pt-1">Execution Steps:</div>
            <div className="space-y-1.5">
              {selectedCap.pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-blue-500/20 text-[#00D2FF] flex items-center justify-center text-[9px] font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Terminal Stream */}
          <div className="md:col-span-7 flex flex-col">
            <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">
              Deterministic Synthesized Output:
            </div>
            <div className="flex-1 p-3.5 rounded-xl bg-[#02050E] border border-cyan-400/30 font-mono text-xs text-cyan-300 min-h-[140px] whitespace-pre-wrap leading-relaxed shadow-inner overflow-y-auto">
              {simulatedOutputText ? (
                simulatedOutputText
              ) : (
                <span className="text-slate-500 italic">
                  Click "Run Gen AI Pipeline" above to pulse the 3D core and stream simulated intelligence output...
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM FOOTER BAR: ATS ENTERPRISE METRICS */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-blue-500/20 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Full-Stack AI Engineering</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Zero-Leakage Airgap</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>SOC-2 & HIPAA Aligned</span>
            </span>
          </div>

          <Link
            to="/lets-create"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#00D2FF] hover:from-[#0052CC] hover:to-[#00B4D8] text-white font-bold text-xs sm:text-sm font-sans shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all transform hover:scale-[1.02]"
          >
            <span>Schedule AI Architecture Session</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>

      {/* ============================================================ */}
      {/* ARCHITECTURE DEEP-DIVE MODAL */}
      {/* ============================================================ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#071329] border border-cyan-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,102,255,0.4)] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0066FF] flex items-center justify-center text-white shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  ATS ENTERPRISE ARCHITECTURE
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Generative AI Production Blueprint
                </h3>
              </div>
            </div>

            {/* Modal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {selectedCap.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#040A18] border border-blue-500/20">
                  <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                  <div className="text-xl font-bold text-white mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#040A18] border border-blue-500/20 mb-6">
              <h4 className="text-xs font-mono text-cyan-300 uppercase font-bold mb-1">
                Architecture Breakdown
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedCap.fullDesc}
              </p>
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-blue-500/20">
              <div className="text-xs text-slate-400">
                Ready to deploy custom GenAI architecture for your organization?
              </div>
              <Link
                to="/lets-create"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white font-bold text-xs sm:text-sm text-center shadow-md hover:scale-105 transition"
              >
                Book Technical Consultation
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default FantasticGenAICore3D;
