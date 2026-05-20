import WorksContent from './WorksContent';
import { getSanityProjectsForWorks } from '@/sanity/lib/queries';

export const metadata = {
  title: "Works"
};

const worksThumbnailClasses = {
  small: 'md:col-span-2',
  medium: 'md:col-span-3',
  large: 'md:col-span-4',
  wide: 'md:col-span-6',
};

function getWorksThumbnails(project) {
  if (project.worksThumbnails?.length) {
    return project.worksThumbnails.map((thumbnail, index) => ({
      title: project.title,
      href: project.href,
      image: thumbnail.image,
      width: thumbnail.width,
      height: thumbnail.height,
      alt: thumbnail.alt || `${project.title} thumbnail ${index + 1}`,
      className: worksThumbnailClasses[thumbnail.layout] || worksThumbnailClasses.mediumRight,
    }));
  }

  if (!project.image) return [];

  return [{
    ...project,
    className: worksThumbnailClasses.medium,
  }];
}

function mergeWorksData(sanityProjects) {
  const merged = {};

  sanityProjects.forEach((project) => {
    const year = String(project.year);
    const thumbnails = getWorksThumbnails(project);

    if (!thumbnails.length) return;

    merged[year] = [
      ...(merged[year] || []),
      ...thumbnails,
    ];
  });

  return merged;
}

const WorksPage = async () => {
  const sanityProjects = await getSanityProjectsForWorks();
  const worksData = mergeWorksData(sanityProjects);

  return <WorksContent worksData={worksData} />;
};

export default WorksPage;
