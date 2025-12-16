import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
import { linkClasses } from 'components/styles';

export const Achievements = () => (
  <CardGrid>
    <Card
      title="Certified DevSecOps Foundation"
      tags={['DevSecOps', 'Security', 'DevOps Institute']}
    >
      Certification validating knowledge of integrating security across the full software delivery lifecycle
      (DevSecOps Foundation).
    </Card>

    <Card
      title="Certified DevSecOps Practitioner"
      tags={['DevSecOps', 'Security', 'DevOps Institute']}
    >
      Advanced certification focused on hands-on DevSecOps implementation, security automation, and regulatory
      compliance.
    </Card>

    <Card
      title="CKA – Certified Kubernetes Administrator"
      tags={['Kubernetes', 'Cloud Native', 'CNCF']}
    >
      Certification confirming Kubernetes administration skills: installation, configuration, operations, and
      troubleshooting of production clusters.
    </Card>
  </CardGrid>
);
