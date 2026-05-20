'use client';
import FadeUp from '../components/FadeUp';
import WorkGroup from './WorkGroup';

const WorksContent = ({ worksData }) => {
  const sortedYears = Object.keys(worksData).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="w-11/12 lg:w-10/12 mb-10">
      {sortedYears.map((year) => (
        <div key={year} className="mb-20">
          <FadeUp>
            <p className="text-base md:text-lg lg:text-2xl col-end-12 text-end mb-2">{year}</p>
          </FadeUp>

          <div className="flex flex-col gap-y-8">
            {worksData[year].map((project) => (
              <WorkGroup key={project.title} works={project.thumbnails} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksContent;