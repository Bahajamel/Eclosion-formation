"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Décalage avant le démarrage de l'animation (en secondes). */
  delay?: number;
  /**
   * Si `true`, anime les enfants directs en cascade (stagger).
   * Chaque enfant doit alors être enveloppé dans <AnimatedItem>.
   */
  stagger?: boolean;
}

const container = (delay: number, stagger: boolean): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger ? 0.08 : 0,
    },
  },
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Conteneur d'apparition au scroll, sobre et professionnel.
 * - Apparition progressive (fade + translation).
 * - Mode `stagger` pour faire apparaître une liste de cartes en cascade.
 * - Respecte la préférence système « réduire les animations ».
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = false,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Élément animé individuel, à utiliser à l'intérieur d'un
 * <AnimatedSection stagger> pour la mise en cascade.
 */
export function AnimatedItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
