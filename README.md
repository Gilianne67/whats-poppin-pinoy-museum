# WHAT'S POPPIN', PINOY?

A responsive digital museum on **The Influence of the Past to the Current Patterns in Philippine Popular Culture** (2000–2010, present, and 2030 projections).

## Stack

- React + Vite
- Plain CSS (variables + co-located component styles)
- React Router (client-side SPA)
- No backend / database

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/data/exhibits.js` | Galleries + exhibit copy (edit content here) |
| `src/data/timeline.js` | Timeline milestones |
| `src/data/future.js` | Phase 3 future categories |
| `src/data/references.js` | References + conclusion text |
| `src/components/` | Layout, Nav, Hero, Gallery, ExhibitCard, Modal, Timeline, FutureCategories, Conclusion, References |
| `src/pages/` | Route-level pages |

## Notes

- **2030** exhibit text is labeled as projection / speculative.
- Image areas use clearly labeled placeholders when verified images are unavailable.
- References list real, citable framings without fabricated URLs or DOIs.
