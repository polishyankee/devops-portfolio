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

  return (
    <div className="min-h-screen bg-black text-emerald-300 font-mono relative">
      {/* BACKGROUND macOS-terminal vibe */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07]"
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
          <a href="https://github.com/polishyankee" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-emerald-700/50 hover:bg-emerald-600 hover:text-black">GitHub</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="px-4 py-12">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Window title="zsh — intro">
              <h2 className="text-2xl md:text-3xl font-bold">$ echo "Automatyzacja • Bezpieczeństwo • Chmura"</h2>
              <p className="mt-3 text-emerald-300/90">Projektuję niezawodne procesy <strong>CI/CD</strong>, automatyzuję <strong>infrastrukturę</strong> (IaC, GitOps) i dbam o <strong>security</strong>. Kubernetes (OpenShift/Rancher/kubeadm), Azure & OCI, Helm, Argo CD, Azure DevOps & GitLab CI.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-emerald-300/80">
                {[ 'Azure DevOps','GitLab CI','Helm','Argo CD','Kubernetes','OpenShift','Rancher','kubeadm','Docker','Linux','Terraform','Ansible','Trivy','DefectDojo','SonarQube','Semgrep','Azure','OCI','Prometheus','Grafana','Sentry','Vault','Keycloak' ].map(t => (
                  <span key={t} className="rounded-lg border border-emerald-700/40 px-2.5 py-1">{t}</span>
                ))}
              </div>
            </Window>
          </div>
          <div>
            <Window title="links.txt">
            <h3 className="font-semibold">Linki i profile</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>GitHub — <a className="underline" href="https://github.com/polishyankee" target="_blank">polishyankee</a></li>
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
              <p className="text-emerald-300/90">Projekt procesu <strong>CI/CD</strong>, strategie wdrożeń (blue/green, canary), infrastruktura jako kod oraz <strong>GitOps</strong>.</p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Repo layout, branching, code review</li>
                <li>Definicje pipeline’ów, release management</li>
                <li>Backup/DR, SLO/SLA, governance</li>
              </ul>
            </Window>
            <Window title="k8s-platform.md">
              <h3 className="font-semibold">Linux • Docker • Kubernetes</h3>
              <p className="text-emerald-300/90">OpenShift, Rancher, kubeadm — projekt, utrzymanie, hardening, networking, storage, autoscaling, RBAC i polityki.</p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Budowa i wdrożenie klastra</li>
                <li>CI dla kontenerów, rejestry, SBOM</li>
                <li>Observability: Prometheus + Grafana</li>
              </ul>
            </Window>
            <Window title="secure-sdlc.md">
              <h3 className="font-semibold">Security by Design</h3>
              <p className="text-emerald-300/90">Integracja bezpieczeństwa w SDLC: <strong>Trivy</strong>, <strong>DefectDojo</strong>, <strong>SonarQube</strong>, <strong>Semgrep</strong>.</p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>SAST, SCA, IaC scanning</li>
                <li>SBOM, CVE triage, risk scoring</li>
                <li>Security dashboard & alerting</li>
              </ul>
            </Window>
            <Window title="ci-cd.md">
              <h3 className="font-semibold">CI/CD: Azure DevOps & GitLab CI</h3>
              <p className="text-emerald-300/90">Definicje pipeline’ów (YAML), szablony, self‑hosted runners, artefakty, promowanie środowisk.</p>
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
              <p className="text-emerald-300/90">Projekt i automatyzacja w <strong>Azure</strong> i <strong>Oracle Cloud</strong>: identity, sieci, storage, compute, cost‑ops.</p>
              <ul className="mt-3 list-disc list-inside text-emerald-300/80 text-sm">
                <li>Terraform + moduły reusable</li>
                <li>Landing zones, security baseline</li>
                <li>Observability i FinOps</li>
              </ul>
            </Window>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-4 py-12 border-t border-emerald-800/40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">/skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Window title="platforms.sh">
              <h4 className="font-semibold">Platformy i kontenery</h4>
              <ul className="mt-3 space-y-1 text-sm text-emerald-300/90">
                <li>Linux (RHEL/Ubuntu/Debian/Alpine)</li>
                <li>Docker/Podman, BuildKit, SBOM</li>
                <li>Kubernetes: OpenShift, Rancher, kubeadm</li>
                <li>Ingress (NGINX/HAProxy), Service Mesh (Istio/Linkerd)</li>
              </ul>
            </Window>
            <Window title="cicd.sh">
              <h4 className="font-semibold">CI/CD i GitOps</h4>
              <ul className="mt-3 space-y-1 text-sm text-emerald-300/90">
                <li>Azure DevOps (Repos, Pipelines, Artifacts, Releases)</li>
                <li>GitLab (CI/CD, Runners, Registry)</li>
                <li>Helm, Argo CD, Kustomize</li>
                <li>Terraform/Ansible, Packer</li>
              </ul>
            </Window>
            <Window title="security-observability.sh">
              <h4 className="font-semibold">Security & Observability</h4>
              <ul className="mt-3 space-y-1 text-sm text-emerald-300/90">
                <li>Trivy, Semgrep, SonarQube, DefectDojo</li>
                <li>Vault/Key Vault, SealedSecrets, Kyverno/OPA</li>
                <li>Prometheus, Grafana, Loki/Elastic, Alertmanager</li>
                <li>OpenTelemetry, Sentry</li>
              </ul>
            </Window>
          </div>
        </div>
      </section>

      {/* CASE STUDIES with STAR */}
      <section id="cases" className="px-4 py-12 border-t border-emerald-800/40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">/case-studies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Window title="jenkins-to-gitlab.star">
              <h3 className="font-semibold">Migracja z Jenkins do GitLab CI + GitOps</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><strong>Situation:</strong> Rozproszony CI na Jenkinsach, brak standaryzacji, długie czasy release’ów.</li>
                <li><strong>Task:</strong> Ujednolicić CI, dodać <em>CD</em> i włączyć kontrolę jakości/bezpieczeństwa.</li>
                <li><strong>Action:</strong> Przeniosłem joby do <strong>GitLab CI (YAML)</strong>, wprowadziłem <strong>Argo CD</strong> (GitOps), dołożyłem <strong>Trivy</strong> i <strong>SonarQube</strong> jako quality gates; artefakty i wersjonowanie build‑once.</li>
                <li><strong>Result:</strong> −40% czasu do wdrożenia, 100% powtarzalności pipeline’ów, zero ręcznych kroków; defekty bezpieczeństwa wykrywane <em>przed</em> wdrożeniem.</li>
              </ul>
            </Window>
            <Window title="aws-to-oci.star">
              <h3 className="font-semibold">Migracja systemu bankowego: AWS → OCI</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><strong>Situation:</strong> Rozproszona infrastruktura w AWS, wysokie koszty i brak spójnego IaC.</li>
                <li><strong>Task:</strong> Przenieść workloady do <strong>OCI</strong> z pełną automatyzacją i standaryzacją.</li>
                <li><strong>Action:</strong> Zaprojektowałem <strong>Terraform</strong> (Compartment, IAM, sieci, K8s), wdrożyłem aplikacje przez <strong>Helm</strong> i <strong>Argo CD</strong>; polityki bezpieczeństwa i obserwowalność out‑of‑the‑box.</li>
                <li><strong>Result:</strong> Skrócenie czasu przygotowania środowiska z tygodni do godzin; przewidywalne koszty i łatwy DR; uproszczony on‑boarding zespołów.</li>
              </ul>
            </Window>
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
                <li>💼 <a className="underline" href="https://github.com/polishyankee" target="_blank">github.com/polishyankee</a></li>
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
