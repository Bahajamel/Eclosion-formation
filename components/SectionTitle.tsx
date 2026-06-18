import { cn } from "@/lib/utils";

interface SectionTitleProps {
  /** Petit sur-titre affiché au-dessus du titre (optionnel). */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Alignement du bloc de titre. */
  align?: "left" | "center";
  className?: string;
  /** Niveau de titre sémantique (par défaut h2). */
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
