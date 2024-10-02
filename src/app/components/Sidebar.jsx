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
    <nav className="sticky top-0 h-full w-1/5 p-1 font-cormorant">
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