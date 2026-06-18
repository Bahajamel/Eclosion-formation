# Eclosion Formation — Site vitrine

Site vitrine institutionnel pour le CFA **Eclosion Formation**, construit avec Next.js (App Router), TypeScript, Tailwind CSS, des composants de type shadcn/ui, des icônes Lucide et de légères animations Framer Motion.

## 🚀 Démarrer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. (Optionnel) créer un fichier d'environnement
cp .env.example .env.local

# 3. Lancer le serveur de développement
npm run dev
```

Le site est alors accessible sur http://localhost:3000.

### Autres commandes

```bash
npm run build   # build de production
npm run start   # lancer le build de production
npm run lint    # vérifier le code
```

## 📁 Structure des fichiers

```
eclosion-formation/
├─ app/
│  ├─ layout.tsx                     # Layout global (header, footer, SEO, police)
│  ├─ page.tsx                       # Accueil
│  ├─ globals.css                    # Styles + thème (couleurs)
│  ├─ not-found.tsx                  # Page 404
│  ├─ sitemap.ts / robots.ts         # SEO
│  ├─ formations/page.tsx
│  ├─ apprentissage/page.tsx
│  ├─ suivi-pedagogique/page.tsx
│  ├─ accessibilite-handicap/page.tsx
│  ├─ candidater/page.tsx
│  ├─ contact/page.tsx
│  └─ politique-confidentialite/page.tsx
├─ components/
│  ├─ Header.tsx                     # En-tête fixe + menu mobile
│  ├─ Footer.tsx                     # Pied de page complet
│  ├─ Logo.tsx
│  ├─ SectionTitle.tsx               # Titres de section réutilisables
│  ├─ PageHeader.tsx                 # Bandeau d'en-tête des pages internes
│  ├─ CtaSection.tsx                 # Bandeau d'appel à l'action
│  ├─ FormationCard.tsx              # Carte de formation
│  ├─ CandidatureForm.tsx            # Formulaire de candidature
│  ├─ ContactForm.tsx                # Formulaire de contact
│  ├─ Reveal.tsx                     # Animation d'apparition (Framer Motion)
│  └─ ui/                            # Primitives (button, card, input, select…)
├─ lib/
│  ├─ site.ts                        # ⭐ Configuration centrale (nom, coordonnées, nav)
│  └─ utils.ts
└─ src/
   └─ data/
      └─ formations.ts               # ⭐ Liste des formations (facile à modifier)
```

## ✏️ Ce que vous devez personnaliser

| Élément | Où le modifier |
|---|---|
| **Nom du CFA, baseline, description** | `lib/site.ts` |
| **Adresse, email, téléphone, horaires** | `lib/site.ts` |
| **Référent handicap** | `lib/site.ts` |
| **Réseaux sociaux** | `lib/site.ts` |
| **Logo** | `components/Logo.tsx` (remplacer l'icône par une image `/public/logo.svg`) |
| **Couleurs (bleu foncé, accent…)** | `app/globals.css` (variables `--primary`, `--accent`, etc.) |
| **Formations (RNCP, niveau, durée…)** | `src/data/formations.ts` |
| **Politique de confidentialité** | `app/politique-confidentialite/` |
| **URL du site (SEO)** | `.env.local` → `NEXT_PUBLIC_SITE_URL` |

## 🔌 Brancher les formulaires plus tard

Les formulaires de **candidature** et de **contact** sont fonctionnels côté
interface mais simulent l'envoi. Pour les connecter à une API ou un service
email, ouvrez `components/CandidatureForm.tsx` et `components/ContactForm.tsx` :
le code à activer (appel `fetch` vers `/api/...`) est déjà présent en commentaire.

## ♿ Accessibilité & SEO

- Métadonnées (titres, descriptions, Open Graph) sur chaque page.
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Lien d'évitement, focus visibles, labels de formulaires, contrastes soignés.
- Site 100 % responsive (mobile, tablette, desktop).
