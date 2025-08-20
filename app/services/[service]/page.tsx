// import gsap from 'gsap';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { BadgeCent, SlashIcon } from 'lucide-react';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import PricingCard from '@/components/PricingCard';
import servicesData from '../servicesData';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import { antonio, FONT_HEAD } from '@/app/layout';
import { cn } from '@/lib/utils';

export const generateMetadata = async ({
	params
}: {
	params: Promise<{ service: string }>;
}): Promise<Metadata> => {
	const service = (await params).service;
	const serviceDetails = servicesData.find(
		(services) => services.service === service
	);

	return {
		title: `${serviceDetails?.title} | TealBit`,
		description: serviceDetails?.description
	};
};

const ServicePage = async ({
	params
}: {
	params: Promise<{ service: string }>;
}) => {
	const service = (await params).service;
	const serviceDetails = servicesData.find((s) => s.service == service);

	if (!serviceDetails) {
		return notFound();
	}

	return (
		<main className='main-container'>
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
						<BreadcrumbLink>Services</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<SlashIcon />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href={serviceDetails.service}>{serviceDetails.title}</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h2 className={cn('mt-6', antonio.className)}>{serviceDetails.title}</h2>

			<section className='flex flex-col-reverse lg:flex-row xl:gap-10 md:gap-6 gap-4 items-center h-max mt-6'>
				<div className='flex flex-col justify-between basis-6/12 xl:basis-5/12 h-5/6'>
					<span>{serviceDetails.description}</span>
					<div className='mt-6'>
						<h3 className={FONT_HEAD.className}>Available Features</h3>
						<div className='list-none first:mt-6'>
							{serviceDetails.featuresAndBenefits.map(
								(feature, featureIndex) => (
									<p
										key={featureIndex}
										className='mt-0! flex items-center gap-2'>
										<CheckCircledIcon className='text-primary' /> {feature}
									</p>
								)
							)}
						</div>
					</div>
				</div>
				<Suspense
					fallback={<Skeleton className='h-[326px] w-[625px] rounded-xl' />}>
					<Image
						alt={serviceDetails.title}
						src={serviceDetails.img}
						width={625}
						height={326}
						className='basis-6/12 xl:basis-7/12 rounded-xl'
					/>
				</Suspense>
			</section>

			<section className='flex flex-col mt-6'>
				<Header
					title='pricing'
					heading='choose your plan'
					subtitle='Find the Perfect Plan that Matches Your Needs and Budget.'
					icon={<BadgeCent />}
				/>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:max-xl:gap-6 xl:gap-2.5 mx-auto mt-6 px-0'>
					{serviceDetails.packages.map(
						({ name, description, price, features, cta }, index) => (
							<PricingCard
								key={index}
								name={name}
								description={description}
								price={price}
								features={features}
								cta={cta}
							/>
						)
					)}
				</div>
			</section>
		</main>
	);
};

export const generateStaticParams = () =>
	servicesData.map((service) => ({
		service: service.service
	}));

export default ServicePage;
