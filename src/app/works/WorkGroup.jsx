'use client';
import useSound from 'use-sound';
import WorkItem from './WorkItem';

const WorkGroup = ({ works }) => {
  const [play] = useSound('/sounds/page_turn.mp3');

  return (
    <>
      <div className="flex flex-col gap-y-4 md:hidden">
        {works.map((work, index) => (
          <WorkItem
            key={index}
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
            key={index}
            {...work}
            onClick={play}
          />
        ))}
      </div>
    </>
  );
};

export default WorkGroup;