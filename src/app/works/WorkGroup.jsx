'use client';
import WorkItem from './WorkItem';
import usePageTurnSound from '@/app/hooks/usePageTurnSound';

const WorkGroup = ({ works }) => {
  const play = usePageTurnSound();

  return (
    <>
      <div className="flex flex-col gap-y-4 md:hidden">
        {works.map((work, index) => (
          <WorkItem
            key={work._key || index}
            {...work}
            style={undefined}
            onClick={play}
          />
        ))}
      </div>

      <div
        className="hidden md:grid md:grid-cols-12 gap-x-3"
        style={{ gridAutoFlow: 'dense' }}
      >
        {works.map((work, index) => (
          <WorkItem
            key={work._key || index}
            {...work}
            onClick={play}
          />
        ))}
      </div>
    </>
  );
};

export default WorkGroup;
