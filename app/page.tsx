import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import { HeroVisual } from 'components/Index/HeroVisual';
import { PracticeAccordion } from 'components/Index/PracticeAccordion';
import { TechStack } from 'components/Index/TechStack';
import { Industries } from 'components/Index/Industries';
import { AboutMe } from 'components/Index/AboutMe';
import { containerClasses, fancyLinkClasses, linkClasses, sectionBodyClasses } from 'components/styles';

const navigation = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Stack', href: '#stack' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Achievements', href: '#achievements' },
	{ label: 'Contact', href: '#contact' }
];

const heroLinks = [
	{
		title: 'About Me',
		href: 'about',
		description:
			'I moved from programming into platform engineering because I care about what happens after code ships.'
	},
	{
		title: 'Work Experience',
		href: 'experience',
		description:
			'I design production platforms and delivery standards used in regulated financial environments.'
	},
	{
		title: 'Projects',
		href: 'projects',
		description:
			'I build GitOps, CI/CD, multi-region Kubernetes, cloud migration, and DevSecOps automation programs.'
	},
	{
		title: 'Achievements',
		href: 'achievements',
		description:
			'I validate the work with certifications focused on Kubernetes, cloud-native operations, and security.'
	}
];

const highlights = [
	{ label: 'Primary focus', value: 'Platform engineering' },
	{ label: 'Core stack', value: 'Kubernetes, GitOps, CI/CD' },
	{ label: 'Domain', value: 'Financial services' }
];

const availabilityNotes = [
	'Interested in platform engineering, DevSecOps, cloud automation, and Kubernetes-heavy work.',
	'Comfortable with high-availability design, migration programs, and regulated delivery environments.',
	'Best contact path: email or LinkedIn.'
];

const panelClasses =
	'relative overflow-hidden border border-white/10 border-t-2 border-t-accent/50 bg-ink-800/40 p-8 md:p-10 lg:p-12';

