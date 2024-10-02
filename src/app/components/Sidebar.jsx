'use client';
import React, { useEffect, useState } from 'react';

const SideNav = () => {
  const works = [
    "Gentlewoman",
    "Onna",
    "Card",
    "Noiseless Portraits",
    "Lady Liberty",
    "Temporary Teeth"
  ];

  const [isScrolled, setIsScrolled] = useState(false);

    // Effect to listen for scroll events
    useEffect(() => {
        const handleScroll = () => {
            // Update state based on scroll position
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="fixed left-0 flex flex-col justify-start w-2/5 font-cormorant p-2 h-screen">
    <nav className="">
      <h1 className={`transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-7xl'}`}>Maya-Aska</h1>
      <h2 className="text-3xl mb-6 font-jacquarda">Works</h2>
      <ul className="space-y-2">
        {works.map((work, index) => (
          <li key={index} className="text-lg hover:underline cursor-pointer">
            {work}
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default SideNav;