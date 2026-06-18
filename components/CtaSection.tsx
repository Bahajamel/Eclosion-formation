import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

/**
 * Bandeau d'appel à l'action réutilisé en bas de plusieurs pages.
 */
export function CtaSection({
  title = "Prêt à donner vie à votre projet ?",
  description = "Déposez votre candidature en quelques minutes. Notre équipe vous accompagne à chaque étape, de l'inscription à la signature du contrat.",
}: CtaSectionProps) {
  return (
    <section className="bg-secondary/60">
      <div className="container py-16 lg:py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[hsl(218_60%_16%)] px-8 py-14 text-center text-primary-foreground shadow-xl shadow-primary/10 lg:px-16">
          {/* Fond travaillé */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grid-dark mask-fade-edges"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-accent-soft/15 blur-3xl"
          />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href="/candidater">
                  Candidater
                  <ArrowRight
                    className="transition-transform group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
