"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let devicePixelRatio: number;
    let centerX: number;
    let centerY: number;
    let maxGalaxyRadius: number;

    // Set canvas dimensions and center
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      ctx.scale(devicePixelRatio, devicePixelRatio);

      centerX = rect.width / 2;
      centerY = rect.height / 2;
      maxGalaxyRadius = Math.min(centerX, centerY) * 0.8; // Max radius for the spiral
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number; // Original X position in the spiral
      baseY: number; // Original Y position in the spiral
      density: number; // For mouse interaction force
      color: string;
      distanceFromMouse: number; // Current distance from mouse

      constructor(baseX: number, baseY: number, size: number, color: string) {
        this.x = baseX;
        this.y = baseY;
        this.baseX = baseX;
        this.baseY = baseY;
        this.size = size;
        this.density = Math.random() * 15 + 5; // Vary density for different repulsion
        this.color = color;
        this.distanceFromMouse = 0;
      }

      update() {
        // Calculate distance between mouse and particle (relative to canvas center)
        const dxMouse = mouseX - (this.x + centerX);
        const dyMouse = mouseY - (this.y + centerY);
        this.distanceFromMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse
        );

        const forceDirectionX = dxMouse / this.distanceFromMouse;
        const forceDirectionY = dyMouse / this.distanceFromMouse;

        const maxMouseInfluenceDistance = 120; // Max distance for mouse influence
        const force =
          (maxMouseInfluenceDistance - this.distanceFromMouse) /
          maxMouseInfluenceDistance;

        if (this.distanceFromMouse < maxMouseInfluenceDistance) {
          const repulsionStrength = force * this.density * 0.8; // Adjust strength
          this.x -= forceDirectionX * repulsionStrength;
          this.y -= forceDirectionY * repulsionStrength;
        } else {
          // Return to base position smoothly
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10; // Smooth return speed
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10; // Smooth return speed
          }
        }
      }

      draw() {
        if (!ctx) {
          return;
        }
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const particleCount = 1200; // Reducido significativamente de 5000 a 1200

    // Función para generar colores mezclados en la paleta azul-púrpura-rosado
    function generateColor(): string {
      // Array de rangos de colores para mezclar aleatoriamente
      const colorRanges = [
        // Azules profundos
        {
          hueMin: 210,
          hueMax: 240,
          satMin: 70,
          satMax: 95,
          lightMin: 40,
          lightMax: 70,
        },
        // Púrpuras
        {
          hueMin: 260,
          hueMax: 300,
          satMin: 60,
          satMax: 90,
          lightMin: 50,
          lightMax: 75,
        },
        // Rosados y magentas
        {
          hueMin: 300,
          hueMax: 330,
          satMin: 65,
          satMax: 90,
          lightMin: 55,
          lightMax: 80,
        },
      ];

      // Seleccionar aleatoriamente uno de los rangos de color
      const selectedRange =
        colorRanges[Math.floor(Math.random() * colorRanges.length)];

      const hue =
        selectedRange.hueMin +
        Math.random() * (selectedRange.hueMax - selectedRange.hueMin);
      const saturation =
        selectedRange.satMin +
        Math.random() * (selectedRange.satMax - selectedRange.satMin);
      const lightness =
        selectedRange.lightMin +
        Math.random() * (selectedRange.lightMax - selectedRange.lightMin);

      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    function init() {
      particlesArray.length = 0; // Clear existing particles

      const spiralTightness = 0.12; // Controls how tight the spiral is (smaller = tighter)
      const maxRevolutions = 12; // Reducido de 15 a 12 revoluciones
      const armCount = 3; // Number of spiral arms

      for (let i = 0; i < particleCount; i++) {
        const angleProgress = i / particleCount; // Normalized progress from 0 to 1
        const baseAngle = angleProgress * (Math.PI * 2 * maxRevolutions); // Base angle for the spiral
        const baseRadius = maxGalaxyRadius * angleProgress ** 0.8; // Non-linear radius growth for denser center

        // Add randomness for a more natural, clustered look
        const randomAngleOffset = (Math.random() - 0.5) * Math.PI * 0.15;
        const randomRadiusOffset =
          (Math.random() - 0.5) * maxGalaxyRadius * 0.03;

        for (let arm = 0; arm < armCount; arm++) {
          const armOffset = ((Math.PI * 2) / armCount) * arm;
          const finalAngle = baseAngle + armOffset + randomAngleOffset;
          const finalRadius = baseRadius + randomRadiusOffset;

          const baseX = finalRadius * Math.cos(finalAngle);
          const baseY = finalRadius * Math.sin(finalAngle);

          // Particle size based on radius (larger further out, with some variation)
          const minSize = 0.8; // Ligeramente más grandes para compensar menos partículas
          const maxSize = 4.0;
          const size =
            minSize +
            (maxSize - minSize) * (finalRadius / maxGalaxyRadius) +
            (Math.random() - 0.5) * 0.8;

          // Usar la nueva función de colores (sin parámetros para mezcla aleatoria)
          const color = generateColor();

          particlesArray.push(new Particle(baseX, baseY, size, color));
        }
      }
    }

    init();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      ctx.save(); // Save the current canvas state
      ctx.translate(centerX, centerY); // Move origin to center of canvas

      // Update and draw particles
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }

      ctx.restore(); // Restore the canvas state (undo translate and rotate)

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", init);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative" // Removed bg-black
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </motion.div>
  );
}
