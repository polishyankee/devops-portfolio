import classNames from 'classnames';
import { MouseEvent } from 'react';

export default function SpotlightCard({
	children,
	className = 'rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl'
}) {
	function handleMouseMove({
		currentTarget,
		clientX,
		clientY
	}: MouseEvent<HTMLDivElement>) {
		let { left, top } = currentTarget.getBoundingClientRect();

		currentTarget.style.setProperty('--mouse-x', `${clientX - left}px`);
		currentTarget.style.setProperty('--mouse-y', `${clientY - top}px`);
	}

	return (
		<div
			className={classNames('group relative [--mouse-x:50%] [--mouse-y:50%]', className)}
			onMouseMove={handleMouseMove}
		>
			<div
				className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background:
						'radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(186, 230, 253, 0.18), rgba(56, 189, 248, 0.1) 35%, transparent 80%)'
				}}
			/>
			{children}
		</div>
	);
}
