'use client';

import { latoBlack, raleway } from '@/app/layout';
import { Logo } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from './ui/dropdown-menu';

const Navbar = () => {
	const pathname = usePathname();

	const navItems = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'About Us',
			href: '/about'
		},
		{
			label: 'Services',
			href: '/services',
			hasDropdown: true,
			dropdownItems: [
				{
					label: 'Web Development',
					href: '/services/web-development'
				},
				{
					label: 'Mobile App Development',
					href: '/services/mobile-app-development'
				},
				{
					label: 'UI/UX Design',
					href: '/services/ui-ux-design'
				}
			]
		},
		{
			label: 'Contact Us',
			href: '/#contact'
		}
	];

	return (
		<header className='flex justify-center items-center bg-background/45 text-foreground/65 w-full h-fit sticky top-0 left-0 right-0 z-10 backdrop-blur-md'>
			<nav className='nav-container'>
				<Link
					href='/'
					className='flex justify-start items-center'>
					<h3
						className={`${latoBlack.className} hidden sm:flex items-center p-0 text-primary uppercase transition-all hover:scale-105`}>
						TEALBIT
					</h3>
					<Logo className='w-8 h-7 sm:hidden transition-all hover:scale-105' />
				</Link>
				<ul className='hidden md:flex flex-row justify-end items-center gap-4 space-x-4 list-none my-0 mr-9'>
					{navItems.map(
						({ hasDropdown, href, dropdownItems, label }, index) => {
							const isActive = pathname === href;

							return (
								<li
									key={index}
									className={`!m-0 items-center ${raleway.className} uppercase text-sm font-semibold tracking-wide`}>
									{hasDropdown ? (
										<DropdownMenu>
											<DropdownMenuTrigger className='outline-hidden hover:text-foreground uppercase text-sm font-semibold transition flex items-center cursor-pointer'>
												{label} <ChevronDownIcon />
											</DropdownMenuTrigger>
											<DropdownMenuContent className='z-50 mt-2.5 bg-neutral-50 shadow-md'>
												{dropdownItems.map((dropdownItem, index) => {
													const isServiceActive =
														pathname === dropdownItem.href;

													return (
														<DropdownMenuItem
															key={index}
															className='focus:bg-background/20'>
															<Link
																href={dropdownItem.href}
																className={cn(
																	'font-medium transition w-full uppercase',
																	{
																		'text-primary hover:text-secondary font-extrabold':
																			isServiceActive
																	}
																)}>
																{dropdownItem.label}
															</Link>
														</DropdownMenuItem>
													);
												})}
											</DropdownMenuContent>
										</DropdownMenu>
									) : (
										<Link
											key={href}
											href={href}
											className={cn(
												'hover:text-foreground font-semibold transition',
												{
													'text-primary hover:text-secondary font-extrabold':
														isActive
												}
											)}>
											{label}
										</Link>
									)}
								</li>
							);
						}
					)}
				</ul>
				<div className='flex justify-end items-center max-md:gap-2.5'>
					<Button
						variant='primary'
						asChild
						className='shadow-sm shadow-primary/35'>
						<Link href='/quote'>
							Get A Free Quote <ArrowRightIcon />
						</Link>
					</Button>
					<MobileNav />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
