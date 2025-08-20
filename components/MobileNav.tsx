'use client';

import { cn } from '@/lib/utils';
import { MobileIcon } from '@radix-ui/react-icons';
import {
	Briefcase,
	Globe,
	HeadsetIcon,
	HomeIcon,
	InfoIcon,
	MenuIcon,
	Paintbrush,
	XCircleIcon
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from './ui/accordion';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from './ui/drawer';

const MobileNav = () => {
	const navItems = [
		{
			label: 'Home',
			href: '/',
			icon: <HomeIcon />
		},
		{
			label: 'About Us',
			href: '/about',
			icon: <InfoIcon />
		},
		{
			label: 'Services',
			hasDropdown: true,
			icon: <Briefcase />,
			dropdownItems: [
				{
					label: 'Web Development',
					href: '/services/web-development',
					icon: <Globe className='size-5' />
				},
				{
					label: 'Mobile App Development',
					href: '/services/mobile-app-development',
					icon: <MobileIcon className='size-5 stroke-3' />
				},
				{
					label: 'UI/UX Design',
					href: '/services/ui-ux-design',
					icon: <Paintbrush className='size-5' />
				}
			]
		},
		{
			label: 'Contact Us',
			href: '/#contact',
			icon: <HeadsetIcon />
		}
	];

	const pathname = usePathname();

	return (
		<section className='flex items-center text-foreground/65'>
			<Drawer>
				<DrawerTrigger className='md:hidden cursor-pointer'>
					<MenuIcon className='stroke-1' />
				</DrawerTrigger>
				<DrawerContent className='uppercase'>
					<DrawerHeader className='w-full flex justify-between items-center'>
						<DrawerTitle>Menu</DrawerTitle>
						<DrawerClose className='cursor-pointer'>
							<XCircleIcon />
						</DrawerClose>
					</DrawerHeader>
					<section className='mx-auto w-full flex flex-col text-base font-medium px-4 gap-3 pb-6'>
						{navItems.map(
							({ href, hasDropdown, label, icon, dropdownItems }, index) => {
								const isActive = pathname === href;

								return (
									<div key={index}>
										{hasDropdown ? (
											<Accordion
												type='single'
												collapsible
												className='w-full capitalize'>
												<AccordionItem
													value={label}
													className='border-none'>
													<AccordionTrigger className='text-base font-medium text-foreground hover:no-underline py-0 uppercase'>
														<span className='flex gap-3'>
															{icon}
															{label}
														</span>
													</AccordionTrigger>
													<AccordionContent className='flex flex-col text-base font-base capitalize pb-0 space-y-2 mt-1.5 transition'>
														{dropdownItems.map(
															(dropdownItem, dropdownItemIndex) => {
																const isDropdownActive =
																	pathname === dropdownItem.href;

																return (
																	<DrawerClose
																		key={dropdownItemIndex}
																		asChild>
																		<Link
																			href={dropdownItem.href}
																			className={cn(
																				'hover:text-secondary ml-9 flex items-center gap-2',
																				{
																					'text-primary font-bold':
																						isDropdownActive
																				}
																			)}>
																			{dropdownItem.icon}
																			{dropdownItem.label}
																		</Link>
																	</DrawerClose>
																);
															}
														)}
													</AccordionContent>
												</AccordionItem>
											</Accordion>
										) : (
											<DrawerClose asChild>
												<Link
													href={href || ''}
													className={cn(
														'flex gap-3 hover:text-secondary text-base',
														{
															'text-primary font-bold': isActive
														}
													)}>
													{icon}
													{label}
												</Link>
											</DrawerClose>
										)}
									</div>
								);
							}
						)}
					</section>
				</DrawerContent>
			</Drawer>
		</section>
	);
};

export default MobileNav;
