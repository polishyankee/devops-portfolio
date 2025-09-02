import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
  <CardGrid>
    <Card
      title="Migracja z Jenkins do GitLab CI + GitOps"
      tags={['GitLab CI', 'Argo CD', 'GitOps', 'SonarQube', 'Trivy']}
    >
      Standaryzacja CI/CD i wdrożenie GitOps, aby skrócić time-to-prod i poprawić jakość procesów.
    </Card>

    <Card
      title="Migracja systemu bankowego: AWS → OCI"
      tags={['Terraform', 'OCI', 'Helm', 'Argo CD', 'Prometheus', 'Grafana']}
    >
      Automatyzacja infrastruktury i wdrożeń w OCI, niższe koszty oraz prosty Disaster Recovery.
    </Card>

    <Card
      title="Multi-Region Kubernetes (HA) z K8GB i DR"
      tags={['Kubernetes', 'K8GB', 'external-dns', 'Velero', 'SLO']}
    >
      Wysokodostępna architektura w dwóch regionach z globalnym load-balancingiem i sprawdzonym runbookiem DR.
    </Card>

    <Card
      title="Security Scanning w pipeline’ach + Quality Gates"
      tags={['Semgrep', 'Trivy', 'OWASP ZAP', 'SBOM', 'DefectDojo', 'Kyverno']}
    >
      Zintegrowane SAST, SCA, DAST i IaC scanning w CI/CD z centralną widocznością i bramkami jakości.
    </Card>

    <Card
      title="Azure DevOps → AKS cross-tenant"
      tags={['Azure DevOps', 'AKS', 'Entra ID', 'OIDC', 'Workload Identity']}
    >
      Bezpieczne wdrożenia do zasobów w innym tenantcie bez użycia długoterminowych sekretów.
    </Card>

    <Card
      title="Policy-as-code w CI/CD (standard procesów)"
      tags={['Policy-as-code', 'OPA', 'Conftest', 'Kyverno', 'Compliance']}
    >
      Wdrożenie firmowego standardu CI/CD z egzekwowaniem polityk bezpieczeństwa i jakości w pipeline’ach.
    </Card>
  </CardGrid>
);
