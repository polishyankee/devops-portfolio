export const LinkToSection = ({
	title,
	href,
	children
}: {
	title: string;
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={`#${href}`}
		className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 shadow-[0_20px_80px_rgba(2,8,23,0.45)] transition duration-300 hover:-translate-y-1 hover:border-sky-200/35 hover:bg-white/[0.055]"
	>
		<div
			className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.16),transparent_42%)] opacity-0 transition duration-300 group-hover:opacity-100"
			aria-hidden="true"
		></div>
		<span className="relative inline-flex items-center rounded-full border border-sky-200/15 bg-sky-300/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent transition group-hover:border-sky-200/30 group-hover:bg-sky-300/15">
			{title}
		</span>
		<p className="relative mt-4 max-w-prose text-base leading-7 text-slate-300/80 transition group-hover:text-slate-100 sm:text-lg">
			{children}
		</p>
		<span className="relative mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-slate-400 transition group-hover:text-sky-100">
			Explore section
			<span aria-hidden="true">→</span>
		</span>
	</a>
);
