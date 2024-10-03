'use client';
import React from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import pageTurn from '../sounds/page_turn.mp3';

const SideNav = () => {
  const works = [
    {name: "Gentlewoman", link: "/gentlewoman"},
    {name: "Onna", link: "/onna"},
    {name: "Card", link: "/card"},
    {name: "Noiseless Portraits", link: "/noiseless-portraits"},
    {name: "Lady Liberty", link: "/lady-liberty"},
    {name: "Temporary Teeth", link: "/temporary-teeth"},
  ];

  const [play] = useSound(pageTurn);

  return (
    <nav className="px-2 py-1 font-cormorant min-w-fit ">
      <h2 className="lg:text-3xl text-lg mb-4 italic font-jacquarda">Works</h2>
      <ul className="">
        {works.map((work, index) => (
          <li key={index} className="text-xs lg:text-lg hover:underline  cursor-pointer">
            <Link 
            onClick={play}
            href={work.link} className='focus:text-red-500'>
              {work.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;