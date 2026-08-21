const stack = [
	{ short: 'K8S', name: 'Kubernetes' },
	{ short: 'DOCKER', name: 'Docker' },
	{ short: 'HELM', name: 'Helm' },
	{ short: 'TERRAFORM', name: 'Terraform' },
	{ short: 'ANSIBLE', name: 'Ansible / AWX' },
	{ short: 'ARGO CD', name: 'Argo CD' },
	{ short: 'FLUX', name: 'Flux CD' },
	{ short: 'GITLAB CI', name: 'GitLab CI' },
	{ short: 'AZURE DEVOPS', name: 'Azure DevOps' },
	{ short: 'AWS', name: 'Amazon Web Services' },
	{ short: 'OCI', name: 'Oracle Cloud Infrastructure' },
	{ short: 'AKS', name: 'Azure Kubernetes Service' },
	{ short: 'RANCHER', name: 'Rancher / RKE2' },
	{ short: 'PROMETHEUS', name: 'Prometheus' },
	{ short: 'GRAFANA', name: 'Grafana' },
	{ short: 'DYNATRACE', name: 'Dynatrace' },
	{ short: 'SONARQUBE', name: 'SonarQube' },
	{ short: 'TRIVY', name: 'Trivy' },
	{ short: 'KYVERNO', name: 'Kyverno' },
	{ short: 'OPA', name: 'Open Policy Agent' }
];

export const TechStack = () => (
	<ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
		{stack.map(({ short, name }) => (
			<li key={short} className="group relative">
				<span
					aria-hidden="true"
					className="pointer-events-none absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
				>
					{name}
				</span>
				<div className="flex h-14 items-center justify-center border border-white/10 px-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-slate-500 transition duration-200 ease-in-out group-hover:border-accent/50 group-hover:bg-accent/5 group-hover:text-accent">
					{short}
				</div>
			</li>
		))}
	</ul>
);
