'use client';

import { useState } from 'react';

type PanelRow = [string, string];

type PracticeItem = {
	title: string;
	body: string;
	panel: {
		label: string;
		rows: PanelRow[];
	};
};

const practice: PracticeItem[] = [
	{
		title: 'Kubernetes & Platform Engineering',
		body: 'HA RKE2 clusters with Rancher lifecycle management, secure ingress, and resilient storage for stateful and stateless workloads.',
		panel: {
			label: 'Cluster Topology',
			rows: [
				['Nodes', 'Multi-AZ, HA control plane'],
				['Ingress', 'NGINX + cert-manager'],
				['Storage', 'Longhorn / Ceph']
			]
		}
	},
	{
		title: 'GitOps Delivery',
		body: 'Argo CD and Flux own every deployment. No engineer runs kubectl apply -f against a production cluster.',
		panel: {
			label: 'Ops Console',
			rows: [
				['Sync method', 'Argo CD / Flux only'],
				['Manual kubectl', '0 commands'],
				['Drift', 'Reconciled automatically']
			]
		}
	},
	{
		title: 'Infrastructure as Code',
		body: 'Ansible owns the full cluster lifecycle; Terraform provisions cloud resources. Every change is versioned and replayable.',
		panel: {
			label: 'Automation',
			rows: [
				['Cluster lifecycle', 'Ansible playbooks'],
				['Cloud resources', 'Terraform'],
				['Manual changes', 'Not permitted']
			]
		}
	},
	{
		title: 'DevSecOps Controls',
		body: 'SAST, SCA, DAST, and IaC scanning run in every pipeline with policy-as-code gates that block non-compliant releases.',
		panel: {
			label: 'Quality Gates',
			rows: [
				['Scanning', 'SAST / SCA / DAST / IaC'],
				['Policy', 'OPA + Kyverno'],
				['Gate status', '9 / 9 passing']
			]
		}
	},
	{
		title: 'Resilience & Chaos Engineering',
		body: 'Controlled failure injection on nodes, control-plane components, and storage validates self-healing before it is needed for real.',
		panel: {
			label: 'DR Posture',
			rows: [
				['Failover', 'Rehearsed, not assumed'],
				['Regions', 'Multi-region HA'],
				['Runbooks', 'Tested each release']
			]
		}
	},
	{
		title: 'Observability',
		body: 'Prometheus, Grafana, and Dynatrace back SLOs and alerting so incidents are caught before customers notice.',
		panel: {
			label: 'Signal',
			rows: [
				['Metrics', 'Prometheus / Grafana'],
				['APM', 'Dynatrace'],
				['Alerting', 'Actionable, on-call ready']
			]
		}
	}
];

const ConsolePanel = ({ label, rows }: { label: string; rows: PanelRow[] }) => (
	<div className="border border-white/10 border-t-2 border-t-accent/50 bg-ink-800/50 p-6 sm:p-7">
		<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">{label}</p>
		<div className="mt-5 space-y-3">
			{rows.map(([key, value]) => (
				<div
					key={key}
					className="flex items-center justify-between gap-4 border border-white/8 bg-white/[0.02] px-4 py-3"
				>
					<span className="text-sm text-slate-400">{key}</span>
					<span className="text-right text-sm font-medium text-slate-100">{value}</span>
				</div>
			))}
		</div>
	</div>
);

export const PracticeAccordion = () => {
	const [open, setOpen] = useState(0);

	return (
		<div className="grid gap-x-10 lg:grid-cols-12">
			<div className="lg:col-span-6">
				{practice.map((item, index) => {
					const isOpen = open === index;
					return (
						<div key={item.title} className={index === 0 ? undefined : 'border-t border-white/10'}>
							<button
								type="button"
								aria-expanded={isOpen}
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
									{item.title}
								</h3>
							</button>
							<div
								className={`grid transition-[grid-template-rows] duration-500 ease-out ${
									isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
								}`}
							>
								<div className="overflow-hidden">
									<div className="flex flex-col gap-6 pb-8">
										<p className="max-w-[480px] text-base leading-7 text-slate-300/80">{item.body}</p>
										<div className="lg:hidden">
											<ConsolePanel label={item.panel.label} rows={item.panel.rows} />
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="hidden lg:col-span-6 lg:block">
				<div className="sticky top-28">
					<ConsolePanel label={practice[open].panel.label} rows={practice[open].panel.rows} />
				</div>
			</div>
		</div>
	);
};
