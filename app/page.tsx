import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  Compass,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  LineChart,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeatureCard } from "@/components/FeatureCard";
import { CtaSection } from "@/components/CtaSection";

const avantages = [
  {
    icon: Users,
    titre: "Des promotions à taille humaine",
    texte:
      "Un suivi personnalisé et une vraie proximité entre les apprenants, les formateurs et l'équipe pédagogique.",
  },
  {
    icon: GraduationCap,
    titre: "Des titres professionnels reconnus",
    texte:
      "Des formations inscrites au RNCP, en phase avec les attentes réelles des entreprises et du marché de l'emploi.",
  },
  {
    icon: HeartHandshake,
    titre: "Un accompagnement de bout en bout",
    texte:
      "De la candidature à la signature du contrat, nous vous épaulons à chaque étape de votre parcours.",
  },
  {
    icon: Compass,
    titre: "Une pédagogie orientée métier",
    texte:
      "Des mises en situation concrètes pour développer des compétences directement utiles en entreprise.",
  },
];

const engagements = [
  {
    icon: BadgeCheck,
    titre: "Qualité & exigence",
    texte:
      "Des contenus actualisés, des formateurs expérimentés et une démarche d'amélioration continue.",
  },
  {
    icon: HandHeart,
    titre: "Écoute & bienveillance",
    texte:
      "Un cadre rassurant où chaque apprenant est accompagné selon sa situation et ses besoins.",
  },
  {
    icon: LineChart,
    titre: "Réussite & insertion",
    texte:
      "Un objectif clair : l'obtention du titre et une insertion professionnelle durable.",
  },
];

const etapesAccompagnement = [
  {
    icon: ClipboardCheck,
    titre: "Un suivi individualisé",
    texte:
      "Chaque apprenant bénéficie d'un référent et de points réguliers pour suivre sa progression.",
  },
  {
    icon: CalendarClock,
    titre: "Un rythme structuré",
    texte:
      "Une alternance organisée entre le centre de formation et l'entreprise, avec des objectifs clairs.",
  },
  {
    icon: HeartHandshake,
    titre: "Un lien constant avec l'entreprise",
    texte:
      "Une coordination étroite avec le maître d'apprentissage pour assurer la cohérence du parcours.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* CHIFFRES CLÉS */}
      <StatsSection />

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Pourquoi choisir notre CFA ?"
              title="Un cadre de confiance pour réussir votre alternance"
              description="Nous mettons l'humain, l'exigence et la proximité au cœur de notre approche pédagogique."
            />
          </Reveal>
          <AnimatedSection
            stagger
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {avantages.map((item) => (
              <AnimatedItem key={item.titre}>
                <FeatureCard
                  icon={item.icon}
                  title={item.titre}
                  description={item.texte}
                />
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* NOS ENGAGEMENTS */}
      <section className="border-y border-border bg-secondary/50 py-20 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionTitle
                  eyebrow="Nos engagements"
                  title="Ce sur quoi vous pouvez compter"
                  description="Trois promesses qui guident notre travail au quotidien, auprès des apprentis comme des entreprises."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <AnimatedSection stagger className="grid gap-6 sm:grid-cols-3">
                {engagements.map((item) => (
                  <AnimatedItem key={item.titre}>
                    <FeatureCard
                      icon={item.icon}
                      title={item.titre}
                      description={item.texte}
                      iconVariant="primary"
                    />
                  </AnimatedItem>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT STRUCTURÉ */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Un accompagnement structuré"
              title="Vous n'avancez jamais seul"
              description="De l'entrée en formation jusqu'à l'obtention de votre titre, notre organisation est pensée pour vous sécuriser."
            />
          </Reveal>
          <AnimatedSection stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {etapesAccompagnement.map((item) => (
              <AnimatedItem key={item.titre}>
                <FeatureCard
                  icon={item.icon}
                  title={item.titre}
                  description={item.texte}
                  layout="inline"
                />
              </AnimatedItem>
            ))}
          </AnimatedSection>
          <div className="mt-12 text-center">
            <Button asChild variant="ghost">
              <Link href="/suivi-pedagogique">
                En savoir plus sur le suivi pédagogique
                <ArrowRight
                  className="transition-transform group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
