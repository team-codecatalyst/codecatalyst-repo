import { FONT_BODY, FONT_HEAD, raleway } from '@/app/layout';
import { cn } from '@/lib/utils';
import React from 'react';

const Header = ({
	title,
	heading,
	subtitle,
	icon,
	titleClassName,
	headingClassName,
	subtitleClassName,
	...props
}: {
	title?: string;
	heading?: string;
	subtitle?: string;
	icon?: React.ReactElement;
	titleClassName?: string;
	headingClassName?: string;
	subtitleClassName?: string;
}) => {
	return (
		<div
			className='mt-6'
			{...props}>
			{title && (
				<div
					className={cn(
						'px-2.5 py-1.5 rounded-full border border-primary/60 bg-primary/25 text-primary text-[0.75rem] uppercase font-extrabold text-center w-fit mx-auto flex justify-center items-center gap-2 tracking-wider',
						FONT_HEAD.className,
						titleClassName
					)}>
					{icon}
					{title}
				</div>
			)}
			<h3
				className={cn(
					'text-center uppercase mt-4',
					raleway.className,
					headingClassName
				)}>
				{heading}
			</h3>
			<p
				className={cn(
					'!mt-0 text-center capitalize text-foreground/65 font-medium',
					FONT_BODY.className,
					subtitleClassName
				)}>
				{subtitle}
			</p>
		</div>
	);
};

export default Header;
