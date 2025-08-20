import Header from '@/components/Header';
import {
	ChartNoAxesCombined,
	CircleDot,
	Pickaxe,
	Rocket,
	ScanSearchIcon,
	WorkflowIcon
} from 'lucide-react';

const Workflow = () => {
	const workflow = [
		{
			title: 'Discover',
			description:
				"We get to know your goals, define the scope, and agree on timelines so everyone's on the same page.",
			icon: <ScanSearchIcon />
		},
		{
			title: 'Build',
			description:
				'We design, code, and document in fast, transparent sprints while keeping you updated at every step.',
			icon: <Pickaxe />
		},
		{
			title: 'Launch',
			description:
				'We test thoroughly, deploy smoothly, and hand everything over ready for real users.',
			icon: <Rocket />
		},
		{
			title: 'Grow',
			description:
				'We monitor performance, make improvements, and help you scale without interruptions.',
			icon: <ChartNoAxesCombined />
		}
	];

	return (
		<section className='main-container'>
			<Header
				title='our design process'
				heading='how we deliver'
				icon={<WorkflowIcon />}
			/>

			<div className='flex flex-col max-w-6xl mx-auto mt-10'>
				{workflow.map(({ title, icon, description }) => (
					<div
						className='flex flex-col'
						key={title}>
						<div className='flex items-center gap-4'>
							<CircleDot className='text-primary w-4 h-4' />
							<h4 className='flex items-center gap-2'>
								{icon} {title}
							</h4>
						</div>

						<div className='flex border-l border-l-primary/50 ml-2 pb-6'>
							<p className='pl-6'>{description}</p>
						</div>
					</div>
				))}
			</div>

			<p className='mt-6 text-center'>
				At TealBit, we&apos;re dedicated to transforming digital experiences.
				Our forward-thinking team blends technical expertise with creative
				insight to build solutions that not only look great but also drive real
				business results. We believe in partnering with our clients to craft
				digital experiences that are as engaging as they are effective.
			</p>
		</section>
	);
};

export default Workflow;
