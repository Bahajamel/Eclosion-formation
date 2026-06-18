import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données personnelles du site ${siteConfig.name}.`,
  robots: { index: false, follow: true },
};

const { contact } = siteConfig;

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" />

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10 text-muted-foreground">

            <p className="leading-relaxed">
              {siteConfig.name} accorde une grande importance à la protection de
              vos données personnelles. La présente politique décrit la manière
              dont vos données sont collectées et traitées dans le cadre de
              l&apos;utilisation de ce site.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Responsable du traitement
              </h2>
              <p className="mt-3 leading-relaxed">
                Le responsable du traitement des données est {siteConfig.name},
                {" "}
                {contact.address.line1}, {contact.address.postalCode}{" "}
                {contact.address.city}. Pour toute question, vous pouvez nous
                contacter à l&apos;adresse {contact.email}.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Données collectées
              </h2>
              <p className="mt-3 leading-relaxed">
                Nous collectons les données que vous nous transmettez via nos
                formulaires (candidature, contact) : nom, prénom, adresse email,
                numéro de téléphone, formation souhaitée, situation et message.
                Ces données sont strictement nécessaires au traitement de votre
                demande.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Finalités du traitement
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>Traiter et répondre à vos demandes de contact ;</li>
                <li>Étudier et suivre votre candidature ;</li>
                <li>Vous informer sur nos formations et votre parcours.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Base légale
              </h2>
              <p className="mt-3 leading-relaxed">
                Les traitements reposent sur votre consentement et/ou sur
                l&apos;exécution de mesures précontractuelles prises à votre
                demande.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Durée de conservation
              </h2>
              <p className="mt-3 leading-relaxed">
                Vos données sont conservées pendant la durée nécessaire au
                traitement de votre demande, puis archivées ou supprimées
                conformément aux durées légales applicables. [Durées à préciser.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Destinataires des données
              </h2>
              <p className="mt-3 leading-relaxed">
                Vos données sont destinées aux services internes de{" "}
                {siteConfig.name} en charge du traitement de votre demande. Elles
                ne sont ni vendues ni cédées à des tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">Vos droits</h2>
              <p className="mt-3 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                rectification, d&apos;effacement, de limitation, d&apos;opposition
                et de portabilité de vos données. Vous pouvez exercer ces droits
                en nous écrivant à {contact.email}. Vous avez également le droit
                d&apos;introduire une réclamation auprès de la CNIL.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">Cookies</h2>
              <p className="mt-3 leading-relaxed">
                Ce site peut utiliser des cookies nécessaires à son bon
                fonctionnement. [Détaillez ici l&apos;usage éventuel de cookies de
                mesure d&apos;audience ou tiers, et les modalités de consentement.]
              </p>
            </div>

            <p className="text-sm">Dernière mise à jour : [date à compléter].</p>
          </div>
        </div>
      </section>
    </>
  );
}
