'use client';
import React from 'react';
import useSound from 'use-sound';
import pageTurn from '../sounds/page_turn.mp3';
import WorkItem from './WorkItem';

const WorkGroup = ({ works }) => {
  const [play] = useSound(pageTurn);

  return (
    <div className="grid grid-cols-12 gap-x-3 gap-y-8">
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