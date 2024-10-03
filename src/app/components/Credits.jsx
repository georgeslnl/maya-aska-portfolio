import React from 'react';

const Credits = ({ credits }) => (
    <p className='text-xs lg:text-base px-2'>
      {credits.map((credit, index) => (
        <React.Fragment key={index}>
          {credit.role} - {credit.name}<br/>
        </React.Fragment>
      ))}
    </p>
  );

  export default Credits;