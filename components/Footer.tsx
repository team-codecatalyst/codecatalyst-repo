import { latoBold } from '@/app/layout';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	Logo,
	TwitterIcon
} from '@/components/Icons';
import { Copyright, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='w-full py-6 bg-foreground dark:bg-background text-gray-400 mt-12'>
			<div className='main-container'>
				<section className='w-full flex flex-col lg:flex-row justify-between gap-4'>
					<section className='flex flex-col'>
						<Link href='/'>
							<h3
								className={`${latoBold.className} flex items-start gap-2 text-neutral-100`}>
								<Logo className='w-8 h-7' />
								TealBit
							</h3>
						</Link>
						<p className='text-neutral-200'>
							Your partner in digital transformation.
						</p>
					</section>
					<div className='w-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 max-h-max'>
						<section className='flex flex-col'>
							<h4 className='text-neutral-200'>Navigation</h4>
							<Link
								href='/'
								className='transition hover:text-neutral-200 hover:underline'>
								Home
							</Link>
							<Link
								href='/about'
								className='transition hover:text-neutral-200 hover:underline'>
								About Us
							</Link>
							<Link
								href='/#contact'
								className='transition hover:text-neutral-200 hover:underline'>
								Contact Us
							</Link>
						</section>
						<section className='flex flex-col'>
							<h4 className='text-neutral-200'>Services</h4>
							<Link
								href='/services/web-development'
								className='transition hover:text-neutral-200 hover:underline'>
								Web Development
							</Link>
							<Link
								href='/services/mobile-app-development'
								className='transition hover:text-neutral-200 hover:underline'>
								Mobile App Development
							</Link>
							<Link
								href='/services/ui-ux-design'
								className='transition hover:text-neutral-200 hover:underline'>
								UI/UX Design
							</Link>
						</section>
						<section className='flex flex-col'>
							<div className='flex flex-row gap-2'>
								<a
									href='https://www.linkedin.com/company/tealbit'
									target='_blank'
									rel='noopener'
									title='Link to LinkedIn account'
									className='footer-socials'>
									<LinkedinIcon className='text-background size-7' />
								</a>
								<a
									href='https://www.instagram.com/tealbit_?igsh=MWlkNGtuODhjaXpvZA%3D%3D&utm_source=qr'
									target='_blank'
									rel='noopener'
									title='Link to Instagram account'
									className='footer-socials'>
									<InstagramIcon className='text-background size-7' />
								</a>
								<a
									href='https://x.com/tealbit_llc?s=21'
									target='_blank'
									rel='noopener'
									title='Link to X (Twitter) account'
									className='footer-socials'>
									<TwitterIcon className='text-background size-7' />
								</a>
								<a
									href='https://www.facebook.com/share/1Tj3rSGj7a/?mibextid=wwXlfr'
									target='_blank'
									rel='noopener'
									title='Link to Facebook account'
									className='footer-socials'>
									<FacebookIcon className='text-background size-7' />
								</a>
							</div>
						</section>
					</div>
				</section>
				<a
					href='tel:+233531323286'
					className='flex w-fit items-center gap-3 mt-6 transition hover:text-gray-200 hover:underline'>
					<Phone size={16} /> +233 (0)53 132 3286
				</a>
				<a
					href='mailto:info.tealbit@gmail.com'
					className='flex w-fit items-center gap-3 transition hover:text-gray-200 hover:underline'>
					<Mail size={16} /> info.tealbit@gmail.com
				</a>
				<h5 className='w-full text-sm text-center sm:text-left text-background/75 font-semibold mt-6 dark:text-neutral-200 inline-flex items-center gap-2'>
					<Copyright /> Copyright {new Date().getFullYear()}, TealBit. All
					rights reserved.
				</h5>
			</div>
		</footer>
	);
};

export default Footer;
