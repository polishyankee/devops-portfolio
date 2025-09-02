import '../styles/globals.css';

export const metadata = {
	title: 'Kamil Stasica'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains%20Mono:wght@100..800&display=block"
					rel="stylesheet"
				/>
			</head>
			<body>
				{children}
				<script defer src="https://assets.onedollarstats.com/tracker.js"></script>
			</body>
		</html>
	);
}
