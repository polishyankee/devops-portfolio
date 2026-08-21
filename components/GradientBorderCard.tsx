export default function GradientBorderCard({ children, className = 'p-8' }) {
	return <div className={`w-full border border-white/10 bg-ink-800/50 hover:border-accent/50 ${className}`}>{children}</div>;
}
