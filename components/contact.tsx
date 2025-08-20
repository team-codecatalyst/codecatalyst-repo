'use client';

import React, { useState } from 'react';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import Form from 'next/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ContactSchema } from '@/lib/utils';
import { toast } from 'sonner';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [loading, setLoading] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((f) => ({ ...f, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => {
				const copy = { ...prev };
				delete copy[name];
				return copy;
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (loading) return;

		setLoading(true);
		setErrors({});

		const parsed = ContactSchema.safeParse(formData);

		if (!parsed.success) {
			const fieldErrors: Record<string, string> = {};
			parsed.error.issues.forEach((issue) => {
				const field = issue.path[0];
				if (typeof field === 'string' && !fieldErrors[field]) {
					fieldErrors[field] = issue.message;
				}
			});
			setErrors(fieldErrors);
			toast.error('Please fix the highlighted errors.');
			setLoading(false);
			return;
		}

		try {
			// TODO: replace with real API call
			await new Promise((res) => setTimeout(res, 800));

			toast.success('Message sent successfully.');
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			});
		} catch (err) {
			console.log(err);
			toast.error('Failed to send message. Try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form
			action={''}
			onSubmit={handleSubmit}
			className='w-full max-w-4xl mx-auto flex flex-col flex-1 gap-4 bg-neutral-50 rounded-xl shadow-2xl p-6'>
			<p className='text-foreground/65'>
				Fill the form and we&apos;ll get back to you in 24 hours.
			</p>
			<div className='w-full grid grid-cols-1 gap-4'>
				<Label htmlFor='name'>Full Name</Label>
				<Input
					name='name'
					id='name'
					placeholder='Your full name'
					value={formData.name}
					onChange={handleInputChange}
					autoComplete='off'
				/>
				<span className='text-sm font-semibold text-red-700'>
					{errors.name}
				</span>

				<Label htmlFor='email'>Email Address</Label>
				<Input
					name='email'
					id='email'
					type='email'
					placeholder='email@address.com'
					value={formData.email}
					onChange={handleInputChange}
					autoComplete='off'
				/>
				<span className='text-sm font-semibold text-red-700'>
					{errors.email}
				</span>

				<Label htmlFor='phone'>Phone Number</Label>
				<Input
					name='phone'
					id='phone'
					placeholder='e.g. +233557098084'
					value={formData.phone}
					onChange={handleInputChange}
					autoComplete='off'
				/>
				<span className='text-sm font-semibold text-red-700'>
					{errors.phone}
				</span>

				<Label htmlFor='subject'>Subject</Label>
				<Input
					name='subject'
					id='subject'
					placeholder='Title of your message'
					value={formData.subject}
					onChange={handleInputChange}
					autoComplete='off'
				/>
				<span className='text-sm font-semibold text-red-700'>
					{errors.subject}
				</span>

				<Label htmlFor='message'>Your Message</Label>
				<textarea
					name='message'
					id='message'
					placeholder='Tell us more...'
					value={formData.message}
					onChange={handleInputChange}
					rows={6}
					className='flex w-full rounded-lg border-2 border-gray-200 outline-hidden focus:border-primary px-4 py-3 resize-none'
				/>
				<span className='text-sm font-semibold text-red-700'>
					{errors.message}
				</span>
			</div>

			<div>
				<Button
					type='submit'
					variant='primary'
					disabled={loading}
					className='w-full'>
					{loading ? 'Sending message...' : 'Send Message'} <PaperPlaneIcon />
				</Button>
			</div>
		</Form>
	);
};

export default ContactForm;
