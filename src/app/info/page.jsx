import React from 'react';
import Maya1 from '../images/maya-1.jpg';
import Image from "next/image";
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
        Maya-Aska is a London based photographer.

      </p>
      <p className="text-xs md:text-base lg:text-lg">
        Her work often captures individuals within a soft, colourful world, with cinematic stillness. Her references lie in documentary photography and land artists, the latter informing her use of set design and natural elements in her images. She is particularly interested in the symbolic quality of clothing, props and environment and how they reflect her subject’s personal stories.
      </p>
      <p className="text-xs md:text-base lg:text-lg">
        Maya-Aska’s commissions include EE72, Huishan Zhang, Atmos and Heroine Magazine, with work featured in Dazed, AnOther Magazine, Women’s Wear Daily, SHOWstudio and 1Granary.
      </p>
      <p className="text-xs md:text-base lg:text-lg">
        Represented in Japan and Asia by Bianco Bianco.
      </p>
      <div className="m-auto my-4 md:w-3/4 lg:w-1/3">
        <Image src={Maya1} alt="Maya Aska" className="h-auto w-full" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="flex flex-col m-auto">
        <p className="text-xs md:text-sm lg:text-base">
          Europe <a href="mailto:mayaxaska@gmail.com">mayaxaska@gmail.com</a><br />
          Japan <a href="mailto:ryosuke@biancobian.com">ryosuke@biancobian.com</a><br />
          Asia <a href="mailto:natsuki@biancobian.com">natsuki@biancobian.com</a>
        </p>
      </div>
      <div className="p-2 md:mt-auto">
        <div className="flex flex-col md:flex-row items-start justify-between">
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