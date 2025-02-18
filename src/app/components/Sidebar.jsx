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
    {name: "Portraits In Paris", link: "/portraits-in-paris"},
  ];

  const [play] = useSound(pageTurn);

  return (
    <div className="flex flex-col justify-between min-w-fit px-2 py-1 " >
      <nav
        className="font-cormorant group"
        role="navigation"
        aria-label="Works navigation"
      >
        <Link
          href="/works"
          className="lg:text-3xl md:text-2xl text-xl mb-4 italic focus:outline-none"
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
              className="text-xs md:text-base lg:text-lg hover:scale-105"
              role="none"
            >
              <Link
                href={work.link}
                onClick={play}
                className="focus:outline-none"
                role="menuitem"
                aria-label={`View ${work.name} photography series`}
              >
                {work.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="https://georgeslnl.github.io/"
        target="_blank"
        className="text-[8px] lg:text-xs hover:scale-105 pb-0 absolute bottom-3"
      >
        website by <span className='font-bold'>Georges Linel</span>
      </a>
    </div>
  );
};

export default SideNav;