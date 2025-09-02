import { CardGrid } from 'components/CardGrid/CardGrid';
import { Card } from 'components/CardGrid/Card';
import { linkClasses } from 'components/styles';

export const Achievements = () => (
  <CardGrid>
    <Card
      title="Certified DevSecOps Foundation"
      tags={['DevSecOps', 'Security', 'DevOps Institute']}
    >
      Certyfikat potwierdzający znajomość zasad integracji bezpieczeństwa w całym cyklu życia
      oprogramowania (DevSecOps Foundation).
    </Card>

    <Card
      title="Certified DevSecOps Practitioner"
      tags={['DevSecOps', 'Security', 'DevOps Institute']}
    >
      Zaawansowany certyfikat obejmujący praktyczne wdrażanie procesów DevSecOps, automatyzację
      zabezpieczeń i zgodność regulacyjną.
    </Card>

    <Card
      title="CKA – Certified Kubernetes Administrator"
      tags={['Kubernetes', 'Cloud Native', 'CNCF']}
    >
      Certyfikat potwierdzający umiejętności w zakresie administracji Kubernetes: instalacja,
      konfiguracja, utrzymanie i rozwiązywanie problemów w klastrach produkcyjnych.
    </Card>
  </CardGrid>
);
