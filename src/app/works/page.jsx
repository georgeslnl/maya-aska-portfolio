import WorksContent from './WorksContent';
import { getSanityProjectsForWorks } from '@/sanity/lib/queries';

export const metadata = {
  title: "Works"
};

function getWorksThumbnails(project) {
  if (project.worksThumbnails?.length) {
    const colWidths = { small: 2, medium: 3, large: 4, wide: 6 };
    let currentColEnd = 13;

    return project.worksThumbnails.map((thumbnail, index) => {
      const colWidth = colWidths[thumbnail.layout] || 3;
      const colEnd = currentColEnd;
      currentColEnd -= colWidth;

      return {
        title: project.title,
        href: project.href,
        image: thumbnail.image,
        width: thumbnail.width,
        height: thumbnail.height,
        alt: thumbnail.alt || `${project.title} thumbnail ${index + 1}`,
        style: {
          gridColumn: `span ${colWidth} / ${colEnd}`,
        },
      };
    });
  }

  if (!project.image) return [];

  return [{
    ...project,
    style: {
      gridColumn: 'span 3 / 13',
    },
  }];
}

function mergeWorksData(sanityProjects) {
  const merged = {};

  sanityProjects.forEach((project) => {
    const year = String(project.year);
    const thumbnails = getWorksThumbnails(project);

    if (!thumbnails.length) return;

    if (!merged[year]) merged[year] = [];

    merged[year].push({ title: project.title, thumbnails });
  });

  return merged;
}

const WorksPage = async () => {
  const sanityProjects = await getSanityProjectsForWorks();
  const worksData = mergeWorksData(sanityProjects);

  return <WorksContent worksData={worksData} />;
};

export default WorksPage;