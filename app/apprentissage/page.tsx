import type { Metadata } from "next";
import {
  Building2,
  FileSignature,
  GraduationCap,
  Handshake,
  Rocket,
  School,
  Search,
  UserRound,
} from "lucide-react";

import { SectionTitle } from "@/components/SectionTitle";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "L'apprentissage",
  description:
    "Comprendre l'apprentissage : le principe de l'alternance, le rôle de l'apprenti, du CFA et du maître d'apprentissage, et les étapes avant l'entrée en formation.",
};

const roles = [
  {
    icon: UserRound,
    titre: "L'apprenti",
    texte:
      "Au cœur du dispositif, l'apprenti partage son temps entre le CFA et l'entreprise. Il s'investit dans sa formation, applique ses acquis en situation réelle et construit progressivement ses compétences professionnelles.",
  },
  {
    icon: School,
    titre: "Le CFA",
    texte:
      "Le centre de formation dispense les enseignements théoriques et pratiques, organise le parcours, évalue les compétences et accompagne l'apprenti tout au long de sa formation, en lien avec l'entreprise.",
  },
  {
    icon: Building2,
    titre: "Le maître d'apprentissage",
    texte:
      "En entreprise, le maître d'apprentissage transmet son métier, encadre l'apprenti au quotidien et veille à sa montée en compétences. Il est l'interlocuteur privilégié du CFA côté entreprise.",
  },
];

const etapes = [
  {
    icon: GraduationCap,
    titre: "Candidature",
    texte:
      "Vous déposez votre candidature en ligne et nous précisez votre projet et la formation visée.",
  },
  {
    icon: Search,
    titre: "Étude du dossier",
    texte:
      "Notre équipe étudie votre dossier, échange avec vous et valide l'adéquation avec la formation.",
  },
  {
    icon: Handshake,
    titre: "Recherche ou validation de l'entreprise",
    texte:
      "Vous recherchez votre entreprise d'accueil — nous vous accompagnons — ou nous validons celle que vous avez déjà trouvée.",
  },
  {
    icon: FileSignature,
    titre: "Signature du contrat",
    texte:
      "Le contrat d'apprentissage est établi et signé entre l'apprenti, l'entreprise et le CFA.",
  },
  {
    icon: Rocket,
    titre: "Entrée en formation",
    texte:
      "Vous démarrez votre parcours en alternance et bénéficiez de notre accompagnement tout au long de la formation.",
  },
];

export default function ApprentissagePage() {
  return (
    <>
      <PageHeader
        eyebrow="L'apprentissage"
        title="Apprendre un métier en alternant entreprise et formation"
        description="L'apprentissage permet de préparer un diplôme ou un titre professionnel tout en travaillant en entreprise. Une voie concrète, rémunérée et formatrice."
      />

      {/* Principe */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionTitle
                  eyebrow="Le principe"
                  title="Qu'est-ce que l'apprentissage ?"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    L&apos;apprentissage est une formation en alternance : vous
                    partagez votre temps entre le centre de formation, où vous
                    acquérez les savoirs et savoir-faire, et l&apos;entreprise,
                    où vous les mettez en pratique.
                  </p>
                  <p>
                    Vous signez un{" "}
                    <strong className="text-foreground">
                      contrat d&apos;apprentissage
                    </strong>{" "}
                    avec une entreprise : vous êtes salarié, rémunéré, et vous
                    préparez en même temps un titre professionnel reconnu. C&apos;est
                    une manière efficace d&apos;apprendre un métier tout en
                    gagnant en expérience et en autonomie.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Les rôles */}
      <section className="border-y border-border bg-secondary/50 py-16 lg:py-20">
        <div className="container">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Les acteurs"
              title="Qui fait quoi dans l'apprentissage ?"
              description="La réussite repose sur la complémentarité de trois acteurs."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {roles.map((role, i) => (
              <Reveal key={role.titre} delay={i * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <role.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-primary">
                      {role.titre}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {role.texte}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Les étapes */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Les étapes"
              title="De la candidature à l'entrée en formation"
              description="Cinq étapes claires, et un accompagnement à chacune d'elles."
            />
          </Reveal>

          <ol className="mx-auto mt-14 max-w-3xl space-y-4">
            {etapes.map((etape, i) => (
              <Reveal key={etape.titre} delay={i * 0.04}>
                <li className="flex items-start gap-5 rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-col items-center">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                      <etape.icon className="size-5 text-accent" aria-hidden="true" />
                      {etape.titre}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {etape.texte}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
