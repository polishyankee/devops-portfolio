import classNames from 'classnames';
import { MouseEvent } from 'react';

export default function SpotlightCard({
	children,
	className = 'border border-white/10 bg-ink-800/50'
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
				className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background:
						'radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(182, 255, 46, 0.16), rgba(182, 255, 46, 0.06) 35%, transparent 80%)'
				}}
			/>
			{children}
		</div>
	);
}
