/**
 * Liste des formations proposées par le CFA.
 * 👉 Pour ajouter / modifier une formation, éditez simplement ce fichier.
 *    Aucune autre partie du code n'a besoin d'être touchée.
 */

export type Modalite = "Présentiel" | "Distanciel" | "Mixte";

export interface Formation {
  /** Identifiant utilisé dans les URL et les menus déroulants (slug). */
  slug: string;
  /** Intitulé complet de la formation. */
  titre: string;
  /** Intitulé court (cartes, listes). */
  titreCourt: string;
  /** Code RNCP officiel (France Compétences). */
  rncp: string;
  /** Niveau de qualification (3, 4, 5...). */
  niveau: string;
  /** Durée indicative de la formation. */
  duree: string;
  /** Modalité pédagogique. */
  modalite: Modalite;
  /** Description courte affichée en haut de la carte. */
  resume: string;
  /** Objectifs visés par la formation. */
  objectifs: string[];
  /** Débouchés / métiers visés. */
  debouches: string[];
  
}

export const formations: Formation[] = [
  {
    slug: "responsable-petite-moyenne-structure",
    titre: "Titre Professionnel Responsable de petite ou moyenne structure",
    titreCourt: "Responsable de petite ou moyenne structure",
    rncp: "RNCP38575",
    niveau: "Niveau 5 (Bac +2)",
    duree: "12 mois en alternance",
    modalite: "Mixte",
    resume:
      "Pilotez l'activité d'une structure : gestion, animation d'équipe et développement commercial au service d'un projet.",
    objectifs: [
      "Piloter l'activité opérationnelle d'une petite ou moyenne structure",
      "Animer et encadrer une équipe au quotidien",
      "Gérer les aspects administratifs, budgétaires et commerciaux",
      "Contribuer au développement de la structure",
    ],
    debouches: [
      "Responsable de structure",
      "Responsable d'agence ou de centre de profit",
      "Adjoint(e) de direction",
      "Responsable d'unité opérationnelle",
    ],
  },
  {
    slug: "negociateur-technico-commercial",
    titre: "Titre Professionnel Négociateur technico-commercial",
    titreCourt: "Négociateur technico-commercial",
    rncp: "RNCP39063",
    niveau: "Niveau 5 (Bac +2)",
    duree: "12 mois en alternance",
    modalite: "Mixte",
    resume:
      "Développez un portefeuille clients et menez des négociations commerciales à forte dimension technique.",
    objectifs: [
      "Prospecter et développer un portefeuille de clients",
      "Conseiller le client et élaborer une proposition technique adaptée",
      "Négocier et conclure une vente",
      "Assurer le suivi et la fidélisation de la clientèle",
    ],
    debouches: [
      "Négociateur technico-commercial",
      "Commercial(e) B to B",
      "Chargé(e) d'affaires",
      "Technico-commercial sédentaire ou itinérant",
    ],
  },
  {
    slug: "assistant-de-direction",
    titre: "Titre Professionnel Assistant de direction",
    titreCourt: "Assistant de direction",
    rncp: "RNCP34143",
    niveau: "Niveau 5 (Bac +2)",
    duree: "12 mois en alternance",
    modalite: "Mixte",
    resume:
      "Devenez le bras droit d'une direction : organisation, communication et coordination des activités.",
    objectifs: [
      "Assister une direction dans la gestion de ses activités",
      "Organiser et coordonner l'information et les agendas",
      "Concevoir des documents professionnels et des supports de communication",
      "Contribuer au suivi administratif de dossiers et de projets",
    ],
    debouches: [
      "Assistant(e) de direction",
      "Assistant(e) de manager",
      "Office manager",
      "Secrétaire de direction",
    ],
  },
  {
    slug: "employe-polyvalent-restauration",
    titre: "Titre Professionnel Employé polyvalent en restauration",
    titreCourt: "Employé polyvalent en restauration",
    rncp: "RNCP38663",
    niveau: "Niveau 3 (CAP)",
    duree: "12 mois en alternance",
    modalite: "Présentiel",
    resume:
      "Maîtrisez les gestes de la restauration : production, service et hygiène au sein d'un établissement.",
    objectifs: [
      "Réaliser une production culinaire simple en respectant les règles d'hygiène",
      "Assurer le service et l'accueil de la clientèle",
      "Participer à la mise en place et au nettoyage des espaces",
      "Appliquer les règles d'hygiène et de sécurité (HACCP)",
    ],
    debouches: [
      "Employé(e) polyvalent(e) de restauration",
      "Agent de restauration",
      "Équipier(ère) en restauration rapide",
      "Commis de cuisine ou de salle",
    ],
  },
];

/** Récupère une formation par son slug. */
export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}
