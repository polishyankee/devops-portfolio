import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DevOpsPortfolio() {
  const Window = ({ title, children }) => (
    <div className="rounded-2xl border border-emerald-700/40 bg-black/60 shadow-[0_0_0_1px_rgba(16,185,129,0.15)] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-emerald-700/30 px-4 py-2 bg-gradient-to-b from-emerald-900/20 to-transparent">
        <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
        <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        <span className="ml-3 text-xs text-emerald-300/80">{title}</span>
      </div>
      <div className="p-5 text-emerald-200">{children}</div>
    </div>
  );

  // Komponent pojedynczego case study z akordeonem + animacją
  const CaseStudy = ({ windowTitle, title, intro, star, open, onToggle }) => {
    return (
      <Window title={windowTitle}>
        <button
          type="button"
          onClick={onToggle}
          className="w-full text-left"
          aria-expanded={open}
          aria-controls={`${windowTitle}-content`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg border border-emerald-700/40 text-emerald-300/80 hover:bg-emerald-600 hover:text-black transition">
              {open ? <Minus size={14} aria-hidden /> : <Plus size={14} aria-hidden />}
              <span className="sr-only">{open ? 'ukryj' : 'pokaż'}</span>
              <span aria-hidden>{open ? 'ukryj' : 'pokaż'}</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-emerald-300/90">{intro}</p>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`${windowTitle}-content`}
              key={`${windowTitle}-content`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
              className="mt-4"
            >
              <ul className="space-y-2 text-sm">
                <li><strong>Situation:</strong> {star.situation}</li>
                <li><strong>Task:</strong> {star.task}</li>
                <li><strong>Action:</strong> {star.action}</li>
                <li><strong>Result:</strong> {star.result}</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Window>
    );
  };

  // Dane case studies (w tym trzy nowe)
  const cases = [
    {
      windowTitle: 'jenkins-to-gitlab.star',
      title: 'Migracja z Jenkins do GitLab CI + GitOps',
      intro: 'Standaryzacja CI/CD i wdrożenie GitOps, aby skrócić time‑to‑prod i poprawić jakość.',
      star: {
        situation:
          'Rozproszony CI na Jenkinsach, brak standaryzacji pipeline’ów i długie czasy release’ów.',
        task:
          'Ujednolicić CI, dołożyć CD oraz kontrolę jakości i bezpieczeństwa w procesie.',
        action:
          'Przeniosłem joby do GitLab CI (YAML + szablony), uruchomiłem Argo CD (GitOps), dodałem Trivy i SonarQube jako quality gates; artefakty i build‑once, promotion przez środowiska.',
        result:
          '≈40% krótszy czas wdrożenia, 100% powtarzalności pipeline’ów, 0 ręcznych kroków; defekty bezpieczeństwa wychwytywane przed wdrożeniem.'
      }
    },
    {
      windowTitle: 'aws-to-oci.star',
      title: 'Migracja systemu bankowego: AWS → OCI',
      intro: 'Pełna automatyzacja infrastruktury i wdrożeń przy przewidywalnych kosztach i prostym DR.',
      star: {
        situation:
          'Rozproszona infrastruktura w AWS, wysokie koszty i brak spójnego IaC.',
        task:
          'Przenieść workloady do OCI z kompletną automatyzacją, standardami bezpieczeństwa i obserwowalnością.',
        action:
          'Zaprojektowałem Terraform (compartments, IAM, sieci, K8s), wdrożyłem aplikacje przez Helm + Argo CD; polityki bezpieczeństwa i monitoring (Prometheus, Grafana, Alerting) out‑of‑the‑box.',
        result:
          'Czas przygotowania środowiska z tygodni do godzin; przewidywalne koszty i uproszczony DR; szybszy onboarding zespołów.'
      }
    },
    {
      windowTitle: 'multi-region-k8gb.star',
      title: 'Multi‑Region K8s (HA) z K8GB i DR',
      intro: 'Projekt HA w dwóch regionach z globalnym load‑balancingiem i trybem DR/Failover.',
      star: {
        situation:
          'Aplikacja krytyczna wymaga wysokiej dostępności (RTO/RPO minutowe), pojedynczy region to ryzyko.',
        task:
          'Zaprojektować i wdrożyć multi‑region K8s z GSLB oraz sprawdzonym runbookiem DR.',
        action:
          'Dwa klastry (np. Rancher/Openshift) w osobnych regionach; K8GB + external‑dns do globalnego traffic steering (Geo/Failover), krótkie TTL. Dane na usługach zarządzanych (replikacja między regionami), obiekty w multi‑region storage; Argo CD ApplicationSets do syncu; backup/restore Velero i testy DR; runbook i dashboardy SLO.',
        result:
          'Automatyczny failover w minutach, RPO bliskie 0 dla danych synchronicznych; kwartalne testy DR, spełnione SLO dostępności.'
      }
    },
    {
      windowTitle: 'security-scanning-gates.star',
      title: 'Security Scanning w pipeline’ach + Quality Gate',
      intro: 'SAST, SCA, DAST i IaC scanning z centralną widocznością i twardymi bramkami jakości.',
      star: {
        situation:
          'Brak spójnego procesu bezpieczeństwa w CI/CD, rozproszone wyniki i nieprzewidywalna jakość release’ów.',
        task:
          'Zintegrować skanowanie bezpieczeństwa i jakość kodu z bramkami dla release’ów oraz raportowaniem dla compliance.',
        action:
          'Semgrep (SAST) + Trivy (SCA/Images/IaC) + OWASP ZAP (DAST), generowanie SBOM (CycloneDX), agregacja w DefectDojo; progi severities jako quality gate, auto‑ticketing, triage false‑positives, dashboardy; polityki w Argo CD/Kyverno.',
        result:
          'Brak krytycznych podatności w produkcji, krótszy MTTD/MTTR dla incydentów, pełna audytowalność i raporty dla compliance.'
      }
    },
    {
      windowTitle: 'ado-cross-tenant-aks.star',
      title: 'Azure DevOps → AKS w innym tenantcie (cross‑tenant)',
      intro: 'Bezpieczne wdrożenia kontenerów do zasobów w obcym tenantcie bez sekretów długoterminowych.',
      star: {
        situation:
          'Repozytoria i pipeline’y w ADO (Tenant A), docelowy AKS/ACR w Azure (Tenant B). Potrzebny trust bez PAT/secretów.',
        task:
          'Skonfigurować cross‑tenant deployments zgodne z politykami bezpieczeństwa i least‑privilege.',
        action:
          'Entra ID: rejestracja aplikacji w Tenant B + federated credentials (OIDC) z Azure DevOps; Service Connection oparta o Workload Identity Federation; RBAC na AKS/ACR (pull/push, deploy przez Helm/Argo CD), image provenance; policy as code (OPA/Kyverno), logowanie do Key Vault bez sekretów stałych.',
        result:
          'Stabilne i audytowalne wdrożenia między tenantami, brak long‑lived secrets, zgodność z wymaganiami bezpieczeństwa.'
      }
    }
  ];

  // Akordeon: tylko jeden otwarty na raz
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey((curr) => (curr === key ? null : key));

  // Karuzela
  const carouselRef = useRef(null);
  const scrollCarousel = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-emerald-300 font-mono relative">
      {/* BACKGROUND macOS-terminal vibe */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#064e3b_0%,transparent_60%)] opacity-40" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-emerald-800/40 backdrop-blur bg-black/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-1 rounded-full border border-emerald-800/50 text-emerald-300/80">$ open_to_work</span>
            <h1 className="text-lg md:text-xl font-bold">Kamil Stasica — DevOps Engineer</h1>
          </div>
          <a
            href="https://github.com/polishyankee"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-emerald-700/50 hover:bg-emerald-600 hover:text-black"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="px-4 py-12">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Window title="zsh — intro">
              <h2 className="text-2xl md:text-3xl font-bold">$ echo "Automatyzacja • Bezpieczeństwo • Chmura"</h2>
              <p className="mt-3 text-emerald-300/90">
                Projektuję niezawodne procesy <strong>CI/CD</strong>, automatyzuję <strong>infrastrukturę</strong> (IaC, GitOps) i dbam o <strong>security</strong>. Kubernetes (OpenShift/Rancher/kubeadm), Azure & OCI, Helm, Argo CD, Azure DevOps & GitLab CI.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-emerald-300/80">
                {[
                  'Azure DevOps',
                  'GitLab CI',
                  'Helm',
                  'Argo CD',
                  'Kubernetes',
                  'OpenShift',
                  'Rancher',
                  'kubeadm',
                  'Docker',
                  'Linux',
                  'Terraform',
                  'Ansible',
                  'Trivy',
                  'DefectDojo',
                  'SonarQube',
                  'Semgrep',
                  'Azure',
                  'OCI',
                  'Prometheus',
                  'Grafana',
                  'Sentry',
                  'Vault',
                  'Keycloak'
                ].map((t) => (
                  <span key={t} className="rounded-lg border border-emerald-700/40 px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </Window>
          </div>
          <div>
            <Window title="links.txt">
              <h3 className="font-semibold">Linki i profile</h3>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  GitHub —{' '}
                  <a className="underline" href="https://github.com/polishyankee" target="_blank" rel="noreferrer">
                    polishyankee
                  </a>
                </li>
                <li>Klucze/secret mgmt — Vault / Key Vault</li>
                <li>Stack obserwowalności — Prometheus, Grafana, Elastic, Sentry</li>
              </ul>
            </Window>
          </div>
        </div>
      </section>

      {/* EXPERIENCE (was Services) */}
      <section id="experience" className="px-4 py-12 border-t border-emerald-800/40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">/experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Window title="devops-architecture.md">
              <h3 className="font-semibold">Architektura DevOps</h3>
              <p className="text-emerald-300/90">
                Projekt procesu <strong>CI/CD</strong>, strategie wdrożeń (blue/green, canary), infrastruktura jako kod oraz <strong>GitOps</strong>.
              </p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Repo layout, branching, code review</li>
                <li>Definicje pipeline’ów, release management</li>
                <li>Backup/DR, SLO/SLA, governance</li>
              </ul>
            </Window>
            <Window title="k8s-platform.md">
              <h3 className="font-semibold">Linux • Docker • Kubernetes</h3>
              <p className="text-emerald-300/90">
                OpenShift, Rancher, kubeadm — projekt, utrzymanie, hardening, networking, storage, autoscaling, RBAC i polityki.
              </p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Budowa i wdrożenie klastra</li>
                <li>CI dla kontenerów, rejestry, SBOM</li>
                <li>Observability: Prometheus + Grafana</li>
              </ul>
            </Window>
            <Window title="secure-sdlc.md">
              <h3 className="font-semibold">Security by Design</h3>
              <p className="text-emerald-300/90">
                Integracja bezpieczeństwa w SDLC: <strong>Trivy</strong>, <strong>DefectDojo</strong>, <strong>SonarQube</strong>, <strong>Semgrep</strong>.
              </p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>SAST, SCA, IaC scanning</li>
                <li>SBOM, CVE triage, risk scoring</li>
                <li>Security dashboard & alerting</li>
              </ul>
            </Window>
            <Window title="ci-cd.md">
              <h3 className="font-semibold">CI/CD: Azure DevOps & GitLab CI</h3>
              <p className="text-emerald-300/90">
                Definicje pipeline’ów (YAML), szablony, self‑hosted runners, artefakty, promowanie środowisk.
              </p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Multi‑stage, approvals, gates</li>
                <li>Secret management (Vault, Key Vault)</li>
                <li>Build‑once, deploy‑many</li>
              </ul>
            </Window>
            <Window title="gitops.md">
              <h3 className="font-semibold">Helm & Argo CD (GitOps)</h3>
              <p className="text-emerald-300/90">Deklaratywne środowiska, standaryzacja wdrożeń, rollbacki, promotion flows oraz DR.</p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Repo chartów + wersjonowanie</li>
                <li>ApplicationSets, progressive delivery</li>
                <li>Policy as Code (OPA/Gatekeeper)</li>
              </ul>
            </Window>
            <Window title="cloud.md">
              <h3 className="font-semibold">Chmura: Azure i OCI</h3>
              <p className="text-emerald-300/90">
                Projekt i automatyzacja w <strong>Azure</strong> i <strong>Oracle Cloud</strong>: identity, sieci, storage, compute, cost‑ops.
              </p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Terraform + moduły reusable</li>
                <li>Landing zones, security baseline</li>
                <li>Observability i FinOps</li>
              </ul>
            </Window>
          </div>
        </div>
      </section>

      {/* CASE STUDIES – karuzela z akordeonem (1 karta na większości ekranów, 2 mniejsze na XL) */}
      <section id="cases" className="px-4 py-12 border-t border-emerald-800/40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">/case-studies</h2>

          {/* Układ: strzałki poza scrollerem, nie nachodzą na karty */}
          <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3">
            <button
              type="button"
              className="rounded-xl border border-emerald-700/40 bg-black/60 backdrop-blur px-3 py-2 hover:bg-emerald-600 hover:text-black"
              onClick={() => scrollCarousel(-1)}
              aria-label="Poprzedni"
            >
              <ChevronLeft size={18} />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-4 pr-4"
              role="region"
              aria-roledescription="carousel"
              aria-label="Karuzela case studies"
            >
              {cases.map((cs) => (
                <div
                  key={cs.windowTitle}
                  className="snap-start shrink-0 basis-[96%] sm:basis-[88%] md:basis-[80%] xl:basis-[48%]"
                >
                  <CaseStudy
                    {...cs}
                    open={openKey === cs.windowTitle}
                    onToggle={() => toggle(cs.windowTitle)}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="rounded-xl border border-emerald-700/40 bg-black/60 backdrop-blur px-3 py-2 hover:bg-emerald-600 hover:text-black"
              onClick={() => scrollCarousel(1)}
              aria-label="Następny"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 py-12 border-t border-emerald-800/40">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          <Window title="contact.form">
            <h2 className="text-xl md:text-2xl font-bold">/contact</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-4 grid gap-3 max-w-lg">
              <input name="name" placeholder="Imię i nazwisko" className="bg-black/70 border border-emerald-800/50 p-3 rounded" required />
              <input type="email" name="email" placeholder="Adres e‑mail" className="bg-black/70 border border-emerald-800/50 p-3 rounded" required />
              <textarea name="message" rows={5} placeholder="Wiadomość" className="bg-black/70 border border-emerald-800/50 p-3 rounded" required />
              <button type="submit" className="bg-emerald-600 text-black font-bold py-2.5 rounded hover:bg-emerald-500">Wyślij</button>
            </form>
          </Window>
          <div>
            <Window title="contact.sh">
              <p className="text-sm">Szukasz pomocy w migracji do GitOps, standaryzacji CI/CD albo hardeningu K8s? Napisz:</p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>📮 <span className="opacity-80">email@twojadomena.pl</span></li>
                <li>
                  💼{' '}
                  <a className="underline" href="https://github.com/polishyankee" target="_blank" rel="noreferrer">
                    github.com/polishyankee
                  </a>
                </li>
              </ul>
              <a href="#contact" className="mt-4 inline-block rounded-xl bg-emerald-600 text-black px-4 py-2 font-semibold hover:bg-emerald-500">Skontaktuj się</a>
            </Window>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-6 border-t border-emerald-800/40 text-emerald-400/80 text-xs">
        <div className="mx-auto max-w-6xl">© {new Date().getFullYear()} Kamil Stasica — DevOps Engineer • Built with React + Tailwind</div>
      </footer>
    </div>
  );
}
