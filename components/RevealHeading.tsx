'use client';

import { motion, Variants } from 'framer-motion';

export const staggerContainer: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } }
};

export const charContainer: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.018 } }
};

export const charVariant: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const RevealHeading = ({ text, className }: { text: string; className: string }) => (
	<motion.h2 variants={charContainer} aria-label={text} className={className}>
		{text.split(' ').flatMap((word, wi) => {
			const wordEl = (
				<span key={`w-${wi}`} aria-hidden="true" className="inline-block whitespace-nowrap">
					{word.split('').map((char, ci) => (
						<motion.span key={ci} variants={charVariant} className="inline-block">
							{char}
						</motion.span>
					))}
				</span>
			);
			return wi === 0 ? [wordEl] : [' ', wordEl];
		})}
	</motion.h2>
);
