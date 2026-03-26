import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import { HeroVisual } from 'components/Index/HeroVisual';
import { containerClasses, fancyLinkClasses, linkClasses, sectionBodyClasses } from 'components/styles';

const navigation = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
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

const principles = [
	{
		title: 'API-first operations',
		description:
			'I prefer reproducible systems over hand-tuned infrastructure. Desired state, automation, and versioned change are the baseline.'
	},
	{
		title: 'Security in the lane',
		description:
			'I push security controls into the delivery path itself, so quality gates are mandatory instead of optional.'
	},
	{
		title: 'Resilience by rehearsal',
		description:
			'I treat chaos validation, recovery testing, and observability as part of delivery, not incident folklore.'
	}
];

const capabilityAreas = [
	{
		title: 'Kubernetes and Platform Engineering',
		description:
			'I architect HA RKE2 environments with Rancher lifecycle management, secure ingress, resilient storage, and clean operating patterns for stateful and stateless workloads.'
	},
	{
		title: 'DevSecOps and CI/CD Controls',
		description:
			'I standardize delivery pipelines across Azure DevOps and GitLab with mandatory gates for linting, SAST, SCA, image scanning, runtime validation, and release quality.'
	},
	{
		title: 'Resilience and Operational Quality',
		description:
			'I validate real-world failure scenarios, tune observability, and keep recovery procedures production-ready for systems that cannot afford guesswork.'
	}
];

const availabilityNotes = [
	'Interested in platform engineering, DevSecOps, cloud automation, and Kubernetes-heavy work.',
	'Comfortable with high-availability design, migration programs, and regulated delivery environments.',
	'Best contact path: email or LinkedIn.'
];

const panelClasses =
	'relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10 lg:p-12 backdrop-blur-xl shadow-[0_30px_120px_rgba(2,8,23,0.55)]';
const panelGlowClasses =
	'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_22%)]';

export default function Home() {
	return (
		<main className="relative overflow-hidden bg-[#020817] text-white">
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(141,220,255,0.2),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(103,232,249,0.14),transparent_18%),linear-gradient(180deg,#081120_0%,#020817_48%,#020617_100%)]"></div>
				<div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:88px_88px] opacity-25 [mask-image:radial-gradient(circle_at_center,white,transparent_92%)]"></div>
				<div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-300/15 blur-[140px]"></div>
			</div>

			<header className="relative z-20">
				<div className={`${containerClasses} flex items-center justify-between py-6 lg:py-8`}>
					<a href="#top" className="inline-flex items-center gap-3">
						<span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] font-mono text-sm text-accent shadow-[0_16px_40px_rgba(2,8,23,0.4)]">
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
								className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400 transition hover:text-sky-100"
							>
								{label}
							</a>
						))}
					</nav>

					<a
						href="#contact"
						className="inline-flex items-center rounded-full border border-sky-200/20 bg-sky-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-sky-100 transition hover:border-sky-200/35 hover:bg-sky-300/15"
					>
						Let&apos;s talk
					</a>
				</div>
			</header>

			<section id="top" className="relative z-10">
				<div className={`${containerClasses} pb-20 pt-8 lg:pb-28 lg:pt-10`}>
					<div className="grid items-center gap-16 xl:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)]">
						<div>
							<span className="inline-flex items-center rounded-full border border-sky-200/15 bg-sky-300/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-accent">
								Platform Engineering • DevSecOps • Kubernetes
							</span>

							<p className="mt-8 font-mono text-lg font-medium uppercase tracking-[0.34em] text-accent/90 sm:text-xl lg:text-2xl">
								Kamil Stasica
							</p>
							<h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl xl:text-[4.9rem]">
								I build delivery platforms that stay{' '}
								<span className="bg-gradient-to-r from-sky-50 via-sky-200 to-cyan-200 bg-clip-text text-transparent">
									fast, secure, and calm in production
								</span>
								.
							</h1>
							<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/85 lg:text-xl">
								I design and operate DevSecOps platforms, Kubernetes foundations, and cloud
								automation for financial systems where reliability is not optional.
							</p>

							<div className="mt-10 flex flex-wrap gap-4">
								<a
									href="#projects"
									className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-200 px-6 py-3 font-medium text-slate-950 shadow-[0_18px_60px_rgba(125,211,252,0.3)] transition hover:scale-[1.01]"
								>
									View projects
								</a>
								<a
									href="mailto:stasicakamil@hotmail.com"
									className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 font-medium text-slate-100 transition hover:border-sky-200/30 hover:bg-white/[0.06]"
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
									<div
										key={label}
										className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4"
									>
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
				<div className={panelClasses}>
					<div className={panelGlowClasses} aria-hidden="true"></div>
					<div className="relative grid gap-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.7fr)]">
						<div>
							<SectionTitle big accentText="01">
								About Me
							</SectionTitle>
							<div className={sectionBodyClasses}>
								<p>
									My path started in software development, but I became most interested in what
									happens after the code is written: how systems run, scale, recover, and stay
									trustworthy in production.
								</p>
								<p>
									Today I focus on DevOps and platform engineering. I like building CI/CD
									pipelines, automating infrastructure, and creating cloud-native environments
									that let teams ship faster without lowering the quality bar.
								</p>
								<p>
									I care about observability, security, resilience, and cost awareness because a
									good platform is not only available, but also understandable and sustainable.
								</p>
							</div>
						</div>

						<div className="grid gap-4 self-start">
							{principles.map(({ title, description }) => (
								<div
									key={title}
									className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
								>
									<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
										{title}
									</p>
									<p className="mt-3 text-sm leading-7 text-slate-300/80 sm:text-base">
										{description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="experience">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className={panelGlowClasses} aria-hidden="true"></div>
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

						<div className="mt-10 grid gap-5 xl:grid-cols-3">
							{capabilityAreas.map(({ title, description }) => (
								<div
									key={title}
									className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_60px_rgba(2,8,23,0.4)]"
								>
									<h2 className="text-xl font-semibold tracking-[-0.03em] text-white">{title}</h2>
									<p className="mt-4 text-sm leading-7 text-slate-300/80 sm:text-base">
										{description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="projects">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className={panelGlowClasses} aria-hidden="true"></div>
					<div className="relative">
						<SectionTitle big accentText="03">
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
					<div className={panelGlowClasses} aria-hidden="true"></div>
					<div className="relative">
						<SectionTitle big accentText="04">
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
					<div className={panelGlowClasses} aria-hidden="true"></div>
					<div className="relative grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.52fr)]">
						<div>
							<SectionTitle big accentText="05">
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
									className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-200 px-6 py-3 font-medium text-slate-950 shadow-[0_18px_60px_rgba(125,211,252,0.3)] transition hover:scale-[1.01]"
								>
									stasicakamil@hotmail.com
								</a>
								<a
									className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 font-medium text-slate-100 transition hover:border-sky-200/30 hover:bg-white/[0.06]"
									href="https://www.linkedin.com/in/kamil-stasica/"
									target="_blank"
								>
									LinkedIn
								</a>
							</div>
						</div>

						<div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
								Availability
							</p>
							<div className="mt-5 space-y-4">
								{availabilityNotes.map((note) => (
									<div
										key={note}
										className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300/80"
									>
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
