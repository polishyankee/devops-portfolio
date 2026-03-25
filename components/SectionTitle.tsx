import { sectionTitleBigClasses, sectionTitleClasses } from './styles';

export const SectionTitle = ({
	accentText,
	children,
	big = false
}: {
	accentText?: string;
	children: React.ReactNode;
	big?: boolean;
}) => (
	<>
		{accentText && (
			<span className="inline-flex items-center rounded-full border border-sky-200/15 bg-sky-300/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-accent">
				{accentText}
			</span>
		)}
		<div className={big ? 'h-4 md:h-5' : 'h-3 md:h-4'}></div>
		<h1 className={big ? sectionTitleBigClasses : sectionTitleClasses}>
			{children}
			{big && <span className="text-accent">.</span>}
		</h1>
		<div className={big ? 'h-6 md:h-8 lg:h-10' : 'h-5 md:h-6'}></div>
	</>
);
