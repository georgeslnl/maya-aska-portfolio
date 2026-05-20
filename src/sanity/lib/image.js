import imageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../env';

const builder = projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source) {
  if (!builder || !source) return null;

  return builder.image(source);
}
