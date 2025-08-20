import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ContactSchema } from './formSchema';

const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export { cn, ContactSchema };
