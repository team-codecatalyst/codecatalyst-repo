import React from 'react';
import gsap from 'gsap';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ScrollTrigger, SplitText } from 'gsap/all';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';

export const FONT_BODY = localFont({ src: './fonts/DMSans.ttf' });
export const FONT_HEAD = localFont({ src: './fonts/BebasNeue.ttf' });
export const antonio = localFont({ src: './fonts/Antonio.ttf' });
export const latoBold = localFont({ src: './fonts/Lato-Bold.ttf' });
export const latoBlack = localFont({ src: './fonts/Lato-Black.ttf' });
export const raleway = localFont({ src: './fonts/Raleway-Regular.ttf' });

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<SpeedInsights />
			<body className={`${FONT_BODY.className} font-sans antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
