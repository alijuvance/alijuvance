# Portfolio - Senior Fullstack Developer

Un portfolio premium one-page pour développeur senior, construit avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Mode Sombre**: Automatique + toggle manuel

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx      # Layout avec SEO
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/         # Composants React
└── data/              # Données (projets, expériences, témoignages)
```

## 🛠️ Commandes

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Démarrer production
npm run start
```

## ✏️ Personnalisation

1. **Photo**: Remplacez le placeholder dans `src/components/Hero.tsx`
2. **Projets**: Modifiez `src/data/projects.ts`
3. **Expériences**: Modifiez `src/data/experiences.ts`
4. **Témoignages**: Modifiez `src/data/testimonials.ts`
5. **Liens sociaux**: Mettez à jour dans `src/components/Footer.tsx`
6. **CV**: Ajoutez votre PDF dans `/public/cv.pdf`

## 🎨 Design

- Style Swiss Design / International Typographic Style
- Palette: Noir, Blanc, Gris ardoise, Bleu profond
- Police: Inter (chargée via next/font)
- Responsive: Mobile, Tablet, Desktop

## 📊 Performance

Optimisé pour atteindre un score Lighthouse de 100:
- HTML sémantique
- Accessibilité (ARIA)
- SEO optimisé
- Images optimisées

## 📄 Licence

MIT
