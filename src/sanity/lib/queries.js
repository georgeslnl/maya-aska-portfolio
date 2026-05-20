import { groq } from 'next-sanity';
import { client } from './client';
import { hasSanityConfig } from '../env';

const imageFields = `
  "url": image.asset->url,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  alt,
  layout,
  span,
  colStart,
  caption
`;

const contentFields = `
  ...,
  _type == "projectImage" => {
    ${imageFields}
  },
  _type == "creditsBlock" => {
    columns,
    credits[]{role, name}
  }
`;

export const projectsForWorksQuery = groq`
  *[_type == "project" && defined(slug.current)] | order(year desc, publishedAt desc, title asc) {
    _id,
    title,
    year,
    "href": "/" + slug.current,
    "showInSidebar": showInSidebar != false,
    worksThumbnails[]{
      "image": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
      alt,
      layout
    },
    "image": mainImage.asset->url,
    "width": mainImage.asset->metadata.dimensions.width,
    "height": mainImage.asset->metadata.dimensions.height,
    "alt": mainImageAlt,
    "className": worksGridClass
  }
`;

export const projectsForNavigationQuery = groq`
  *[_type == "project" && defined(slug.current) && showInSidebar != false] | order(year desc, publishedAt desc, title asc) {
    _id,
    title,
    "href": "/" + slug.current
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    year,
    "slug": slug.current,
    content[]{${contentFields}}
  }
`;

async function fetchFromSanity(query, params = {}) {
  if (!hasSanityConfig) return null;

  try {
    return await client.fetch(query, params, { next: { revalidate: 60 } });
  } catch (error) {
    console.warn('Sanity fetch failed:', error.message);
    return null;
  }
}

export async function getSanityProjectsForWorks() {
  return (await fetchFromSanity(projectsForWorksQuery)) || [];
}

export async function getSanityProjectsForNavigation() {
  return (await fetchFromSanity(projectsForNavigationQuery)) || [];
}

export async function getSanityProjectSlugs() {
  return (await fetchFromSanity(projectSlugsQuery)) || [];
}

export async function getSanityProjectBySlug(slug) {
  return fetchFromSanity(projectBySlugQuery, { slug });
}
