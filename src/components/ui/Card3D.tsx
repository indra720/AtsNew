import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = "",
  intensity = 15,
  glowColor = "rgba(0, 242, 254, 0.15)",
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
      
      {/* Specular Cyber Glow on Hover */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`
        }}
      />
    </motion.div>
  );
};

export default Card3D;
