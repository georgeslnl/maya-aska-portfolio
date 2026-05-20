import { groq } from 'next-sanity';
import { client } from './client';
import { hasSanityConfig } from '../env';

const imageFields = `
  "url": image.asset->url,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  alt,
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
    credits[]{role, name}
  }
`;

export const projectsForWorksQuery = groq`
  *[_type == "project" && defined(slug.current)] | order(year desc, publishedAt desc, title asc) {
    _id,
    title,
    year,
    "href": "/" + slug.current,
    "image": mainImage.asset->url,
    "width": mainImage.asset->metadata.dimensions.width,
    "height": mainImage.asset->metadata.dimensions.height,
    "alt": mainImageAlt,
    "className": worksGridClass
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

export async function getSanityProjectsForWorks() {
  if (!hasSanityConfig) return [];

  return client.fetch(projectsForWorksQuery, {}, { next: { revalidate: 60 } });
}

export async function getSanityProjectSlugs() {
  if (!hasSanityConfig) return [];

  return client.fetch(projectSlugsQuery, {}, { next: { revalidate: 60 } });
}

export async function getSanityProjectBySlug(slug) {
  if (!hasSanityConfig) return null;

  return client.fetch(projectBySlugQuery, { slug }, { next: { revalidate: 60 } });
}
