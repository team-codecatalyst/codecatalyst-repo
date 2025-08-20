import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				'flex w-full rounded-full border-2 border-gray-200 outline-hidden focus:border-primary px-4 py-3',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = 'Input';

export { Input };
