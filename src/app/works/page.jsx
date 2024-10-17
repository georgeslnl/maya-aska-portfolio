'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '../components/FadeUp';
import useSound from 'use-sound';
import pageTurn from '../sounds/page_turn.mp3';

// Import all images
import onna9 from '../images/onna/onna-9.jpg';
import onna6 from '../images/onna/onna-6.jpg';
import onna7 from '../images/onna/onna-7.jpg';
import onna10 from '../images/onna/onna-10.jpg';
import card6 from '../images/card/card-6.jpg';
import card4 from '../images/card/card-4.jpg';
import card1 from '../images/card/card-1.jpg';
import gentlewoman3 from '../images/gentlewoman/gentlewoman-3.jpg';
import gentlewoman4 from '../images/gentlewoman/gentlewoman-4.jpg';
import ladyliberty5 from '../images/lady-liberty/lady-liberty-5.jpg';
import ladyliberty4 from '../images/lady-liberty/lady-liberty-4.jpg';
import np4 from '../images/noiseless-portraits/np-4.jpg';
import np6 from '../images/noiseless-portraits/np-6.jpg';
import np7 from '../images/noiseless-portraits/np-7.jpg';
import np1 from '../images/noiseless-portraits/np-1.jpg';
import tt2 from '../images/temporary-teeth/temporary-teeth-2.jpg';
import tt1 from '../images/temporary-teeth/temporary-teeth-1.jpg';

// Define works data
const worksData = {
  '2024': [
    { title: 'Onna', image: onna9, alt: 'Onna 9', href: '/onna', className: 'col-span-4 col-end-8' },
    { title: 'Onna', image: onna6, alt: 'Onna 6', href: '/onna', className: 'col-span-5 col-end-13' },
    { title: 'Onna', image: onna7, alt: 'Onna 7', href: '/onna', className: 'col-span-4 col-end-9' },
    { title: 'Onna', image: onna10, alt: 'Onna 10', href: '/onna', className: 'col-span-4 col-end-13' },
    { title: 'Card', image: card6, alt: 'Card 6', href: '/card', className: 'col-span-4 col-end-5' },
    { title: 'Card', image: card4, alt: 'Card 4', href: '/card', className: 'col-span-4 col-end-9' },
    { title: 'Card', image: card1, alt: 'Card 1', href: '/card', className: 'col-span-4 col-end-13' },
  ],
  '2023': [
    { title: 'Gentlewoman', image: gentlewoman3, alt: 'Gentlewoman 3', href: '/gentlewoman', className: 'col-span-4 col-end-9' },
    { title: 'Gentlewoman', image: gentlewoman4, alt: 'Gentlewoman 4', href: '/gentlewoman', className: 'col-span-4 col-end-13' },
    { title: 'Lady Liberty', image: ladyliberty4, alt: 'Lady Liberty 4', href: '/lady-liberty', className: 'col-span-4 col-end-13' },
    { title: 'Lady Liberty', image: ladyliberty5, alt: 'Lady Liberty 5', href: '/lady-liberty', className: 'col-span-6 col-end-9 row-start-2' },
    { title: 'Noiseless Portraits', image: np4, alt: 'Noiseless Portraits 4', href: '/noiseless-portraits', className: 'col-span-4 col-end-7' },
    { title: 'Noiseless Portraits', image: np6, alt: 'Noiseless Portraits 6', href: '/noiseless-portraits', className: 'col-span-6 col-end-13' },
    { title: 'Noiseless Portraits', image: np1, alt: 'Noiseless Portraits 1', href: '/noiseless-portraits', className: 'col-span-6 col-end-9' },
    { title: 'Noiseless Portraits', image: np7, alt: 'Noiseless Portraits 7', href: '/noiseless-portraits', className: 'col-span-4 col-end-13' },
  ],
  '2022': [
    { title: 'Temporary Teeth', image: tt2, alt: 'Temporary Teeth 2', href: '/temporary-teeth', className: 'col-span-4 col-end-9' },
    { title: 'Temporary Teeth', image: tt1, alt: 'Temporary Teeth 1', href: '/temporary-teeth', className: 'col-span-4 col-end-13' },
  ],
};

// WorkItem component
const WorkItem = ({ title, image, alt, href, className }) => {
  

  return (
    <FadeUp className={className} playSound={true}>
      <Link href={href} className="block relative group overflow-hidden hover:scale-105 transition duration-500">
        <Image src={image} alt={alt} layout="responsive" width={500} height={300} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-500 bg-opacity-50">
          <span className="text-white text-base lg:text-2xl font-bold">{title}</span>
        </div>
      </Link>
    </FadeUp>
  );
};

// WorkGroup component
const WorkGroup = ({ works }) => {

  const [play] = useSound(pageTurn);

  return (<div className="grid grid-cols-12 gap-3">
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

// Main WorksPage component
const WorksPage = () => {
  const sortedYears = Object.keys(worksData).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="w-11/12 lg:w-10/12 mb-10">
      {sortedYears.map((year) => (
        <div key={year}>
          <FadeUp>
            <p className="text-base lg:text-2xl col-end-12 text-end">{year}</p>
          </FadeUp>
          <WorkGroup works={worksData[year]} />
        </div>
      ))}
    </div>
  );
};

export default WorksPage;