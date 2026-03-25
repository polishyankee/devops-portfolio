const commandLines = [
	{
		command: 'terraform apply -target=platform.core',
		status: 'network, ingress, and observability synced'
	},
	{
		command: 'argocd app sync multi-region-bank',
		status: 'desired state reconciled across clusters'
	},
	{
		command: 'kubectl get nodes -o wide',
		status: 'healthy control plane with failover ready'
	}
];

const metrics = [
	{ label: 'CI/CD gates', value: '9 / 9 passing' },
	{ label: 'Deployment model', value: 'GitOps + policy' },
	{ label: 'Recovery posture', value: 'tested, not assumed' }
];

const layers = [
	'Secure pipeline controls',
	'Immutable cluster baselines',
	'Runtime observability and DR'
];

export const HeroVisual = () => (
	<div className="relative mx-auto w-full max-w-[620px] xl:mx-0">
		<div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-300/18 blur-3xl"></div>
		<div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl"></div>

		<div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/65 shadow-[0_30px_120px_rgba(2,8,23,0.7)] backdrop-blur-xl">
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.22),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_22%)]"
				aria-hidden="true"
			></div>
			<div
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(180deg,white,transparent_94%)]"
				aria-hidden="true"
			></div>

			<div className="relative p-6 sm:p-7 lg:p-8">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
							Platform Overview
						</p>
						<h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
							Infrastructure that behaves like a product
						</h2>
					</div>
					<div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-emerald-200">
						Systems nominal
					</div>
				</div>

				<div className="mt-7 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5">
					<div className="flex items-center gap-2">
						<span className="h-2.5 w-2.5 rounded-full bg-rose-300/70"></span>
						<span className="h-2.5 w-2.5 rounded-full bg-amber-300/70"></span>
						<span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70"></span>
						<span className="ml-3 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-slate-500">
							Ops Console
						</span>
					</div>

					<div className="mt-5 space-y-4">
						{commandLines.map(({ command, status }) => (
							<div
								key={command}
								className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
							>
								<div className="font-mono text-sm text-sky-100">$ {command}</div>
								<div className="mt-2 text-sm leading-6 text-slate-400">{status}</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-6 grid gap-4 sm:grid-cols-2">
					<div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
						<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
							Operating Model
						</p>
						<div className="mt-4 space-y-3">
							{layers.map((layer) => (
								<div
									key={layer}
									className="flex items-center gap-3 rounded-2xl border border-white/8 bg-slate-950/50 px-4 py-3 text-sm text-slate-200"
								>
									<span className="h-2 w-2 rounded-full bg-accent"></span>
									{layer}
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
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
									<div className="mt-2 h-2 rounded-full bg-slate-800/90">
										<div className="h-full rounded-full bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-200"></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="absolute -right-4 top-10 hidden rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-[0_16px_60px_rgba(2,8,23,0.6)] backdrop-blur-xl sm:block">
			<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Delivery pace</p>
			<p className="mt-2 text-sm text-slate-200">minutes, not days</p>
		</div>

		<div className="absolute -left-5 bottom-14 hidden rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-[0_16px_60px_rgba(2,8,23,0.6)] backdrop-blur-xl lg:block">
			<p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Failure mode</p>
			<p className="mt-2 text-sm text-slate-200">rehearsed and observable</p>
		</div>
	</div>
);
