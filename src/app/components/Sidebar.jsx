import React from 'react';

const SideNav = () => {
  const works = [
    "Gentlewoman",
    "Onna",
    "Card",
    "Noiseless Portraits",
    "Lady Liberty",
    "Temporary Teeth"
  ];

  return (
    <nav className="h-full w-64 p-8 bg-white text-black font-cormorant">
      <h2 className="text-3xl mb-6 font-jacquarda">Works</h2>
      <ul className="space-y-2">
        {works.map((work, index) => (
          <li key={index} className="text-lg hover:underline cursor-pointer">
            {work}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;