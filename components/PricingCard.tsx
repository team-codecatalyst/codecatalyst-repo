import Link from 'next/link';

import { Check } from 'lucide-react';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from './ui/card';
import { Button } from './ui/button';
import { FONT_BODY, FONT_HEAD } from '@/app/layout';

import { Package } from '@/app/services/servicesData';
import { cn } from '@/lib/utils';

const PricingCard = ({ name, description, price, features, cta }: Package) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					{name}
					<p
						className={cn(
							'text-base font-medium text-foreground/65 mt-4 leading-tight tracking-tight normal-case',
							FONT_BODY.className
						)}>
						{description}
					</p>
					{price && (
						<div className='mt-4 text-base text-foreground/85 font-semibold'>
							Starting at
							<span
								className={cn(
									'text-primary text-4xl block font-light',
									FONT_HEAD.className
								)}>
								GHS {price}
							</span>
						</div>
					)}
				</CardTitle>
			</CardHeader>
			<CardContent>
				{features.map((pkgFeatures, pkgFeaturesIndex) => (
					<CardDescription
						key={pkgFeaturesIndex}
						className='flex items-center gap-1 mt-0! py-py text-foreground text-[15px]'>
						<Check className='text-primary inline size-4' /> {pkgFeatures}
					</CardDescription>
				))}

				<Button
					variant={'primary'}
					asChild
					className='mt-2'>
					<Link href={cta?.href || ''}>Get {name}</Link>
				</Button>
			</CardContent>
		</Card>
	);
};

export default PricingCard;
