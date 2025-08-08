export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-green-700 bg-black px-4 py-4">
        <div className="mx-auto max-w-6xl flex justify-between items-center">
          <h1 className="text-xl font-bold">Kamil Stasica — DevOps Engineer</h1>
          <a href="https://github.com/polishyankee" target="_blank" rel="noopener noreferrer" className="border border-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-black">
            GitHub
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="px-4 py-12">
        <h2 className="text-3xl font-bold">$ echo "Automatyzacja, bezpieczeństwo i chmura w jednym pipeline"</h2>
        <p className="mt-4 text-green-300">
          DevOps Engineer specjalizujący się w CI/CD, Kubernetes, chmurze i Security. Projektuję niezawodne procesy wdrożeń i infrastrukturę.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 py-12 border-t border-green-700">
        <h2 className="text-2xl font-bold">Usługi</h2>
        <div className="mt-6 space-y-6">
          {/* Architektura DevOps */}
          <div>
            <h3 className="font-semibold">Architektura DevOps</h3>
            <p className="text-green-300">Kompletny projekt procesu CI/CD, strategii wdrożeń (blue/green, canary), infrastruktury jako kod i GitOps.</p>
            <ul className="mt-2 list-disc list-inside text-green-300">
              <li>Projekt repozytoriów, branching, code review</li>
              <li>Definicje pipeline’ów, strategie release’ów</li>
              <li>Backup/DR, SLO/SLA, governance</li>
            </ul>
          </div>
          {/* Linux/Docker/Kubernetes */}
          <div>
            <h3 className="font-semibold">Linux • Docker • Kubernetes</h3>
            <p className="text-green-300">Zarządzanie klastrami: OpenShift, Rancher, kubeadm. Hardening, networking, storage i observability.</p>
            <ul className="mt-2 list-disc list-inside text-green-300">
              <li>Projekt i wdrożenie klastra</li>
              <li>CI dla kontenerów, rejestry, SBOM</li>
              <li>Monitoring: Prometheus + Grafana</li>
            </ul>
          </div>
          {/* Security by design */}
          <div>
            <h3 className="font-semibold">Security by Design</h3>
            <p className="text-green-300">Shift-left security, skanowanie i monitoring: Trivy, DefectDojo, SonarQube, Semgrep.</p>
            <ul className="mt-2 list-disc list-inside text-green-300">
              <li>SAST, SCA, IaC scanning</li>
              <li>SBOM, CVE triage, risk scoring</li>
              <li>Security Dashboard i alerting</li>
            </ul>
          </div>
          {/* CI/CD w Azure DevOps i GitLab CI */}
          <div>
            <h3 className="font-semibold">CI/CD: Azure DevOps & GitLab CI</h3>
            <p className="text-green-300">Tworzenie i utrzymanie pipeline’ów, YAML-owych szablonów, runnerów, cache, artefaktów i promowania środowisk.</p>
            <ul className="mt-2 list-disc list-inside text-green-300">
              <li>Multi-stage pipelines, approvals, gates</li>
              <li>Secret management (Vault, Key Vault)</li>
              <li>Build-once, deploy-many</li>
            </ul>
          </div>
          {/* Helm & Argo CD */}
          <div>
            <h3 className="font-semibold">Helm & Argo CD (GitOps)</h3>
            <p className="text-green-300">Standaryzacja wdrożeń poprzez Helm chart’y i Argo CD — declarative environments, rollback, promotion, DR.</p>
            <ul className="mt-2 list-disc list-inside text-green-300">
              <li>Helm chart repo + wersjonowanie</li>
              <li>ApplicationSets, progressive delivery</li>
              <li>Policy as Code (OPA/Gatekeeper)</li>
            </ul>
          </div>
          {/* Chmura: Azure i OCI */}
          <div>
            <h3 className="font-semibold">Chmura: Azure & OCI</h3>
            <p className="text-green-300">Automatyzacja infrastruktury w Azure i Oracle Cloud — identity, sieci, storage, compute, cost-ops.</p>
            <ul className="mt-2 list-disc list-inside text-green-300">
              <li>Terraform + moduły reusable</li>
              <li>Landing zones, security baseline</li>
              <li>Observability, FinOps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section id="skills" className="px-4 py-12 border-t border-green-700">
        <h2 className="text-2xl font-bold">Technologie i narzędzia</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Platformy i kontenery</h4>
            <p className="text-green-300">
              Linux (RHEL/Ubuntu/Debian/Alpine), Docker, Kubernetes (OpenShift, Rancher, kubeadm), Ingress, Service Mesh.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">CI/CD i GitOps</h4>
            <p className="text-green-300">
              Azure DevOps, GitLab CI, Helm, Argo CD, Kustomize, Terraform, Ansible, Packer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Security & Observability</h4>
            <p className="text-green-300">
              Trivy, Semgrep, SonarQube, DefectDojo, Vault/Key Vault, SealedSecrets, Kyverno/OPA, Prometheus, Grafana, Elastic, Sentry.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="px-4 py-12 border-t border-green-700">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-green-700 p-4 rounded">
            <h3 className="font-semibold">Migracja z Jenkins do GitLab CI</h3>
            <p className="text-green-300 mt-2">
              Zmigrowałem cały system CI i proces generowania paczki emisyjnej z Jenkins do GitLab CI. Zaprojektowałem i wdrożyłem CD z użyciem ArgoCD oraz zintegrowałem security (Trivy, SonarQube) wraz z quality gate.
            </p>
          </div>
          <div className="border border-green-700 p-4 rounded">
            <h3 className="font-semibold">Migracja zasobów z AWS do OCI</h3>
            <p className="text-green-300 mt-2">
              Zmigrowałem cały system bankowy z AWS do Oracle Cloud Infrastructure. Przygotowałem Terraform dla Compartment, IAM, sieci i klastra K8s, a deployment aplikacji wykonałem przez Helm i ArgoCD.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 py-12 border-t border-green-700">
        <h2 className="text-2xl font-bold">Kontakt</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-4 grid gap-4 max-w-lg">
          <input name="name" placeholder="Imię i nazwisko" className="bg-black border border-green-700 p-3 rounded" required />
          <input type="email" name="email" placeholder="Adres e‑mail" className="bg-black border border-green-700 p-3 rounded" required />
          <textarea name="message" rows={5} placeholder="Wiadomość" className="bg-black border border-green-700 p-3 rounded" required />
          <button type="submit" className="bg-green-700 text-black font-bold py-3 rounded hover:bg-green-500">Wyślij</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-6 border-t border-green-700 text-green-500 text-sm text-center">
        © {new Date().getFullYear()} Kamil Stasica — DevOps Engineer | <a href="https://github.com/polishyankee" className="underline">GitHub</a>
      </footer>
    </div>
  )
}
