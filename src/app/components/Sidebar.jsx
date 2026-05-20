'use client';
import React from 'react';
import Link from 'next/link';
import useSound from 'use-sound';
import pageTurn from '../sounds/page_turn.mp3';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  const pathname = usePathname();
  const works = [
    // { name: "Onna", link: "/onna" },
    // { name: "Card", link: "/card" },
    // { name: "Gentlewoman", link: "/gentlewoman" },
    // { name: "Noiseless Portraits", link: "/noiseless-portraits" },
    { name: "Girls", link: "/girls" },
    { name: "Atmos", link: "/atmos" },
    // { name: "Portraits In Paris", link: "/portraits-in-paris" },
    { name: "Seven Sisters", link: "/seven-sisters" },
    { name: "Yuura", link: "/yuura" },
    { name: "Canterbury", link: "/canterbury" },
    { name: "La Pyae", link: "/la-pyae" },
    { name: "Roots", link: "/roots" },
    { name: "Still Life", link: "/still-life" },
  ];

  const [play] = useSound(pageTurn);

  return (
    <div className="flex flex-col justify-between min-w-fit px-2 py-1">
      <nav
        className="font-cormorant"
        role="navigation"
        aria-label="Works navigation"
      >
        <Link
          href="/works"
          className="lg:text-3xl md:text-2xl text-xl focus:outline-none"
          aria-haspopup="true"
          aria-expanded={pathname === '/works'}
        >
          Works
        </Link>
        {pathname === '/works' && (
          <ul
            className="transition-opacity duration-300 mt-3"
            role="menu"
            aria-label="Photography works"
          >
            {works.map((work, index) => (
              <li
                key={index}
                className="text-xs md:text-base lg:text-sm hover:scale-105 text-gray-500"
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
        )}
      </nav>
      <a
        href="https://georgeslnl.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[8px] lg:text-xs hover:scale-105 pb-0 absolute bottom-3"
      >
        website by <span className="font-bold">Georges Linel</span>
      </a>
    </div>
  );
};

export default SideNav;