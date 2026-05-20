'use client';
import React from 'react';
import useSound from 'use-sound';
import WorkItem from './WorkItem';

const WorkGroup = ({ works }) => {
  const [play] = useSound('/sounds/page_turn.mp3');

  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 gap-x-3">
      {works.map((work, index) => (
        <WorkItem
          key={index}
          {...work}
          onClick={play}
        />
      ))}
    </div>
  );
};

export default WorkGroup;
