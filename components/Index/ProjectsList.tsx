import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
  <CardGrid>
    <Card
      title="Migracja z Jenkins do GitLab CI + GitOps"
      tags={['GitLab CI', 'Argo CD', 'GitOps', 'SonarQube', 'Trivy']}
    >
      Standardized CI/CD and introduced GitOps to shorten time-to-production and improve overall delivery quality.
    </Card>

    <Card
      title="Migracja systemu bankowego: AWS → OCI"
      tags={['Terraform', 'OCI', 'Helm', 'Argo CD', 'Prometheus', 'Grafana']}
    >
      Automated infrastructure and deployments in OCI, reduced costs, and implemented straightforward Disaster Recovery.
    </Card>

    <Card
      title="Multi-Region Kubernetes (HA) z K8GB i DR"
      tags={['Kubernetes', 'K8GB', 'external-dns', 'Velero', 'SLO']}
    >
      Built a highly available two-region architecture with global load balancing and a validated DR runbook.
    </Card>

    <Card
      title="Security Scanning w pipeline’ach + Quality Gates"
      tags={['Semgrep', 'Trivy', 'OWASP ZAP', 'SBOM', 'DefectDojo', 'Kyverno']}
    >
      Integrated SAST, SCA, DAST, and IaC scanning into CI/CD with centralized visibility and enforced quality gates.
    </Card>

    <Card
      title="Azure DevOps → AKS cross-tenant"
      tags={['Azure DevOps', 'AKS', 'Entra ID', 'OIDC', 'Workload Identity']}
    >
      Enabled secure deployments to resources in another tenant without relying on long-lived secrets.
    </Card>

    <Card
      title="Policy-as-code w CI/CD (standard procesów)"
      tags={['Policy-as-code', 'OPA', 'Conftest', 'Kyverno', 'Compliance']}
    >
      Rolled out a company-wide CI/CD standard with policy-as-code to enforce security and quality controls in pipelines.
    </Card>
  </CardGrid>
);
