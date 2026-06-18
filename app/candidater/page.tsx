import type { Metadata } from "next";
import { Suspense } from "react";
import { MailCheck, PhoneCall, Search, UserCheck } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { CandidatureForm } from "@/components/CandidatureForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Candidater",
  description:
    "Déposez votre candidature à l'une des formations d'Eclosion Formation. Un formulaire simple et un accompagnement à chaque étape de votre projet en alternance.",
};

const apres = [
  {
    icon: MailCheck,
    titre: "Accusé de réception",
    texte:
      "Vous recevez une confirmation de la bonne réception de votre candidature.",
  },
  {
    icon: Search,
    titre: "Étude de votre dossier",
    texte:
      "Notre équipe étudie votre profil et votre projet sous 48 à 72 heures ouvrées.",
  },
  {
    icon: PhoneCall,
    titre: "Échange téléphonique",
    texte:
      "Nous vous recontactons pour échanger sur votre projet et répondre à vos questions.",
  },
  {
    icon: UserCheck,
    titre: "Suite du parcours",
    texte:
      "Si votre profil correspond, nous vous accompagnons vers l'entreprise et le contrat.",
  },
];

export default function CandidaterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Candidater"
        title="Déposez votre candidature"
        description="Quelques minutes suffisent. Remplissez le formulaire ci-dessous : notre équipe revient vers vous rapidement pour étudier votre projet."
      />

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Formulaire */}
            <div className="lg:col-span-7">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-primary">
                    Formulaire de candidature
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tous vos renseignements restent confidentiels et ne sont
                    utilisés que pour le traitement de votre candidature.
                  </p>
                  <div className="mt-8">
                    <Suspense fallback={null}>
                      <CandidatureForm />
                    </Suspense>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Que se passe-t-il après ? */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xl font-semibold text-primary">
                  Que se passe-t-il après l&apos;envoi ?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Votre candidature suit un parcours clair. Voici les étapes
                  suivantes.
                </p>
                <ol className="mt-6 space-y-4">
                  {apres.map((etape, i) => (
                    <li
                      key={etape.titre}
                      className="flex gap-4 rounded-xl border border-border bg-card p-5"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <etape.icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-primary">
                          <span className="text-accent">{i + 1}.</span>{" "}
                          {etape.titre}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {etape.texte}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
