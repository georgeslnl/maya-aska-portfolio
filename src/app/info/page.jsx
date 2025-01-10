import React from 'react';
import Maya1 from '../images/maya-1.jpg';
import Image from "next/legacy/image";
import { GiFleurDeLys } from "react-icons/gi";
import { GoNorthStar } from "react-icons/go";
import { GiDragonfly } from "react-icons/gi";

export const metadata = {
  title: "Info"
};

const InfoPage = () => {
  return (
    <div className="flex flex-col w-11/12 lg:w-10/12">
      <h2 className="text-base md:text-lg lg:text-2xl mb-8">Info</h2>
      <p className="text-xs md:text-base lg:text-lg ">
        I am Maya-Aska. I am a London based photographer. My upbringing in Paris, Tokyo and London has shaped a multi-cultural lens for me to examine the world and its traditional and contemporary values. Work experience includes: photography assistant to James Perolls including campaign for Ader Error, production for Wonderland Magazine.
      </p>
      <div className="m-auto my-10 md:w-3/4 lg:w-1/2">
        <Image src={Maya1} alt="Maya Aska" />
      </div>
      <div className="p-2 md:mt-auto">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex items-center gap-1 group text-xs">
            <GiDragonfly className='group-hover:animate-twBounce' />
            <p> Email - mayaxaska@gmail.com</p>
          </div>
          <div className="flex items-center gap-1 group text-xs">
            <GiFleurDeLys className='group-hover:animate-twBounce group' />
            <p>Instagram - <a href="https://www.instagram.com/mayaxaska/" className="group-hover:underline">mayaxaska</a></p>
          </div>
          <div className="flex items-center gap-1 group text-xs">
            <GoNorthStar className='group-hover:animate-twBounce' />
            <p>CV upon request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;