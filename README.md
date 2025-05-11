# LT Wiki

Dit is de officiële documentatie website voor Lowlands Tactical, gebouwd met [VitePress](https://vitepress.dev/).

## 🚀 Snel Starten

### Vereisten

- Node.js 18 of hoger
- npm (komt met Node.js)

### Lokale Ontwikkeling

1. Clone de repository:
```bash
git clone https://github.com/yourusername/lt-wiki.git
cd lt-wiki
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de ontwikkelserver:
```bash
npm run docs:dev
```

4. Open je browser en ga naar `http://localhost:5173`

### Bouwen voor Productie

Om de site voor productie te bouwen:

```bash
npm run docs:build
```

De gebouwde bestanden zullen in de `dist` map staan.

## 📝 Bijdragen

### Nieuwe Content Toevoegen

1. Maak een nieuw markdown bestand aan in de juiste map onder `docs/`:
   - `docs/algemene-informatie/` voor algemene informatie
   - `docs/tactische-syllabus/` voor tactische syllabus
   - `docs/specialisaties/` voor specialisaties
   - `docs/missiemakers/` voor missie maker handleidingen

2. Voeg de nieuwe pagina toe aan de navigatie in `docs/.vitepress/config.ts`:
   - Voeg toe aan de `nav` array voor top navigatie
   - Voeg toe aan de `sidebar` array voor zijbalk navigatie

### Bestandsstructuur

```
docs/
├── .vitepress/
│   ├── config.ts    # Site configuratie
│   └── theme/       # Aangepast thema (indien aanwezig)
├── public/          # Statische bestanden
├── algemene-informatie/
├── tactische-syllabus/
├── specialisaties/
└── missiemakers/
```

### Markdown Richtlijnen

1. **Frontmatter**: Elk markdown bestand moet beginnen met:
```markdown
---
layout: doc
title: Jouw Pagina Titel
---
```

2. **Afbeeldingen**: Plaats afbeeldingen in de `docs/public` map en verwijs ernaar met absolute paden:
```markdown
![Alt tekst](/pad/naar/afbeelding.png)
```

3. **Links**: Gebruik relatieve paden voor interne links:
```markdown
[Link tekst](/pad/naar/pagina)
```

### Pull Request Proces

1. Maak een nieuwe branch aan voor je wijzigingen
2. Maak je wijzigingen
3. Test lokaal met `npm run docs:dev`
4. Dien een pull request in
5. Wacht op review en goedkeuring

## 🛠️ Technische Details

- Gebouwd met VitePress 1.0.0
- Gebruikt Node.js 18+
- Automatisch gedeployed naar GitHub Pages

## 📄 Licentie

Dit project is gelicenseerd onder de MIT Licentie - zie het LICENSE bestand voor details. 