'use client';

import { cn } from '@/lib/utils';
import { ReactElement, useState } from 'react';
import Form from 'next/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Globe, Paintbrush } from 'lucide-react';
import { MobileIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';

interface Service {
	id: string;
	label: string;
	icon: ReactElement;
}

const services: Service[] = [
	{
		id: 'design',
		label: 'UI/UX Design',
		icon: <Paintbrush className='w-7 h-7' />
	},
	{
		id: 'web-development',
		label: 'Web Development',
		icon: <Globe className='w-7 h-7' />
	},
	{
		id: 'mobile-app-development',
		label: 'Mobile App Development',
		icon: <MobileIcon className='w-7 h-7 font-bold' />
	}
];

interface ServiceToggleProps {
	service: Service;
	selected: boolean;
	onClick: (id: string) => void;
}

const ServiceToggle = ({ service, selected, onClick }: ServiceToggleProps) => (
	<div
		role='button'
		onClick={() => onClick(service.label)}
		onKeyDown={(e) => {
			if (e.key === 'Enter') onClick(service.label);
		}}
		className={cn(
			'flex items-center gap-2 p-2 border-2 rounded-lg bg-neutral-50 hover:bg-primary transition cursor-pointer',
			selected
				? 'border-secondary bg-primary text-white hover:bg-secondary/95'
				: 'border-gray-200'
		)}>
		{service.icon}
		<span>{service.label}</span>
	</div>
);

interface FormDataProps {
	name: string;
	email: string;
	phone: string;
	company: string;
	website: string;
	projectDetails: string;
}

const QuoteForm = () => {
	const [formData, setFormData] = useState<FormDataProps>({
		name: '',
		email: '',
		phone: '',
		company: '',
		website: '',
		projectDetails: ''
	});

	const [selectedServices, setSelectedServices] = useState<string[]>([]);

	const [submitting, setSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const toggleService = (id: string) => {
		setSelectedServices((prev) =>
			prev.includes(id)
				? prev.filter((serviceId) => serviceId !== id)
				: [...prev, id]
		);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			// Log form data and selected services for now.
			console.log('Form Data:', formData);
			console.log('Selected Services:', selectedServices);
			// Next step: Submit data to Slack via webhook.

			setSubmitting(true);
			toast.success('Success', {
				description: 'Your form has been submitted successfully!'
			});
		} catch (err) {
			return err;

			toast.error('Error', {
				description: 'An unexpected error has occurred. Please try again.'
			});
		} finally {
			setSubmitting(false);
			setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
				website: '',
				projectDetails: ''
			});
			setSelectedServices([]);
		}
	};

	return (
		<Form
			action={''}
			onSubmit={handleSubmit}
			className='max-w-5xl w-full mx-auto flex flex-col flex-1 gap-4'>
			<div className='grid grid-cols-1 gap-4'>
				<Label htmlFor='name'>Name</Label>
				<Input
					name='name'
					id='name'
					placeholder='Enter name (e.g. John Doe)'
					value={formData.name}
					onChange={handleInputChange}
				/>

				<Label htmlFor='email'>Email Address</Label>
				<Input
					name='email'
					id='email'
					type='email'
					placeholder='e.g. johndoe@gmail.com'
					value={formData.email}
					onChange={handleInputChange}
				/>

				<Label htmlFor='phone'>Phone Number</Label>
				<Input
					name='phone'
					id='phone'
					placeholder='e.g. +233557098084'
					value={formData.phone}
					onChange={handleInputChange}
				/>

				<Label htmlFor='company'>Company/Organization</Label>
				<Input
					name='company'
					id='company'
					placeholder='Enter company or organization name'
					value={formData.company}
					onChange={handleInputChange}
				/>

				<Label htmlFor='website'>Website</Label>
				<Input
					name='website'
					id='website'
					placeholder='Enter existing website (e.g. www.tealbit.co)'
					value={formData.website}
					onChange={handleInputChange}
				/>

				<Label htmlFor='projectDetails'>Project Details</Label>
				<textarea
					name='projectDetails'
					id='projectDetails'
					rows={6}
					placeholder='Tell us more about your project...'
					value={formData.projectDetails}
					onChange={handleInputChange}
					className='flex w-full rounded-lg border-2 border-gray-200 outline-none focus:border-primary px-4 py-2.5 resize-none'
				/>
			</div>

			<div>
				<Label>Select Services:</Label>
				<div className='flex flex-col sm:flex-row gap-2'>
					{services.map((service) => (
						<ServiceToggle
							key={service.id}
							service={service}
							selected={selectedServices.includes(service.label)}
							onClick={toggleService}
						/>
					))}
				</div>
			</div>

			<div>
				<Button
					type='submit'
					variant='primary'
					disabled={submitting}>
					{submitting ? 'Sending...' : 'Get Free Quote'}
				</Button>
			</div>
		</Form>
	);
};

export default QuoteForm;