export default function Home() {
	return (
		<main className="relative overflow-hidden bg-ink-900 text-white">
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:88px_88px] opacity-40 [mask-image:radial-gradient(circle_at_center,white,transparent_92%)]"></div>
			</div>

			<header className="sticky top-0 z-20 border-b border-white/10 bg-ink-900/95">
				<div className={`${containerClasses} flex items-center justify-between py-6 lg:py-8`}>
					<a href="#top" className="inline-flex items-center gap-3">
						<span className="flex h-11 w-11 items-center justify-center border border-accent/40 bg-ink-800 font-mono text-sm text-accent">
							KS
						</span>
						<span className="hidden sm:block">
							<span className="block text-sm font-medium text-white">Kamil Stasica</span>
							<span className="block font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
								DevOps / Platform Engineering
							</span>
						</span>
					</a>

					<nav className="hidden items-center gap-6 lg:flex">
						{navigation.map(({ label, href }) => (
							<a
								key={href}
								href={href}
								className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400 transition hover:text-accent"
							>
								{label}
							</a>
						))}
					</nav>

					<a
						href="#contact"
						className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-accent transition hover:bg-accent/20"
					>
						Let&apos;s talk
						<span aria-hidden="true">→</span>
					</a>
				</div>
			</header>

			<section id="top" className="relative z-10">
				<div className={`${containerClasses} pb-20 pt-8 lg:pb-28 lg:pt-10`}>
					<div className="grid min-w-0 items-center gap-16 xl:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)]">
						<div className="min-w-0">
							<span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-accent">
								Platform Engineering • DevSecOps • Kubernetes
							</span>

							<p className="mt-8 font-mono text-lg font-medium uppercase tracking-[0.34em] text-accent/90 sm:text-xl lg:text-2xl">
								Kamil Stasica
							</p>
							<h1 className="mt-4 max-w-3xl text-3xl font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl xl:text-[4.2rem]">
								I build delivery platforms that stay{' '}
								<span className="text-accent">fast, secure, and calm</span> in production.
							</h1>
							<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/85 lg:text-xl">
								I design and operate DevSecOps platforms, Kubernetes foundations, and cloud
								automation for financial systems where reliability is not optional.
							</p>

							<div className="mt-10 flex flex-wrap gap-4">
								<a
									href="#projects"
									className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-ink-950 transition hover:bg-accent/90"
								>
									View projects
									<span aria-hidden="true">→</span>
								</a>
								<a
									href="mailto:stasicakamil@hotmail.com"
									className="inline-flex items-center justify-center border border-white/15 bg-transparent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-slate-100 transition hover:border-accent/50 hover:text-accent"
								>
									Email me
								</a>
							</div>

							<div className="mt-10 grid gap-4 md:grid-cols-2">
								{heroLinks.map(({ title, href, description }) => (
									<LinkToSection key={href} title={title} href={href}>
										{description}
									</LinkToSection>
								))}
							</div>

							<dl className="mt-10 grid gap-4 sm:grid-cols-3">
								{highlights.map(({ label, value }) => (
									<div key={label} className="border border-white/10 bg-white/[0.02] p-4">
										<dt className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">
											{label}
										</dt>
										<dd className="mt-3 text-sm text-slate-100 sm:text-base">{value}</dd>
									</div>
								))}
							</dl>

							<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
								<a className={fancyLinkClasses} href="mailto:stasicakamil@hotmail.com" target="_blank">
									Email
								</a>
								<a
									className={fancyLinkClasses}
									href="https://github.com/polishyankee"
									target="_blank"
								>
									GitHub
								</a>
								<a
									className={fancyLinkClasses}
									href="https://www.linkedin.com/in/kamil-stasica/"
									target="_blank"
								>
									LinkedIn
								</a>
							</div>
						</div>

						<HeroVisual />
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="about">
				<AboutMe />
			</section>

			<section className={`${containerClasses} relative z-10`} id="experience">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big accentText="02">
							Work Experience
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								I design and operate production-grade DevSecOps and Kubernetes platforms for
								critical financial services, supporting environments used by commercial banks,
								cooperative banks, and SKOK credit unions.
							</p>
							<p>
								My work spans infrastructure, platform, and application delivery layers with a
								focus on high availability, security-by-default, and deterministic automation.
							</p>
						</div>

						<div className="mt-10 lg:mt-12">
							<PracticeAccordion />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="stack">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big accentText="03">
							Stack
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								Every project on this page ships through this stack — infrastructure, delivery,
								security, and observability, wired together end to end.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<TechStack />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`}>
				<div className="mt-12 lg:mt-16">
					<Industries />
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="projects">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big accentText="04">
							Selected Projects
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								Examples of the delivery platforms, migration programs, and operational controls
								I&apos;ve built across cloud, Kubernetes, and regulated environments.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<ProjectsList />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="achievements">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big accentText="05">
							Certifications
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								Formal validation of the areas I work in most: Kubernetes, DevSecOps, and secure
								cloud-native delivery.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<Achievements />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="contact">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.52fr)]">
						<div>
							<SectionTitle big accentText="06">
								Let&apos;s build something reliable
							</SectionTitle>
							<div className={sectionBodyClasses}>
								<p>
									I&apos;m interested in platform engineering, DevSecOps, cloud automation, and
									production-grade Kubernetes work. If you want to talk about infrastructure that
									needs to scale cleanly and fail gracefully, reach out.
								</p>
							</div>

							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href="mailto:stasicakamil@hotmail.com"
									className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-ink-950 transition hover:bg-accent/90"
								>
									stasicakamil@hotmail.com
								</a>
								<a
									className="inline-flex items-center justify-center border border-white/15 bg-transparent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-slate-100 transition hover:border-accent/50 hover:text-accent"
									href="https://www.linkedin.com/in/kamil-stasica/"
									target="_blank"
								>
									LinkedIn
								</a>
							</div>
						</div>

						<div className="border border-white/10 bg-ink-950/40 p-6">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
								Availability
							</p>
							<div className="mt-5 space-y-4">
								{availabilityNotes.map((note) => (
									<div key={note} className="border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-slate-300/80">
										{note}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className={`${containerClasses} relative z-10 pb-10 pt-8 md:pb-16`}>
				<div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
					<p>Copyright {new Date().getFullYear()} Kamil Stasica.</p>
					<p>
						Built with <a className={linkClasses} href="https://nextjs.org/" target="_blank">Next.js</a>{' '}
						and{' '}
						<a className={linkClasses} href="https://tailwindcss.com/" target="_blank">
							Tailwind CSS
						</a>
						. Source on{' '}
						<a
							className={linkClasses}
							href="https://github.com/polishyankee/devops-portfolio"
							target="_blank"
						>
							GitHub
						</a>
						.
					</p>
				</div>
			</footer>
		</main>
	);
}
