import { CSSProperties } from 'react';

export default function GradientBorderCard({ children, className = 'p-8' }) {
	return (
		<div
			style={
				{
					backgroundColor: 'rgba(15, 23, 42, 0.72)',
					backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
            linear-gradient(135deg,
              rgba(186, 230, 253, 0.48) 0%,
              rgba(125, 211, 252, 0.28) 30%,
              rgba(15, 23, 42, 0.08) 62%,
              rgba(56, 189, 248, 0.34) 100%)`,
					backgroundOrigin: 'border-box',
					backgroundClip: 'padding-box, border-box',
					border: '1px solid transparent'
				} as CSSProperties
			}
			className={`w-full rounded-[1.75rem] shadow-[0_20px_80px_rgba(2,8,23,0.55)] backdrop-blur-xl ${className}`}
		>
			{children}
		</div>
	);
}
