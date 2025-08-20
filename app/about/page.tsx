import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import {
	HandshakeIcon,
	LightbulbIcon,
	MedalIcon,
	ScaleIcon,
	SlashIcon
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { antonio, FONT_HEAD } from '../layout';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'About TealBit | Digital Solutions Company',
	description:
		'Learn about TealBit, a Ghana-based tech company founded in 2024. We craft exceptional digital experiences through UI/UX design, web development, and mobile app development tailored for growth-focused businesses.',
	keywords: [
		'about TealBit',
		'TealBit company profile',
		'tech company Ghana',
		'web development Ghana',
		'mobile app development Ghana',
		'UI UX agency Ghana',
		'digital solutions Ghana',
		'startup tech company Accra',
		'software development Accra',
		'Ghanaian software company',
		'IT services Ghana'
	],
	twitter: {
		card: 'summary_large_image',
		description:
			'Discover TealBit — a Ghanaian digital agency delivering impactful web, mobile, and UI/UX solutions for startups and growing businesses.'
	},
	openGraph: {
		title: 'About TealBit | Digital Solutions Company',
		description:
			'Founded in 2024, TealBit is a modern tech agency delivering world-class web, mobile, and UI/UX solutions for startups and businesses across Ghana and beyond.',
		url: 'https://www.tealbit.co/about',
		type: 'website',
		siteName: 'TealBit',
		images: 'https://www.tealbit.co/images/about-us-image.jpg'
	}
};

const AboutUsPage = () => {
	return (
		<main className='main-container overflow-hidden'>
			<Breadcrumb className='flex justify-center sm:hidden'>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href='/'>Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<SlashIcon />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href='/about'>About Us</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<h2 className={cn('mt-6', antonio.className)}>About Us</h2>
			<div className='max-w-5xl mx-auto mt-10'>
				<Suspense
					fallback={
						<Skeleton className='h-56 sm:h-[368px] w-full rounded-xl' />
					}>
					<div className='bg-[url(/images/about-us-image.jpg)] h-56 sm:h-[368px] bg-cover bg-no-repeat bg-center filter rounded-xl mt-6' />
				</Suspense>
				<p>
					TealBit is a forward-thinking technology company dedicated to
					transforming the digital landscape through innovative solutions in
					UI/UX design, mobile application development, and web application
					development. <br />
					Founded in mid-2024, TealBit was established with the aim of bridging
					the gap between technology and human interaction. We believe that
					technology should enhance, not complicate, the lives of its users.
				</p>

				<h3 className={cn('mt-6', FONT_HEAD)}>Our Mission</h3>
				<p>
					To empower businesses by delivering tailored digital solutions that
					drive growth, enhance user engagement, and foster innovation.
				</p>

				<h3 className={cn('mt-6', FONT_HEAD)}>Our Vision</h3>
				<p>
					As TealBit moves forward, we are set on becoming a key player in the
					digital services industry. Our goal is not only to grow as a company
					but also to help our clients grow by providing solutions that resonate
					with their target audience and adapt to the ever-changing digital
					ecosystem.
				</p>

				<h3 className={cn('mt-6', FONT_HEAD)}>Our Values</h3>
				<section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mt-4'>
					<div className='flex flex-col text-center'>
						<LightbulbIcon className='size-10 w-full block text-center mb-2' />
						<h4>Innnovation</h4>
						<p className='mt-1.5! leading-tight'>
							Continuously embracing new technologies to provide cutting-edge
							solutions.
						</p>
					</div>
					<div className='flex flex-col text-center'>
						<ScaleIcon className='size-10 w-full block text-center mb-2' />
						<h4>Integrity</h4>
						<p className='mt-1.5! leading-tight'>
							Building trust through transparency and ethical practices.
						</p>
					</div>
					<div className='flex flex-col text-center'>
						<HandshakeIcon className='size-10 w-full block text-center mb-2' />
						<h4>Collaboration</h4>
						<p className='mt-1.5! leading-tight'>
							Working closely with clients to understand and meet their unique
							needs.
						</p>
					</div>
					<div className='flex flex-col text-center'>
						<MedalIcon className='size-10 w-full block text-center mb-2' />
						<h4>Excellence</h4>
						<p className='mt-1.5! leading-tight'>
							Striving for the highest quality in every project we undertake.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
};

export default AboutUsPage;
