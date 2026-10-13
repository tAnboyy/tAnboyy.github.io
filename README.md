# Thanmay's portfolio

A responsive, dependency-free portfolio with original CSS/SVG project illustrations, filterable projects, accessible project dialogs, and an interactive Spotter-inspired workout decision.

## Preview

```sh
npm run dev
```

Open http://127.0.0.1:4173. Python 3 is needed only for the preview server. The site itself is static: serve the `dist/` directory with any static host.

```sh
npm run check
```

## Fill in the placeholders

Edit `dist/content.js`. Replace `null` with a quoted value for email, GitHub, LinkedIn, résumé URL, location, education, and each project's role, dates, outcome, repository, and demo. A local résumé can be placed in `dist/` and referenced as `./resume.pdf`.

The contact, résumé, and social controls show an honest placeholder message until configured. Project links remain visibly labeled placeholders until configured. Project story fields are centralized in the same file; homepage editorial copy is in `dist/index.html`.

## Content notes

Project descriptions for UREC Live, Spotter, ClubALL, and gym scheduling experiments are drafted from earlier conversations, not a fresh audit of implementation or deployment. CampusNav was added after inspecting the local source in `/Users/das/campusnav`, including the mobile map/directory screens, tenant and data services, backend README, and mobile/admin package manifests. Its live operation and deployment were not tested. Exact roles, project dates, adoption, measurable results, education, and external URLs remain placeholders. Illustrations are labeled concepts, not real product screenshots. The interactive flow is an illustrative client-side example with no live equipment data.

## Files

- `dist/index.html`: page structure and homepage text
- `dist/styles.css`: design and responsive layouts
- `dist/app.js`: interaction and accessibility behavior
- `dist/content.js`: project stories and personal details
- `DESIGN.md`: visual direction and rationale

No analytics, accounts, external font requests, or build dependencies. No deployment or source push has been performed.

Reflections was added as a distinct project after inspecting `/Users/das/RA/reflections-app`: its README, React student flows, LangGraph message graph and PostgreSQL checkpointer, and sentence-transformer recommendation service. The portfolio describes the source implementation, not verified live model quality or educational outcomes. Its illustrated conversation is fictional and contains no student records.

Hour Tracker was added after reading `/Users/das/hour-tracker-app` documentation, package manifest, SQLite setup, notification event handler, sync service, and dashboard code. The entry describes the Android-first implementation; notification delivery, live Supabase sync, and store availability were not tested. The example activity log is fictional.

Cinnamon was added from `/Users/das/cinnamon_root` after inspecting the workspace architecture, customer app dependencies, catering screen, menu/meal-plan/order-history flows, and checkout integration. The supplied GitHub link identifies the customer-app repository. Live payment completion and deployment were not tested; the portfolio illustration contains no live orders or prices.
