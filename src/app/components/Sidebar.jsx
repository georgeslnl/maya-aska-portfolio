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
    <nav className="px-2 py-1 font-cormorant min-w-fit ">
      <h2 className="lg:text-3xl text-lg mb-4 italic font-jacquarda">Works</h2>
      <ul className="">
        {works.map((work, index) => (
          <li key={index} className="text-xs lg:text-lg hover:underline cursor-pointer">
            {work}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;