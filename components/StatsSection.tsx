import {
  CalendarCheck,
  CheckCircle2,
  Laptop,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

interface Stat {
  icon: LucideIcon;
  /** Valeur mise en avant (ex. « 100 % », « 3 », « Régulier »). */
  value: string;
  label: string;
}

/**
 * Chiffres clés du CFA.
 * 👉 À PERSONNALISER : remplacez ces valeurs d'exemple par vos chiffres réels.
 */
const defaultStats: Stat[] = [
  {
    icon: CheckCircle2,
    value: "100 %",
    label: "Accompagnement pédagogique de chaque apprenant",
  },
  {
    icon: CalendarCheck,
    value: "Régulier",
    label: "Suivi des apprenants tout au long du parcours",
  },
  {
    icon: Laptop,
    value: "3 modalités",
    label: "Formations en présentiel, distanciel ou mixte",
  },
  {
    icon: Users,
    value: "CFA · Apprenant · Entreprise",
    label: "Une relation tripartite avec le maître d'apprentissage",
  },
];

interface StatsSectionProps {
  stats?: Stat[];
}

export function StatsSection({ stats = defaultStats }: StatsSectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-primary text-primary-foreground">
      {/* Fond travaillé : grille discrète + halos */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-fade-edges" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-accent-soft/15 blur-3xl"
      />

      <div className="container relative py-20 lg:py-24">
        <SectionTitle
          align="center"
          eyebrow="Chiffres clés"
          title="Notre engagement en quelques repères"
          description="Des indicateurs simples qui résument notre façon d'accompagner les apprentis et les entreprises."
          className="[&_h2]:text-white [&_p:last-child]:text-white/75"
        />

        <AnimatedSection
          stagger
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <AnimatedItem key={stat.label}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/20 text-accent-soft">
                  <stat.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {stat.label}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <p className="mt-10 text-center text-xs text-white/50">
          Exemples à personnaliser avec vos chiffres réels.
        </p>
      </div>
    </section>
  );
}
