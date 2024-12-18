'use client';
import React from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import pageTurn from '../sounds/page_turn.mp3';

const SideNav = () => {
  const works = [
    {name: "Onna", link: "/onna"},
    {name: "Card", link: "/card"},
    {name: "Gentlewoman", link: "/gentlewoman"},
    {name: "Noiseless Portraits", link: "/noiseless-portraits"},
    {name: "Roots", link: "/roots"},
    {name: "Still Life", link: "/still-life"},
  ];

  const [play] = useSound(pageTurn);

  return (
    <nav 
      className="px-2 py-1 font-cormorant min-w-fit group" 
      role="navigation" 
      aria-label="Works navigation"
    >
      <Link 
        href="/works" 
        className="lg:text-3xl text-lg mb-4 italic focus:text-red-500 focus:outline-none"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Works
      </Link>
      <ul 
        className="opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300"
        role="menu"
        aria-label="Photography works"
      >
        {works.map((work, index) => (
          <li 
            key={index} 
            className="text-xs lg:text-lg hover:scale-110 cursor-pointer"
            role="none"
          >
            <Link 
              href={work.link}
              onClick={play}
              className="focus:text-red-500 focus:outline-none"
              role="menuitem"
              aria-label={`View ${work.name} photography series`}
            >
              {work.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;