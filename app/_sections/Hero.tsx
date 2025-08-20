import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { antonio } from '../layout';
import { cn } from '@/lib/utils';

const HeroSection = () => {
	return (
		<section className='w-full h-[calc(100svh-48px)] sm:h-[576px] top-0'>
			<div className='h-full w-full relative'>
				<div className='absolute inset-0 z-0 hero'>
					<div className='flex flex-col w-full h-full bg-background/45 px-4 sm:px-6 box-border text-center justify-center items-center backdrop-blur-sm'>
						<h1 className={cn('capitalize', antonio.className)}>
							Elevate your digital presence with{' '}
							<span className='text-primary'>TealBit</span>
						</h1>
						<p className='text-lg font-semibold capitalize mt-2! text-foreground/65'>
							Tailored solutions that drive growth and satisfy your digital
							needs.
						</p>
						<Button
							variant='primary'
							asChild
							className='rounded-full shadow-2xl shadow-primary/45'>
							<Link
								href='/quote'
								className='capitalize mt-4'>
								Start your project
								<ChevronRight className='bg-white text-primary rounded-full w-4 h-4' />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

// bg-[url(/images/default.jpg)] bg-no-repeat bg-cover bg-center
