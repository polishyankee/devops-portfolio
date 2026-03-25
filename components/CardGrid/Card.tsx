'use client';

import Link from 'next/link';
import AES from 'crypto-js/aes.js';
import Utf8 from 'crypto-js/enc-utf8.js';
import SpotlightCard from 'components/SpotlightCard';
import GradientBorderCard from 'components/GradientBorderCard';

const cardContainerClasses = 'group flex h-full flex-col text-left';
const cardClasses =
	'flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-[0_20px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-200/35 hover:bg-white/[0.06]';

export const Card = ({
	title,
	link,
	tags,
	encrypted = false,
	children
}: {
	title: string;
	link?: string;
	tags?: string[];
	children?: React.ReactNode;
	encrypted?: boolean;
}) => {
	const content = (
		<>
			<h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-100 transition duration-300 group-hover:text-white sm:text-xl">
				{title}
			</h2>
			{children && (
				<p className="mt-3 flex-1 text-sm leading-7 text-slate-300/75 transition duration-300 group-hover:text-slate-100 sm:text-base">
					{children}
				</p>
			)}
			{tags && (
				<div className="mt-5 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-sky-200/10 bg-sky-300/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-sky-100/80"
						>
							{tag}
						</span>
					))}
				</div>
			)}
		</>
	);
	if (link && encrypted) {
		const handleClick = () => {
			const password = prompt('Enter link password:');
			const decrypted = AES.decrypt(link, password).toString(Utf8);
			if (decrypted) {
				window.location.href = decrypted;
			} else {
				alert('Incorrect password');
			}
		};
		return (
			<button onClick={handleClick} className={`${cardContainerClasses} text-left`}>
				<SpotlightCard className={cardClasses}>{content}</SpotlightCard>
			</button>
		);
	} else if (link && !encrypted) {
		if (link[0] === '/') {
			// internal link
			return (
				<Link href={link} className={cardContainerClasses}>
					<SpotlightCard className={cardClasses}>{content}</SpotlightCard>
				</Link>
			);
		}
		return (
			<a href={link} target="_blank" className={cardContainerClasses}>
				<SpotlightCard className={cardClasses}>{content}</SpotlightCard>
			</a>
		);
	} else {
		return (
			<GradientBorderCard className="flex h-full flex-col p-5 sm:p-6 transition duration-300 hover:-translate-y-1">
				{content}
			</GradientBorderCard>
		);
	}
};
