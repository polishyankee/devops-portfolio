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
		className="group relative block border border-white/10 bg-ink-800/50 p-5 sm:p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50"
	>
		<span className="relative inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent transition group-hover:border-accent/50 group-hover:bg-accent/15">
			{title}
		</span>
		<p className="relative mt-4 max-w-prose text-base leading-7 text-slate-300/80 transition group-hover:text-slate-100 sm:text-lg">
			{children}
		</p>
		<span className="relative mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-slate-400 transition group-hover:text-accent">
			Explore section
			<span aria-hidden="true">→</span>
		</span>
	</a>
);
