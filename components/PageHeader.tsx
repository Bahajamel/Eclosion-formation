import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * En-tête standard des pages internes.
 * Bandeau bleu institutionnel avec fond travaillé (dégradé, grille discrète,
 * halos d'accent) et apparition douce du titre.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary via-primary to-[hsl(218_60%_16%)] text-primary-foreground",
        className
      )}
    >
      {/* Fond travaillé */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-dark mask-fade-edges"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 size-72 rounded-full bg-accent-soft/15 blur-3xl"
      />

      <div className="container relative py-16 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-accent-soft backdrop-blur">
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
