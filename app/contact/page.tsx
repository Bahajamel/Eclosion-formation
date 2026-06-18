import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Eclosyon Formation : adresse, email, téléphone et horaires. Posez vos questions ou demandez à être rappelé par notre équipe.",
};

const { contact, hours } = siteConfig;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question sur nos formations, l'apprentissage ou votre candidature ? Notre équipe est à votre écoute."
      />

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Coordonnées */}
            <div className="lg:col-span-5">
              <h2 className="text-xl font-semibold text-primary">
                Nos coordonnées
              </h2>
              <dl className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Adresse
                    </dt>
                    <dd className="mt-0.5 not-italic text-foreground">
                      <address className="not-italic">
                        {contact.address.line1}
                        <br />
                        {contact.address.postalCode} {contact.address.city}
                      </address>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Email
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Téléphone
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={`tel:${contact.phoneHref}`}
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Horaires
                    </dt>
                    <dd className="mt-1 space-y-1 text-sm text-foreground">
                      {hours.map((h) => (
                        <div
                          key={h.days}
                          className="flex flex-wrap gap-x-2"
                        >
                          <span className="font-medium">{h.days} :</span>
                          <span className="text-muted-foreground">{h.time}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              {/* Être rappelé */}
              <Card className="mt-10 border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <PhoneCall className="size-5 text-accent" aria-hidden="true" />
                    Être rappelé
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Vous préférez que l&apos;on vous appelle ? Indiquez votre
                    numéro et le créneau qui vous convient dans le formulaire
                    ci-contre (sujet «&nbsp;Être rappelé&nbsp;»), ou appelez-nous
                    directement au{" "}
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="font-medium text-accent hover:underline"
                    >
                      {contact.phone}
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-7">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-primary">
                    Envoyer un message
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nous vous répondons dans les meilleurs délais.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
