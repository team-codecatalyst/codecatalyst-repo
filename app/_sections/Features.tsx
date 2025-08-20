import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Sapiens } from '@/public/sapiens';
import {
	ClockIcon,
	Fingerprint,
	LightbulbIcon,
	PiggyBankIcon,
	ThumbsUpIcon
} from 'lucide-react';
import { Suspense } from 'react';

const FeaturesSection = () => {
	return (
		<section className='main-container'>
			<span className='flex justify-center'>
				<Suspense fallback={<Skeleton className='h-96 w-100 rounded-2xl' />}>
					<Sapiens className='h-96 w-auto dark:invert-75' />
				</Suspense>
			</span>
			<Header
				title='why choose us?'
				heading='what sets us apart'
				icon={<Fingerprint />}
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-2 md:gap-3 xl:gap-2'>
				<Card className='feature-card'>
					<CardHeader>
						<CardTitle>
							<Suspense
								fallback={<Skeleton className='w-9 h-9 rounded-full' />}>
								<span className='feature-card-icon'>
									<LightbulbIcon className='size-9' />
								</span>
							</Suspense>
							Expertise & Innovation
						</CardTitle>
					</CardHeader>
					<CardContent>
						Our team leverages the latest technologies to create advanced,
						scalable solutions.
					</CardContent>
				</Card>

				<Card className='feature-card'>
					<CardHeader>
						<CardTitle>
							<Suspense
								fallback={<Skeleton className='w-9 h-9 rounded-full' />}>
								<span className='feature-card-icon'>
									<ThumbsUpIcon className='size-9' />
								</span>
							</Suspense>
							Client Success Focus
						</CardTitle>
					</CardHeader>
					<CardContent>
						We prioritize understanding and meeting client needs to deliver
						measurable results.
					</CardContent>
				</Card>

				<Card className='feature-card'>
					<CardHeader>
						<CardTitle>
							<Suspense
								fallback={<Skeleton className='w-9 h-9 rounded-full' />}>
								<span className='feature-card-icon'>
									<PiggyBankIcon className='size-9' />
								</span>
							</Suspense>
							Affordable & Flexible Pricing
						</CardTitle>
					</CardHeader>
					<CardContent>
						We offer competitive pricing models tailored to different business
						sizes.
					</CardContent>
				</Card>

				<Card className='feature-card'>
					<CardHeader>
						<CardTitle>
							<Suspense
								fallback={<Skeleton className='w-9 h-9 rounded-full' />}>
								<span className='feature-card-icon'>
									<ClockIcon className='size-9' />
								</span>
							</Suspense>
							On-time & Effective Delivery
						</CardTitle>
					</CardHeader>
					<CardContent>
						We are committed to meeting deadlines while maintaining high quality
						and efficiency.
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default FeaturesSection;
