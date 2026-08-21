const commandLines = [
	{
		command: 'ansible-playbook cluster.yml --check',
		status: 'cluster lifecycle reconciled, zero manual changes'
	},
	{
		command: 'argocd app sync leasing-platform',
		status: 'desired state applied, no direct kubectl apply -f'
	},
	{
		command: 'flux get kustomizations',
		status: 'ready — drift = 0 across all clusters'
	}
];

const metrics = [
	{ label: 'CI/CD gates', value: '9 / 9 passing' },
	{ label: 'Deployment model', value: 'GitOps only' },
	{ label: 'Cluster changes', value: '0 manual kubectl' }
];

const layers = [
	'Ansible-owned cluster lifecycle',
	'GitOps delivery (Argo CD / Flux)',
	'Runtime observability and DR'
];

export const HeroVisual = () => (
	<div className="relative mx-auto min-w-0 w-full max-w-[620px] xl:mx-0">
		<div className="relative border border-white/10 border-t-2 border-t-accent/60 bg-ink-800/60">
			<div
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(180deg,white,transparent_94%)]"
				aria-hidden="true"
			></div>

			<div className="relative p-6 sm:p-7 lg:p-8">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
							Platform Overview
						</p>
						<h2 className="mt-3 text-2xl font-bold uppercase tracking-[-0.02em] text-white sm:text-3xl">
							Infrastructure that behaves like a product
						</h2>
					</div>
					<div className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-accent">
						Systems nominal
					</div>
				</div>

				<div className="mt-7 border border-white/10 bg-ink-950/60 p-4 sm:p-5">
					<div className="flex items-center gap-2">
						<span className="h-2.5 w-2.5 rounded-full bg-rose-400/70"></span>
						<span className="h-2.5 w-2.5 rounded-full bg-amber-400/70"></span>
						<span className="h-2.5 w-2.5 rounded-full bg-accent/80"></span>
						<span className="ml-3 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-slate-500">
							Ops Console
						</span>
					</div>

					<div className="mt-5 space-y-4">
						{commandLines.map(({ command, status }) => (
							<div key={command} className="border border-white/8 bg-white/[0.02] p-4">
								<div className="overflow-x-auto font-mono text-sm whitespace-nowrap text-accent">
									$ {command}
								</div>
								<div className="mt-2 text-sm leading-6 text-slate-400">{status}</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-6 grid gap-4 sm:grid-cols-2">
					<div className="border border-white/10 bg-white/[0.02] p-5">
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
							Operating Model
						</p>
						<div className="mt-4 space-y-3">
							{layers.map((layer) => (
								<div
									key={layer}
									className="flex items-center gap-3 border border-white/8 bg-ink-950/40 px-4 py-3 text-sm text-slate-200"
								>
									<span className="h-2 w-2 rounded-full bg-accent"></span>
									{layer}
								</div>
							))}
						</div>
					</div>

					<div className="border border-white/10 bg-white/[0.02] p-5">
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
							Signal
						</p>
						<div className="mt-4 space-y-4">
							{metrics.map(({ label, value }) => (
								<div key={label}>
									<div className="flex items-end justify-between gap-4">
										<span className="text-sm text-slate-400">{label}</span>
										<span className="text-sm font-medium text-slate-100">{value}</span>
									</div>
									<div className="mt-2 h-1.5 bg-ink-950">
										<div className="h-full bg-accent"></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="absolute -right-4 -top-6 hidden border border-white/10 bg-ink-950/90 px-4 py-3 sm:block">
			<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Delivery pace</p>
			<p className="mt-2 text-sm text-slate-200">minutes, not days</p>
		</div>

		<div className="absolute -left-5 -bottom-6 hidden border border-white/10 bg-ink-950/90 px-4 py-3 lg:block">
			<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Failure mode</p>
			<p className="mt-2 text-sm text-slate-200">rehearsed and observable</p>
		</div>
	</div>
);
