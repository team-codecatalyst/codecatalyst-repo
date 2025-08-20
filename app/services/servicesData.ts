export interface Package {
	name: string;
	description: string;
	price?: number;
	features: string[];
	cta?: { label: string; href: string };
}

export interface Service {
	service: string;
	title: string;
	img: string;
	description: string;
	featuresAndBenefits: string[];
	packages: Package[];
}

const servicesData: Service[] = [
	{
		service: 'ui-ux-design',
		title: 'UI/UX Design',
		img: '/images/default.jpg',
		description:
			'A seamless user experience is essential for the success of any digital product. At TealBit, we focus on creating intuitive, visually appealling, and accessible designs that engage users and promote business industry best practices.',
		featuresAndBenefits: [
			'User Research & Strategy',
			'Wireframing and Prototyping',
			'Intuitive Interaction Design',
			'Accessibility Compliance',
			'Scalability & Consistency'
		],

		packages: [
			{
				name: 'Starter',
				description:
					'Ideal for startups and businesses requiring basic web and mobile application designs',
				price: 875,
				features: [
					'Up to 5 pages/screens',
					'Basic UI/UX design',
					'1 round of revisions',
					'3-7 days',
					'Short design-feedback session'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Pro',
				description:
					'Designed for businesses requiring more complex feature designs',
				price: 1350,
				features: [
					'Up to 7 pages/screens',
					'Basic UI/UX design',
					'Custom functionality',
					'Usability-testing session',
					'2 rounds of revisions',
					'5-14 days'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Enterprise',
				description:
					'Tailored for full-scale web and mobile applications designs with advanced features and integrations',
				price: 2250,
				features: [
					'Unlimited number of pages/screens',
					'Custom UI/UX design',
					'Design prototyping',
					'Full UX strategy document',
					'Re-usable design system',
					'2 rounds of revisions',
					'1 year free hosting',
					'15-32 days'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			}
			// {
			// 	name: 'Express',
			// 	description: '',
			// 	features: [],
			// 	cta: {
			// 		label: 'Contact Sales Team',
			// 		href: '',
			// 	},
			// },
		]
	},
	{
		service: 'web-development',
		title: 'Web Development',
		img: '/images/default.jpg',
		description:
			'TealBit specializes in creating dynamic, responsive, and high-performing web applications tailored to industry needs. We prioritize functionality, improved accessibility, and provide seamless user experiences across all devices.',
		featuresAndBenefits: [
			'Custom Website Development',
			'Responsive Design',
			'SEO & Performance Optimization',
			'Ongoing Maintenance & Scalability',
			'Advanced Security Measures',
			'Secure Domains with SSL Certification',
			'Free Hosting for 1 year'
		],
		packages: [
			{
				name: 'Starter',
				description:
					'A budget-friendly option for start-ups and small businesses needing a professional online presence.',
				price: 3508,
				features: [
					'Up to 10 pages',
					'Simple UI/UX design',
					'Mobile responsiveness',
					'Basic SEO & analytics',
					'Free stock-image library access',
					'1 round of revisions',
					'2-6 weeks delivery',
					'1-month free support'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Pro',
				description:
					'Designed for SMEs requiring robust web features, improved design, and additional integrations.',
				price: 7361,
				features: [
					'Up to 25 pages',
					'Custom UI/UX design',
					'Payment gateway integration',
					'CMS',
					'E-commerce functionality',
					'Custom webhooks',
					'User authentication',
					'Dark mode support',
					'SEO optimization',
					'2 rounds of revisions',
					'5-9 weeks delivery',
					'3-month free support'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Enterprise',
				description:
					'Tailored for large businesses needing high-performance, scalable solutions with complex integrations.',
				price: 12619,
				features: [
					'All Pro features',
					'Unlimited pages',
					'Advanced back-end systems',
					'CRM integration',
					'Custom APIs',
					'Enterprise-grade security',
					'User & Admin Dashboard',
					'Dedicated project manager',
					'Custom branding package',
					'10-12 weeks delivery',
					'6-month free support'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Express',
				description:
					'For urgent projects requiring rapid development. Pricing is based on speed and complexity.',
				features: [
					'Based on urgency & business needs',
					'Custom support package'
				],
				cta: {
					label: 'Contact Sales Team',
					href: '/quote'
				}
			}
		]
	},
	{
		service: 'mobile-app-development',
		title: 'Mobile App Development',
		img: '/mobile-app-dev.svg',
		description:
			'Our mobile applications are designed for performance, scalability, and user engagement. We develop cross-platform apps tailored to business needs, ensuring high functionality, security, and seamless integration with business operations.',
		featuresAndBenefits: [
			'Cross-Platform Compatibility',
			'API & Third-Party Integrations',
			'Performance Optimization',
			'Push Notifications & Engagement Tools',
			'Post Launch Maintenance'
		],

		packages: [
			{
				name: 'Starter',
				description:
					'Entry-level mobile solutions for businesses looking to launch a simple yet functional app.',
				price: 3508,
				features: [
					'Up to 7 screens',
					'Basic UI/UX design',
					'Offline support',
					'Push notifications',
					'1 round of revisions',
					'3-6 weeks'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Pro',
				description:
					'Designed for SMEs requiring interactive and feature-rich applications.',
				price: 7361,
				features: [
					'Up to 12 screens',
					'Custom UI/UX design',
					'Third-party API integrations',
					'2 rounds of revisions',
					'6-10 weeks'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Enterprise',
				description:
					'Tailored for full-scale mobile applications with advanced features and integrations',
				price: 12619,
				features: [
					'Unlimited screens',
					'Cloud-based infrastructure',
					'AI/ML features',
					'Custom dashboards',
					'Custom APIs',
					'2 rounds of revisions',
					'10-14 weeks'
				],
				cta: {
					label: 'Get Package',
					href: '/quote'
				}
			},
			{
				name: 'Express',
				description:
					'For urgent projects requiring rapid development. Pricing is based on speed and complexity.',
				features: ['Based on urgent business needs', 'Custom support package'],
				cta: {
					label: 'Contact Sales Team',
					href: '/quote'
				}
			}
		]
	}
];

export default servicesData;
