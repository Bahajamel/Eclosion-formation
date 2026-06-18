/**
 * Configuration centrale du site.
 * 👉 C'est ICI que vous personnalisez le nom du CFA, les coordonnées,
 *    les horaires et les liens. Tout le site lit ces valeurs.
 */
export const siteConfig = {
  name: "Eclosyon Formation",
  shortName: "Eclosyon",
  baseline: "Centre de Formation d'Apprentis",
  description:
    "Eclosyon Formation accompagne les apprentis et les entreprises vers la réussite : titres professionnels en apprentissage, suivi pédagogique structuré et accompagnement humain.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eclosyon-formation.fr",

  // Coordonnées — À PERSONNALISER
  contact: {
    address: {
      line1: "102-104 rue Gabriel Péri",
      postalCode: "94250",
      city: "Gentilly",
      country: "France",
    },
    email: "contact@eclosyon-formation.fr",
    phone: "06 17 42 72 49",
    phoneHref: "+33617427249",
  },

  // Horaires d'ouverture — À PERSONNALISER
  hours: [
    { days: "Lundi – Vendredi", time: "9h00 – 12h30 · 13h30 – 17h30" },
    { days: "Samedi", time: "Sur rendez-vous" },
    { days: "Dimanche", time: "Fermé" },
  ],

  // Référent handicap — À PERSONNALISER
  referentHandicap: {
    name: "Mme. Référent Handicap",
    email: "referent-handicap@eclosyon-formation.fr",
    phone: "06 17 42 72 49",
    phoneHref: "+33617427249",
  },

  // Réseaux sociaux (optionnel) — laissez vide pour masquer
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
} as const;

/** Navigation principale du site. */
export const mainNav = [
  { title: "Accueil", href: "/" },
  { title: "Nos formations", href: "/formations" },
  { title: "Apprentissage", href: "/apprentissage" },
  { title: "Suivi pédagogique", href: "/suivi-pedagogique" },
  { title: "Accessibilité", href: "/accessibilite-handicap" },
  { title: "Contact", href: "/contact" },
] as const;

/** Liens présents dans le pied de page. */
export const footerNav = {
  formation: [
    { title: "Nos formations", href: "/formations" },
    { title: "L'apprentissage", href: "/apprentissage" },
    { title: "Suivi pédagogique", href: "/suivi-pedagogique" },
    { title: "Candidater", href: "/candidater" },
  ],
  cfa: [
    { title: "Accessibilité handicap", href: "/accessibilite-handicap" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
} as const;
