import ContactForm from '@/components/contact';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { Headset } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
	return (
		<section className='flex flex-col w-full max-w-7xl mt-14 max-md:px-4 md:px-6'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-4 h-max'>
				<div
					className='w-full lg:col-span-7 h-full'
					id='contact'>
					<Header
						title='contact us'
						heading="let's get in touch"
						icon={<Headset />}
					/>
					<p>
						Ready to transform your digital vision into reality? <br />
						We&apos;re excited to hear about your project and explore how we can
						partner to bring it to life.
					</p>

					<div className='mt-4'>
						<h4>Your Next Step:</h4>
						<p className='!mt-2'>
							Schedule a call with our team. We&apos;ll dive into your needs,
							discuss ideas, and map out a plan to make your project a success.
						</p>
					</div>

					<div className='mt-4'>
						<h4>Why Wait?</h4>
						<p className='!mt-2'>
							Your journey to digital excellence starts with a single
							conversation. Let&apos;s make it happen.
						</p>
					</div>
					<Button
						variant='primary'
						className='mt-6'
						asChild>
						<Link href='/quote'>
							Schedule Now <ArrowTopRightIcon />
						</Link>
					</Button>
				</div>
				<div className='w-full lg:col-span-5 max-lg:max-w-4xl'>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
