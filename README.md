# DevOps Portfolio — Kamil Stasica

Terminalowy one‑pager (React + Vite + Tailwind) z sekcjami: Usługi, Technologie, Case Studies, Kontakt.

## Szybki start (lokalnie)
```bash
npm install
npm run dev
```

## Deploy na GitHub Pages (Actions)
1. Utwórz repozytorium, np. **polishyankee/devops-portfolio**.
2. W pliku `vite.config.js` upewnij się, że `base` = `/devops-portfolio/` (zmień jeśli nazwa repo inna).
3. Włącz Pages: Settings → Pages → Source: **GitHub Actions**.
4. Wypchnij kod na gałąź `main`. Workflow zbuduje i wdroży stronę automatycznie.

Adres strony: `https://<twoj-login>.github.io/<nazwa-repo>/`
