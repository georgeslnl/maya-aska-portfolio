import WorksContent from './WorksContent';
import { worksData as staticWorksData } from './WorksData';
import { getSanityProjectsForWorks } from '@/sanity/lib/queries';

export const metadata = {
  title: "Works"
};

function mergeWorksData(staticData, sanityProjects) {
  const merged = { ...staticData };

  sanityProjects.forEach((project) => {
    const year = String(project.year);

    merged[year] = [
      ...(merged[year] || []),
      {
        ...project,
        className: project.className || 'md:col-span-3 md:col-end-13',
      },
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
