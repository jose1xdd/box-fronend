import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Boxing League',
	description: 'Liga de Boxeo Norte de Santander'
};

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
	  <html lang='en'>
			<body className={inter.className}>
				<main className='min-h-screen flex flex-col items-center justify-center'>
			  {children}
				</main>
			</body>
	  </html>
	);
}