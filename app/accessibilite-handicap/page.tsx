import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, Mail, Phone, UserRound } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Accessibilité handicap",
  description:
    "Eclosyon Formation s'engage pour l'accessibilité de ses formations aux personnes en situation de handicap : référent handicap dédié et adaptations possibles selon la situation.",
};

const referent = siteConfig.referentHandicap;

export default function AccessibilitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Accessibilité handicap"
        title="Une formation accessible à toutes et à tous"
        description="Nous sommes engagés pour que le handicap ne soit jamais un frein à l'accès à la formation. Chaque situation est étudiée avec attention et bienveillance."
      />

      {/* Engagement */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionTitle
                  eyebrow="Notre engagement"
                  title="L'accessibilité, une attention de chaque instant"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    {siteConfig.name} attache une importance particulière à
                    l&apos;accueil et à l&apos;accompagnement des personnes en
                    situation de handicap. Notre objectif est de permettre à
                    chacun de suivre sa formation dans les meilleures conditions.
                  </p>
                  <p>
                    Selon les situations, des{" "}
                    <strong className="text-foreground">adaptations</strong>{" "}
                    peuvent être étudiées et mises en place : aménagement du
                    parcours, des supports, des modalités d&apos;évaluation, ou
                    orientation vers des partenaires spécialisés.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Référent handicap */}
      <section className="border-y border-border bg-secondary/50 py-16 lg:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionTitle
                  eyebrow="Votre interlocuteur"
                  title="Le référent handicap"
                  description="Un interlocuteur dédié est à votre écoute pour étudier votre situation, en toute confidentialité, et identifier les adaptations possibles."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <UserRound className="size-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-sm font-medium uppercase tracking-wide text-accent">
                    Référent handicap
                  </p>
                  <p className="mt-1 text-lg font-semibold text-primary">
                    {referent.name}
                  </p>
                  <div className="mt-5 space-y-3 text-sm">
                    <a
                      href={`mailto:${referent.email}`}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                      {referent.email}
                    </a>
                    <a
                      href={`tel:${referent.phoneHref}`}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                      {referent.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Signaler un besoin */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm lg:p-12">
              <Accessibility
                className="mx-auto size-12 text-accent"
                aria-hidden="true"
              />
              <h2 className="mt-5 text-2xl font-bold text-primary">
                Signaler un besoin spécifique
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Vous pouvez signaler un besoin spécifique{" "}
                <strong className="text-foreground">
                  dès votre candidature
                </strong>{" "}
                ou{" "}
                <strong className="text-foreground">
                  à tout moment pendant la formation
                </strong>
                . Plus le besoin est exprimé tôt, plus nous pouvons anticiper et
                proposer des solutions adaptées. Chaque demande est traitée avec
                confidentialité.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href="/candidater">Candidater</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contacter le référent</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
