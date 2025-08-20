import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.tealbit.co';
	return [
		{
			url: baseUrl,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'yearly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/services/web-development`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/mobile-app-development`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/ui-ux-design`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'daily',
			priority: 0.7,
		},
	];
}
