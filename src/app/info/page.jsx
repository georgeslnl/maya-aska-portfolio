import React from 'react';
import Maya1 from '../images/onna/onna-9.jpg';
import Image from 'next/image';
import { GiFleurDeLys } from "react-icons/gi";
import { GoNorthStar } from "react-icons/go";
import { GiDragonfly } from "react-icons/gi";

export const metadata = {
  title: "Info"
};

const InfoPage = () => {
  return (
      <div tabIndex={1} className="flex flex-col w-10/12 lg:w-11/12 font-cormorant">
        <h2 className="text-base lg:text-2xl mb-8">Info</h2>
        
        <p className="text-sm lg:text-lg ">
          I am Maya-Aska. I am a London based photographer. My upbringing in Paris, Tokyo and London has shaped a multi-cultural lens for me to examine the world and its traditional and contemporary values. Work experience includes: photography assistant to James Perolls including campaign for Ader Error, production for Wonderland Magazine.
        </p>
        <div className="m-auto"> 
        <Image src={Maya1} alt="Maya Aska" width={400} height={200}/>
        </div>
        <div className="mt-auto lg:p-2 border-t border-black">
          <div className="flex flex-col lg:flex-row items-center justify-between text-sm lg:text-lg">
          <div className="flex items-center gap-1 group">
          <GiDragonfly className='group-hover:animate-twBounce' />
          <p> Email - mayaxaska@gmail.com</p>
          </div>
          <div className="flex items-center gap-1 group">
          <GiFleurDeLys className='group-hover:animate-twBounce group' />
            <p>Instagram - <a href="https://www.instagram.com/mayaxaska/" className="group-hover:underline">mayaxaska</a></p>
          </div>
          <div className="flex items-center gap-1 group">
            <GoNorthStar className='group-hover:animate-twBounce' />
            <p>CV upon request</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default InfoPage;