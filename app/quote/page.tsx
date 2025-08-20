import QuoteForm from '@/components/quote';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Request a Free Quote | TealBit',
	description:
		'Looking to build a website, mobile app, or custom digital solution? Fill out the form to get a free project quote from TealBit — your trusted development partner in Ghana.',
	keywords: [
		'get a quote TealBit',
		'request project quote Ghana',
		'web development pricing Ghana',
		'mobile app cost Ghana',
		'custom software quote Ghana',
		'free website quote Ghana',
		'hire developers Ghana',
		'web app estimate Ghana',
		'app development quote Ghana',
	],
	twitter: {
		card: 'summary_large_image',
		description:
			'Get a free quote for your website or mobile app project. TealBit offers custom digital solutions for businesses in Ghana and beyond.',
	},
	openGraph: {
		title: 'Request a Free Quote | TealBit',
		description:
			'Start your next web or mobile app project with TealBit. Fill out the form to get a free quote and expert consultation.',
		url: 'https://www.tealbit.co/get-a-quote',
		type: 'website',
		siteName: 'TealBit',
		images: [
			{
				url: 'https://www.tealbit.co/opengraph-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Get a Free Quote - TealBit Ghana',
			},
		],
	},
};

const Quote = () => {
	return (
		<main className='main-container'>
			<QuoteForm />
		</main>
	);
};

export default Quote;
