import { Card } from 'components/CardGrid/Card';
import { CardGrid } from 'components/CardGrid/CardGrid';

export const ProjectsList = () => (
  <CardGrid>
    <Card
      title="Migration from Jenkins to GitLab CI + GitOps"
      tags={['GitLab CI', 'Argo CD', 'GitOps', 'SonarQube', 'Trivy']}
    >
      Standardized CI/CD and introduced GitOps to shorten time-to-production and improve overall delivery quality.
    </Card>

    <Card
      title="Core banking migration: AWS → OCI"
      tags={['Terraform', 'OCI', 'Helm', 'Argo CD', 'Prometheus', 'Grafana']}
    >
      Automated infrastructure and deployments in OCI, reduced costs, and implemented straightforward Disaster Recovery.
    </Card>

    <Card
      title="Multi-Region Kubernetes (HA) with K8GB and DR"
      tags={['Kubernetes', 'K8GB', 'external-dns', 'Velero', 'SLO']}
    >
      Built a highly available two-region architecture with global load balancing and a validated DR runbook.
    </Card>

    <Card
      title="Security scanning in pipelines + quality gates"
      tags={['Semgrep', 'Trivy', 'OWASP ZAP', 'SBOM', 'DefectDojo', 'Kyverno']}
    >
      Integrated SAST, SCA, DAST, and IaC scanning into CI/CD with centralized visibility and enforced quality gates.
    </Card>

    <Card
      title="Azure DevOps → AKS cross-tenant deployments"
      tags={['Azure DevOps', 'AKS', 'Entra ID', 'OIDC', 'Workload Identity']}
    >
      Enabled secure deployments to resources in another tenant without relying on long-lived secrets.
    </Card>

    <Card
      title="Policy-as-code in CI/CD (process standardization)"
      tags={['Policy-as-code', 'OPA', 'Conftest', 'Kyverno', 'Compliance']}
    >
      Rolled out a company-wide CI/CD standard with policy-as-code to enforce security and quality controls in pipelines.
    </Card>

    <Card
      title="Chaos engineering for critical servers and services"
      tags={['Chaos Engineering', 'RKE2', 'Kubernetes', 'High Availability', 'Resilience']}
    >
      Implemented controlled chaos scenarios for nodes, control-plane components, VIP failover, and storage to continuously validate self-healing and platform stability.
    </Card>

    <Card
      title="Ansible AWX rollout for platform automation"
      tags={['Ansible', 'AWX', 'RHEL 9', 'IaC', 'Automation']}
    >
      Introduced AWX with standardized inventories, job templates, and RBAC to execute repeatable, auditable, and idempotent operational workflows.
    </Card>

    <Card
      title="Dynatrace Managed + SaaS monitoring implementation"
      tags={['Dynatrace', 'Managed', 'SaaS', 'Observability', 'Alerting']}
    >
      Deployed end-to-end monitoring for infrastructure and applications with health validation, synthetic checks, and actionable alerting for faster incident response.
    </Card>
  </CardGrid>
);
