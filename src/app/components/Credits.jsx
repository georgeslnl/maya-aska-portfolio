import React from 'react';
import FadeUp from './FadeUp';

const Credits = ({ credits, className = 'text-xs md:text-sm lg:text-base m-4 lg:m-8 my-16' }) => (
  <div className={className}>
    {credits.map((credit, index) => (
      <FadeUp key={index}>
        <p>{credit.role} - {credit.name}<br/></p>
      </FadeUp>
    ))}
  </div>
);

  export default Credits;