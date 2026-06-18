import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Mise en page de l'icône : au-dessus du titre (par défaut) ou à gauche. */
  layout?: "stacked" | "inline";
  /** Style de la pastille d'icône. */
  iconVariant?: "accent" | "primary";
  className?: string;
}

/**
 * Carte de présentation moderne et réutilisable.
 * - Bordure arrondie, ombre légère, fond légèrement bleuté.
 * - Léger soulèvement au survol (CSS, sans coût client).
 * - Icône Lucide cohérente.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  layout = "stacked",
  iconVariant = "accent",
  className,
}: FeatureCardProps) {
  const iconClasses = cn(
    "flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
    iconVariant === "accent"
      ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
      : "bg-primary text-primary-foreground"
  );

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {/* Reflet d'accent discret en haut de carte */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div
        className={cn(
          layout === "inline" ? "flex items-start gap-4" : "flex flex-col"
        )}
      >
        <span className={iconClasses}>
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div className={layout === "stacked" ? "mt-5" : ""}>
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
