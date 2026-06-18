"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, BadgeCheck, GraduationCap } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const highlights = [
  { label: "Formations diplômantes", value: "Titres professionnels (RNCP)" },
  { label: "Modalité", value: "Alternance · présentiel, distanciel ou mixte" },
  { label: "Accompagnement", value: "Référent dédié & suivi individualisé" },
  { label: "Accessibilité", value: "Référent handicap & adaptations possibles" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Section d'accueil (hero) du site.
 * - Fond dégradé bleu + grille discrète + halos d'accent (glassmorphism sobre).
 * - Apparition fluide en cascade des titres, du texte et des boutons.
 * - Carte « En bref » en verre dépoli.
 */
export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const childProps = shouldReduceMotion ? {} : { variants: item };

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary via-secondary/40 to-background">
      {/* Fond travaillé */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid mask-fade-edges opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-accent-soft/10 blur-3xl"
      />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <motion.div className="lg:col-span-7" {...motionProps}>
          <motion.span
            {...childProps}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm font-medium text-accent backdrop-blur"
          >
            <GraduationCap className="size-4" aria-hidden="true" />
            {siteConfig.baseline}
          </motion.span>

          <motion.h1
            {...childProps}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            Faites éclore votre avenir{" "}
            <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
              par l&apos;apprentissage
            </span>
          </motion.h1>

          <motion.p
            {...childProps}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {siteConfig.name} accompagne chaque apprenti vers un métier et un
            diplôme reconnu. Des formations en alternance, un suivi humain et
            structuré, au service de votre réussite.
          </motion.p>

          <motion.div
            {...childProps}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="accent" size="lg">
              <Link href="/candidater">
                Candidater
                <ArrowRight
                  className="transition-transform group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/formations">Découvrir les formations</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
              })}
        >
          <div className="relative">
            {/* Photo d'illustration */}
            <div className="overflow-hidden rounded-2xl border border-white/40 shadow-xl shadow-primary/10">
              <Image
                src="/Young_professionals_teamwork_meeting.webp"
                alt="Apprentis et formateurs réunis autour d'un projet"
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Carte « En bref » qui chevauche la photo */}
            <div className="mt-6 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl shadow-primary/5 backdrop-blur-md sm:-mt-12 sm:ml-auto sm:max-w-sm sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                En bref
              </p>
              <dl className="mt-5 space-y-5">
                {highlights.map((entry) => (
                  <div
                    key={entry.label}
                    className="flex items-start gap-3 border-b border-border pb-5 last:border-0 last:pb-0"
                  >
                    <BadgeCheck
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm text-muted-foreground">
                        {entry.label}
                      </dt>
                      <dd className="font-semibold text-primary">
                        {entry.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
