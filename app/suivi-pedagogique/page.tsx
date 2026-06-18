import type { Metadata } from "next";
import {
  CalendarCheck,
  ClipboardList,
  FileBarChart,
  GraduationCap,
  LifeBuoy,
  MonitorCheck,
  UserCheck,
  Wifi,
} from "lucide-react";

import { SectionTitle } from "@/components/SectionTitle";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Suivi pédagogique",
  description:
    "Un suivi pédagogique sérieux et organisé : accompagnement individualisé, suivi des absences et des connexions, évaluations, bilans intermédiaires et lien avec le maître d'apprentissage.",
};

const dispositifs = [
  {
    icon: UserCheck,
    titre: "Suivi régulier de l'apprenant",
    texte:
      "Chaque apprenant dispose d'un référent et de points d'étape réguliers pour suivre sa progression et lever les difficultés au plus tôt.",
  },
  {
    icon: LifeBuoy,
    titre: "Accompagnement pédagogique",
    texte:
      "Une équipe disponible pour répondre aux questions, proposer du soutien et adapter le rythme lorsque c'est nécessaire.",
  },
  {
    icon: CalendarCheck,
    titre: "Suivi des absences",
    texte:
      "Les présences sont contrôlées et les absences signalées rapidement à l'apprenant comme à l'entreprise.",
  },
  {
    icon: Wifi,
    titre: "Suivi des connexions à distance",
    texte:
      "En formation à distance, l'assiduité et les connexions sont tracées pour garantir un engagement réel et continu.",
  },
  {
    icon: ClipboardList,
    titre: "Évaluations",
    texte:
      "Des évaluations régulières permettent de mesurer les acquis et de préparer sereinement le passage du titre.",
  },
  {
    icon: FileBarChart,
    titre: "Bilans intermédiaires",
    texte:
      "Des bilans réunissent l'apprenant, le CFA et l'entreprise pour faire le point et ajuster les objectifs.",
  },
];

export default function SuiviPedagogiquePage() {
  return (
    <>
      <PageHeader
        eyebrow="Suivi pédagogique"
        title="Un accompagnement sérieux, structuré et continu"
        description="Notre suivi pédagogique vise une chose : sécuriser votre parcours et maximiser vos chances de réussite, du premier jour jusqu'à l'obtention du titre."
      />

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Le suivi n&apos;est pas une formalité : c&apos;est un fil
                conducteur. Nous combinons un accompagnement humain et des
                outils de suivi rigoureux pour garder le cap, anticiper les
                difficultés et valoriser les progrès de chaque apprenant.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dispositifs.map((item, i) => (
              <Reveal key={item.titre} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {item.titre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.texte}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lien avec le maître d'apprentissage */}
      <section className="border-y border-border bg-secondary/50 py-16 lg:py-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionTitle
                  eyebrow="Lien avec l'entreprise"
                  title="Une coordination étroite avec le maître d'apprentissage"
                  description="Parce que la formation se joue aussi en entreprise, nous maintenons un dialogue régulier avec le maître d'apprentissage."
                />
              </Reveal>
              <Reveal delay={0.05}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Des échanges réguliers sur la progression et l'intégration de l'apprenti en entreprise.",
                    "Un partage des objectifs pédagogiques et des compétences à développer.",
                    "Une réactivité commune en cas de difficulté, pour trouver des solutions ensemble.",
                    "Des bilans partagés pour faire le point sur le parcours.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <GraduationCap
                        className="mt-0.5 size-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{line}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                  <MonitorCheck
                    className="mx-auto size-12 text-accent"
                    aria-hidden="true"
                  />
                  <p className="mt-5 text-lg font-semibold text-primary">
                    Un suivi tracé et transparent
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Présences, évaluations, bilans : chaque étape du parcours est
                    documentée et partagée avec les bons interlocuteurs.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
