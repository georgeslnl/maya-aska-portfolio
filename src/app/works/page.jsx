import WorksContent from './WorksContent';
import { worksData as staticWorksData } from './WorksData';
import { getSanityProjectsForWorks } from '@/sanity/lib/queries';

export const metadata = {
  title: "Works"
};

const worksThumbnailClasses = {
  smallLeft: 'md:col-span-2 md:col-end-7',
  smallMiddle: 'md:col-span-2 md:col-end-10',
  smallRight: 'md:col-span-2 md:col-end-13',
  mediumLeft: 'md:col-span-3 md:col-end-7',
  mediumMiddle: 'md:col-span-3 md:col-end-10',
  mediumRight: 'md:col-span-3 md:col-end-13',
  wide: 'md:col-span-6 md:col-end-13',
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
    className: project.className || worksThumbnailClasses.mediumRight,
  }];
}

function mergeWorksData(staticData, sanityProjects) {
  const merged = { ...staticData };

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
  const worksData = mergeWorksData(staticWorksData, sanityProjects);

  return <WorksContent worksData={worksData} />;
};

export default WorksPage;
