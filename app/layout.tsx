import '../styles/globals.css';

export const metadata = {
	title: 'Kamil Stasica'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="font-sans antialiased">
				{children}
				<script defer src="https://assets.onedollarstats.com/tracker.js"></script>
			</body>
		</html>
	);
}
