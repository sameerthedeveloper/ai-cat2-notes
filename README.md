# AI CAT-2 notes

Artificial Intelligence Techniques (CSD 3102) revision notes, Modules III and IV. React + Vite.

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
```

## Layout

- `src/data/content.js` – 30 topics with notes and 2/5/13-mark questions
- `src/data/paper.js` – last year's CAT-2 paper (28 Oct 2025) with full answers
- `src/data/videos.js` – Neso Academy lessons (IDs read from Neso's own playlists and checked against YouTube oEmbed)
- `src/engines.js` – pure logic: truth tables, entailment, unification, chaining, goal-stack planner, Wumpus inference, diagrams
- `src/components/` – `Views` (pages), `widgets` (Wumpus world, solvers, videos), `Tutor` (Puter.js AI tutor), `Html` (authored HTML + widget placeholders)
- `public/AI-CAT2-notes.pdf` – offline PDF of the notes
- `legacy/` – the original single-file HTML version

## Videos

Neso Academy has no artificial-intelligence course. Its Discrete Mathematics playlists (propositional logic, first-order logic, rules of inference, resolution) cover four topics here, so only those pages embed videos. The other pages say so instead of linking unrelated lessons.

The AI tutor loads Puter.js from a CDN and needs internet access and a free Puter account.
