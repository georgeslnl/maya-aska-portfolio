'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import onna9 from '../images/onna/onna-9.jpg';
import onna6 from '../images/onna/onna-6.jpg';
import onna7 from '../images/onna/onna-7.jpg';
import onna10 from '../images/onna/onna-10.jpg';
import card6 from '../images/card/card-6.jpg';
import card4 from '../images/card/card-4.jpg';
import card1 from '../images/card/card-1.jpg';
import gentlewoman3 from '../images/gentlewoman/gentlewoman-3.jpg';
import gentlewoman4 from '../images/gentlewoman/gentlewoman-4.jpg';
import ladyliberty5 from '../images/lady-liberty/lady-liberty-5.jpg';
import ladyliberty4 from '../images/lady-liberty/lady-liberty-4.jpg';
import np4 from '../images/noiseless-portraits/np-4.jpg';
import np6 from '../images/noiseless-portraits/np-6.jpg';
import np7 from '../images/noiseless-portraits/np-7.jpg';
import np1 from '../images/noiseless-portraits/np-1.jpg';
import tt2 from '../images/temporary-teeth/temporary-teeth-2.jpg';
import tt1 from '../images/temporary-teeth/temporary-teeth-1.jpg';
import useVisibilityState from '../hooks/useVisibilityState'; 

const ImageWithHover = ({ src, alt, work, isVisible, className }) => {
  return (
    <Link href={`/${work.toLowerCase().replace(' ', '-')}`} className={`block relative group overflow-hidden hover:scale-105 transition duration-500`}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={500}
        height={300}
        className={`transition-opacity animate-slow duration-500 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'} ${className}`}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-500 bg-opacity-50">
        <span className="text-white text-base lg:text-2xl font-bold">{work}</span>
      </div>
    </Link>
  );
};

const WorksPage = () => {
  const [ref1, isVisible1] = useVisibilityState();
  const [ref2, isVisible2] = useVisibilityState();
  const [ref3, isVisible3] = useVisibilityState();
  const [ref4, isVisible4] = useVisibilityState();
  const [ref5, isVisible5] = useVisibilityState();
  const [ref6, isVisible6] = useVisibilityState();
  const [ref7, isVisible7] = useVisibilityState();
  const [ref8, isVisible8] = useVisibilityState();
  const [ref9, isVisible9] = useVisibilityState();
  const [ref10, isVisible10] = useVisibilityState();
  const [ref11, isVisible11] = useVisibilityState();
  const [ref12, isVisible12] = useVisibilityState();
  const [ref13, isVisible13] = useVisibilityState();
  const [ref14, isVisible14] = useVisibilityState();
  const [ref15, isVisible15] = useVisibilityState();
  const [ref16, isVisible16] = useVisibilityState();
  const [ref17, isVisible17] = useVisibilityState();

  return (
    <div className="w-11/12 lg:w-10/12 pb-10">
      <p className="text-base lg:text-2xl col-end-12 text-end">2024</p>
      <div className="grid grid-cols-12 gap-3">
        <div ref={ref1} className="col-span-4 col-end-8">
          <ImageWithHover src={onna9} alt="Onna 9" work="Onna" isVisible={isVisible1} />
        </div>
        <div ref={ref2} className="col-span-5 col-end-13">
          <ImageWithHover src={onna6} alt="Onna 6" work="Onna" isVisible={isVisible2} />
        </div>
        <div ref={ref3} className="col-span-4 col-end-9">
          <ImageWithHover src={onna7} alt="Onna 7" work="Onna" isVisible={isVisible3} />
        </div>
        <div ref={ref4} className="col-span-4 col-end-13">
          <ImageWithHover src={onna10} alt="Onna 10" work="Onna" isVisible={isVisible4} />
        </div>
        <div ref={ref5} className="col-span-4 col-end-5">
          <ImageWithHover src={card6} alt="Card 6" work="Card" isVisible={isVisible5} />
        </div>
        <div ref={ref6} className="col-span-4 col-end-9">
          <ImageWithHover src={card4} alt="Card 4" work="Card" isVisible={isVisible6} />
        </div>
        <div ref={ref7} className="col-span-4 col-end-13">
          <ImageWithHover src={card1} alt="Card 1" work="Card" isVisible={isVisible7} />
        </div>
      </div>
      <p className="text-base lg:text-2xl col-end-12 text-end">2023</p>
      <div className="grid grid-cols-12 gap-3">
        <div ref={ref8} className="col-span-4 col-end-9">
          <ImageWithHover src={gentlewoman3} alt="Gentlewoman 3" work="Gentlewoman" isVisible={isVisible8} />
        </div>
        <div ref={ref9} className="col-span-4 col-end-13">
          <ImageWithHover src={gentlewoman4} alt="Gentlewoman 4" work="Gentlewoman" isVisible={isVisible9} />
        </div>
        <div ref={ref10} className="col-span-4 col-end-13">
          <ImageWithHover src={ladyliberty4} alt="Lady Liberty 4" work="Lady Liberty" isVisible={isVisible10} />
        </div>
        <div ref={ref11} className="col-span-6 col-end-9 row-start-2">
          <ImageWithHover src={ladyliberty5} alt="Lady Liberty 5" work="Lady Liberty" isVisible={isVisible11} />
        </div>
        <div ref={ref12} className="col-span-4 col-end-7">
          <ImageWithHover src={np4} alt="Noiseless Portraits 4" work="Noiseless Portraits" isVisible={isVisible12} />
        </div>
        <div ref={ref13} className="col-span-6 col-end-13">
          <ImageWithHover src={np6} alt="Noiseless Portraits 6" work="Noiseless Portraits" isVisible={isVisible13} />
        </div>
        <div ref={ref14} className="col-span-6 col-end-9">
          <ImageWithHover src={np1} alt="Noiseless Portraits 1" work="Noiseless Portraits" isVisible={isVisible14} />
        </div>
        <div ref={ref15} className="col-span-4 col-end-13">
          <ImageWithHover src={np7} alt="Noiseless Portraits 7" work="Noiseless Portraits" isVisible={isVisible15} />
        </div>
      </div>
      <p className="text-base lg:text-2xl col-end-12 text-end">2022</p>
      <div className="grid grid-cols-12 gap-3">
        <div ref={ref16} className="col-span-4 col-end-9">
          <ImageWithHover src={tt2} alt="Temporary Teeth 2" work="Temporary Teeth" isVisible={isVisible16} />
        </div>
        <div ref={ref17} className="col-span-4 col-end-13">
          <ImageWithHover src={tt1} alt="Temporary Teeth 1" work="Temporary Teeth" isVisible={isVisible17} />
        </div>
      </div>
    </div>
  );
};

export default WorksPage;