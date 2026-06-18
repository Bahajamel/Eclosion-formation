import type { Metadata } from "next";
import { Info } from "lucide-react";

import { formations } from "@/src/data/formations";
import { FormationCard } from "@/components/FormationCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Nos formations",
  description:
    "Découvrez les titres professionnels proposés par Eclosyon Formation : RNCP, niveau, durée, modalité, objectifs et débouchés.",
};

export default function FormationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos formations"
        title="Des titres professionnels pour construire votre métier"
        description="Toutes nos formations sont dispensées en alternance et débouchent sur un titre professionnel reconnu (RNCP). Choisissez celle qui correspond à votre projet."
      />

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <p>
              Les informations (durée, modalité) sont données à titre indicatif
              et peuvent varier selon les sessions. Pour toute précision,
              n&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {formations.map((formation, i) => (
              <Reveal key={formation.slug} delay={(i % 3) * 0.05}>
                <FormationCard formation={formation} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Une formation vous intéresse ?"
        description="Déposez votre candidature ou contactez-nous pour échanger sur votre projet et la formation la plus adaptée."
      />
    </>
  );
}
