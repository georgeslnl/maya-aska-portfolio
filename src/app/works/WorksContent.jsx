'use client';
import React from 'react';
import FadeUp from '../components/FadeUp';
import WorkGroup from './WorkGroup';
import { worksData } from './WorksData';

const WorksContent = () => {
  const sortedYears = Object.keys(worksData).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="w-11/12 lg:w-10/12 mb-10">
      {sortedYears.map((year) => (
        <div key={year}>
          <FadeUp>
            <p className="text-base md:text-lg lg:text-2xl col-end-12 text-end mt-20 mb-2">{year}</p>
          </FadeUp>
          <WorkGroup works={worksData[year]} />
        </div>
      ))}
    </div>
  );
};

export default WorksContent;
