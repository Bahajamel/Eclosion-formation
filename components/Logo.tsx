import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  className?: string;
  /** Variante claire pour fond foncé (pied de page). */
  variant?: "default" | "light";
}

/**
 * Logo du CFA.
 * 👉 Les images du logo sont dans le dossier /public.
 *    - Fond clair (en-tête)  → eclosion_horizontal_couleur.png
 *    - Fond foncé (pied de page) → eclosion_horizontal_blanc.png
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  const src =
    variant === "light"
      ? "/eclosion_horizontal_blanc.png"
      : "/eclosion_horizontal_couleur.png";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Accueil`}
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={2000}
        height={602}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}
