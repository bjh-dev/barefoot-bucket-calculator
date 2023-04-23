import './globals.css'

export const metadata = {
	title: 'The Barefoot Bucket Calculator',
	description: `Calculate your bucket distributions based on your pay frequency.
							Check your spending actual spending against the suggestions from
							the Barefoot Investor.`,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-gray-300'>{children}</body>
		</html>
	)
}
