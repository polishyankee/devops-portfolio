'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RevealHeading, staggerContainer, fadeUp } from 'components/RevealHeading';

const principles = [
	{
		title: 'API-first operations',
		description:
			'I prefer reproducible systems over hand-tuned infrastructure. Desired state, automation, and versioned change are the baseline — no manual cluster operations, ever.'
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

export const AboutMe = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

	return (
		<div ref={ref} className="grid gap-10 rounded-2xl bg-accent p-8 text-ink-950 md:p-10 lg:grid-cols-12 lg:gap-8 lg:p-12">
			<motion.div
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				variants={staggerContainer}
				className="lg:col-span-6"
			>
				<motion.div variants={fadeUp} className="inline-flex items-center gap-3">
					<span className="border border-ink-950/40 bg-ink-950/10 px-2 py-0.5 font-mono text-[0.7rem] text-ink-950">
						01
					</span>
					<p className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-ink-950/80">About</p>
				</motion.div>

				<RevealHeading
					text="I moved from writing code to owning what happens after it ships."
					className="mt-4 max-w-[600px] text-2xl font-bold uppercase leading-[1.1] tracking-[-0.02em] text-ink-950 sm:text-3xl lg:text-4xl"
				/>

				<motion.p variants={fadeUp} className="mt-4 max-w-[480px] text-base leading-7 text-ink-950/80">
					Today I focus on DevOps and platform engineering — CI/CD pipelines, infrastructure automation,
					and cloud-native environments that let teams ship faster without lowering the quality bar.
				</motion.p>

				<motion.a
					variants={fadeUp}
					href="#experience"
					className="group relative mt-6 inline-flex w-max items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
				>
					Explore experience
					<span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
						→
					</span>
				</motion.a>
			</motion.div>

			<motion.div
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				variants={staggerContainer}
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6"
			>
				{principles.map(({ title, description }) => (
					<motion.div
						key={title}
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="flex flex-col gap-3 border-t-2 border-ink-950/25 pt-5 transition-colors duration-200 hover:border-ink-950/50"
					>
						<span className="text-lg font-semibold tracking-[-0.01em] text-ink-950">{title}</span>
						<p className="text-sm leading-6 text-ink-950/75">{description}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};
