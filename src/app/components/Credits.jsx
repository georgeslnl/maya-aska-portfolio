import React from 'react';
import FadeUp from './FadeUp';

const Credits = ({ credits }) => (
    <div className='text-xs lg:text-base m-8 my-16'>
      {credits.map((credit, index) => (
        <FadeUp key={index}>
          <p>{credit.role} - {credit.name}<br/></p>
        </FadeUp>
      ))}
    </div>
  );

  export default Credits;