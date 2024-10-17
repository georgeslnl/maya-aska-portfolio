import React from 'react';
import FadeUp from './FadeUp';

const Credits = ({ credits }) => (
    <p className='text-xs lg:text-base m-8'>
      {credits.map((credit, index) => (

        <FadeUp key={index}>
          {credit.role} - {credit.name}<br/>
        </FadeUp>
      ))}
    </p>
  );

  export default Credits;