'use client';

import { useState } from 'react';

type Project = {
	title: string;
	description: string;
	tags: string[];
};

const projects: Project[] = [
	{
		title: "Ansible-managed Kubernetes platform for Poland's largest leasing company",
		description:
			'Built a fully declarative Kubernetes platform where Ansible owns the entire cluster lifecycle. Application delivery runs exclusively through GitOps with Argo CD and Flux, with no manual kubectl operations.',
		tags: ['Ansible', 'Kubernetes', 'GitOps', 'Argo CD', 'Flux', 'RKE2']
	},
	{
		title: 'Migration from Jenkins to GitLab CI + GitOps',
		description:
			'Standardized CI/CD and introduced GitOps to shorten time-to-production and improve overall delivery quality.',
		tags: ['GitLab CI', 'Argo CD', 'GitOps', 'SonarQube', 'Trivy']
	},
	{
		title: 'Core banking migration: AWS → OCI',
		description:
			'Automated infrastructure and deployments in OCI, reduced costs, and implemented straightforward Disaster Recovery.',
		tags: ['Terraform', 'OCI', 'Helm', 'Argo CD', 'Prometheus', 'Grafana']
	},
	{
		title: 'Multi-Region Kubernetes (HA) with K8GB and DR',
		description:
			'Built a highly available two-region architecture with global load balancing and a validated DR runbook.',
		tags: ['Kubernetes', 'K8GB', 'external-dns', 'Velero', 'SLO']
	},
	{
		title: 'Security scanning in pipelines + quality gates',
		description:
			'Integrated SAST, SCA, DAST, and IaC scanning into CI/CD with centralized visibility and enforced quality gates.',
		tags: ['Semgrep', 'Trivy', 'OWASP ZAP', 'SBOM', 'DefectDojo', 'Kyverno']
	},
	{
		title: 'Azure DevOps → AKS cross-tenant deployments',
		description:
			'Enabled secure deployments to resources in another tenant without relying on long-lived secrets.',
		tags: ['Azure DevOps', 'AKS', 'Entra ID', 'OIDC', 'Workload Identity']
	},
	{
		title: 'Policy-as-code in CI/CD (process standardization)',
		description:
			'Rolled out a company-wide CI/CD standard with policy-as-code to enforce security and quality controls in pipelines.',
		tags: ['Policy-as-code', 'OPA', 'Conftest', 'Kyverno', 'Compliance']
	},
	{
		title: 'Chaos engineering for critical servers and services',
		description:
			'Implemented controlled chaos scenarios for nodes, control-plane components, VIP failover, and storage to continuously validate self-healing and platform stability.',
		tags: ['Chaos Engineering', 'RKE2', 'Kubernetes', 'High Availability', 'Resilience']
	},
	{
		title: 'Ansible AWX rollout for platform automation',
		description:
			'Introduced AWX with standardized inventories, job templates, and RBAC to execute repeatable, auditable, and idempotent operational workflows.',
		tags: ['Ansible', 'AWX', 'RHEL 9', 'IaC', 'Automation']
	},
	{
		title: 'Dynatrace Managed + SaaS monitoring implementation',
		description:
			'Deployed end-to-end monitoring for infrastructure and applications with health validation, synthetic checks, and actionable alerting for faster incident response.',
		tags: ['Dynatrace', 'Managed', 'SaaS', 'Observability', 'Alerting']
	}
];

const ProjectStack = ({ tags }: { tags: string[] }) => (
	<div className="border border-white/10 border-t-2 border-t-accent/50 bg-ink-800/50 p-6 sm:p-7">
		<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
			Project Stack
		</p>
		<div className="mt-5 grid gap-3 sm:grid-cols-2">
			{tags.map((tag) => (
				<div
					key={tag}
					className="border border-white/8 bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-100"
				>
					{tag}
				</div>
			))}
		</div>
	</div>
);

export const ProjectsList = () => {
	const [open, setOpen] = useState(0);

	return (
		<div>
			{projects.map((project, index) => {
				const isOpen = open === index;
				const descriptionId = `project-description-${index}`;

				return (
					<div key={project.title} className="grid gap-x-10 lg:grid-cols-12">
						<div
							className={`lg:col-span-6 ${index === 0 ? '' : 'border-t border-white/10'}`}
						>
							<button
								type="button"
								aria-expanded={isOpen}
								aria-controls={descriptionId}
								onClick={() => setOpen(index)}
								className="group flex w-full items-baseline gap-4 py-6 text-left"
							>
								<span className="font-mono text-[0.8rem] text-slate-500">
									{String(index + 1).padStart(2, '0')}
								</span>
								<h3
									className={`text-xl font-bold uppercase tracking-[-0.02em] transition-colors duration-300 sm:text-2xl ${
										isOpen ? 'text-white' : 'text-slate-400 group-hover:text-white'
									}`}
								>
									{project.title}
								</h3>
							</button>
							<div
								id={descriptionId}
								className={`grid transition-[grid-template-rows] duration-500 ease-out ${
									isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
								}`}
							>
								<div className="overflow-hidden">
									<div className="flex flex-col gap-6 pb-8">
										<p className="max-w-[480px] text-base leading-7 text-slate-300/80">
											{project.description}
										</p>
										<div className="lg:hidden">
											<ProjectStack tags={project.tags} />
										</div>
									</div>
								</div>
							</div>
						</div>

						{isOpen && (
							<div className="hidden self-start lg:col-span-6 lg:block">
								<ProjectStack tags={project.tags} />
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};
