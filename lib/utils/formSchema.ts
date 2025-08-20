import * as z from 'zod';

export const ContactSchema = z.object({
	name: z
		.string({ error: 'Name is required' })
		.min(1, { error: 'Name cannot be empty' }),
	email: z
		.email({ error: 'Email is not valid' })
		.min(1, { error: 'Email is required' }),
	phone: z
		.string()
		.min(1, { error: 'Phone number is required' })
		.regex(/^\+?\d{7,15}$/, { error: 'Invalid phone number format' }),
	subject: z.string().min(1, { error: 'Subject is required' }),
	message: z.string().min(1, { error: 'Message is required' })
});
