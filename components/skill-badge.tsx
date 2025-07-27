"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SkillBadgeProps {
  name: string;
  level: number;
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Pequeño delay para asegurar que el componente esté completamente montado
      const timer = setTimeout(() => {
        controls.start({
          width: `${level}%`,
          transition: { duration: 1, ease: "easeOut" },
        });
        setHasAnimated(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isInView, level, controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="text-center mb-4 font-medium text-lg">{name}</div>

          <div className="relative h-2.5 w-full bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={controls}
              style={{ width: 0 }} // Forzar estado inicial
            />
          </div>

          <div className="mt-2 text-right text-sm text-zinc-400">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {level}%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
