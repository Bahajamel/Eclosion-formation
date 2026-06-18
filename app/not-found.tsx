import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Erreur 404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="accent">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/formations">Voir les formations</Link>
        </Button>
      </div>
    </section>
  );
}
