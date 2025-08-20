'use client';

import React, { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface PropTypes {
	children: ReactNode;
	animate?: string;
	duration?: number;
	className?: string;
}

const ClientSection = ({
	children,
	animate,
	className,
	duration
}: PropTypes) => {
	const containerRef = useRef(null);

	const el = containerRef.current;

	useGSAP(() => {
		if (animate == 'slideinLeft') {
			gsap.fromTo(
				el,
				{
					xPercent: 100,
					opacity: 0
				},
				{ xPercent: 0, duration: duration ?? 1, opacity: 1 }
			);
		}
	}, [animate]);
	return (
		<div
			ref={containerRef}
			className={className}>
			{children}
		</div>
	);
};

export default ClientSection;
