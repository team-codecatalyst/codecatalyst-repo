import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { MobileIcon } from '@radix-ui/react-icons';
import { ArrowRight, BriefcaseBusiness, Globe, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import { FONT_HEAD } from '../layout';

const ServicesSection = () => {
	const services = [
		{
			service: 'web-development',
			title: 'Web Development',
			description:
				"We build web apps that don't break, scale, or bore. Fast, secure, and built to grow, exactly how you need it.",
			icon: <Globe className='size-9' />
		},
		{
			service: 'mobile-app-development',
			title: 'Mobile App Development',
			description:
				'Cross-platform apps that feel native, run smooth, and keep users coming back. One codebase, zero compromise.',
			icon: <MobileIcon className='size-9 stroke-3' />
		},
		{
			service: 'ui-ux-design',
			title: 'UI/UX Design',
			description:
				'Interfaces that turn visitors into loyal users. Clean, sharp, and engineered to convert.',
			icon: <Paintbrush className='size-9' />
		}
	];
	return (
		<section className='main-container mt-12'>
			<Header
				title='our services'
				heading='what we do'
				icon={<BriefcaseBusiness />}
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-md:gap-y-0 mt-6 h-max'>
				{services.map(({ icon, title, service, description }) => (
					<div
						key={service}
						className='max-sm:not-last:border-b max-lg:border-b-primary/45 lg:not-last:border-r sm:first:border-r sm:first:border-r-primary/45 sm:border-r-primary/45 h-auto w-full flex flex-col sm:max-lg:nth-[3]:col-span-2 sm:max-lg:nth-[3]:border-t sm:max-lg:nth-[3]:border-t-primary/45 lg:justify-between p-4'>
						<div>
							<h3 className={`tracking-wide ${FONT_HEAD.className}`}>
								{icon} {title}
							</h3>
							<p>{description}</p>
						</div>
						<div className='flex justify-end mt-4'>
							<Button
								variant='primary'
								asChild
								className='w-fit'>
								<Link href={`/services/${service}`}>
									<ArrowRight />
								</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServicesSection;
