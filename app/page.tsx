import type { Metadata } from 'next';

import HeroSection from './_sections/Hero';
import FeaturesSection from './_sections/Features';
import ServicesSection from './_sections/Services';
import ContactSection from './_sections/Contact';

import { Toaster } from '@/components/ui/sonner';
import Workflow from './_sections/Workflow';

export const metadata: Metadata = {
	title: 'TealBit | Software Company in Ghana',
	description:
		'TealBit is a digital solutions agency in Ghana specializing in custom web development, mobile app development, and UI/UX design. We help startups and businesses thrive online with fast, modern, scalable products.',
	keywords: [
		'TealBit',
		'web development Ghana',
		'mobile app development Ghana',
		'UI UX design Ghana',
		'custom web applications',
		'mobile app design for startups',
		'React Native developers Ghana',
		'Next.js developers Ghana',
		'front-end development agency',
		'full-stack developers Ghana',
		'digital agency Ghana',
		'web design Accra',
		'mobile app design Accra',
		'software company Ghana'
	],
	twitter: {
		card: 'summary_large_image',
		description:
			'TealBit helps businesses thrive online with fast, scalable web and mobile apps. Based in Ghana, we build custom digital products with top-tier design and development.'
	},
	openGraph: {
		title: 'TealBit | Software Company in Ghana',
		description:
			'TealBit is a Ghana-based digital agency specializing in web development, mobile apps, and UI/UX design. We help startups and businesses grow with custom-built digital products.',
		url: 'https://www.tealbit.co/',
		type: 'website',
		siteName: 'TealBit',
		images: [
			{
				url: 'https://www.tealbit.co/opengraph-image.jpg',
				width: 630,
				height: 300,
				alt: 'TealBit - Digital Solutions Agency'
			}
		]
	}
};

const Home = () => {
	return (
		<main className='w-full flex flex-1 flex-col mx-auto justify-center items-center'>
			<HeroSection />
			<ServicesSection />
			<FeaturesSection />
			<Workflow />
			<ContactSection />
			<Toaster
				richColors
				position='bottom-center'
			/>
		</main>
	);
};

export default Home;
