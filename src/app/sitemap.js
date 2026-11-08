import { getSanityProjectSlugs } from '@/sanity/lib/queries';

const BASE_URL = 'https://maya-aska.com';

const staticPages = [
  { path: '/', changeFrequency: 'yearly', priority: 1 },
  { path: '/works', changeFrequency: 'yearly', priority: 0.9 },
  { path: '/info', changeFrequency: 'yearly', priority: 0.8 },
];

export default async function sitemap() {
  const projects = await getSanityProjectSlugs();
  const lastModified = new Date();

  const staticEntries = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projectEntries = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${BASE_URL}/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    }));

  return [...staticEntries, ...projectEntries];
}
