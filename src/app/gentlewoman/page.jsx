import React from 'react';
import Image from "next/image";
import gentleWoman1 from '../images/gentlewoman/gentlewoman-1.jpg';
import gentleWoman2 from '../images/gentlewoman/gentlewoman-2.jpg';
import gentleWoman3 from '../images/gentlewoman/gentlewoman-3.jpg';
import gentleWoman4 from '../images/gentlewoman/gentlewoman-4.jpg';
import gentleWoman5 from '../images/gentlewoman/gentlewoman-5.jpg';
import gentleWoman6 from '../images/gentlewoman/gentlewoman-6.jpg';

const GentlewomanPage = () => {
  const images = [
    { src: gentleWoman1, alt: "Gentlewoman 1" },
    { src: gentleWoman2, alt: "Gentlewoman 2" },
    { src: gentleWoman3, alt: "Gentlewoman 3" },
    { src: gentleWoman4, alt: "Gentlewoman 4" },
    { src: gentleWoman5, alt: "Gentlewoman 5" },
    { src: gentleWoman6, alt: "Gentlewoman 6" },
  ];

  return (
    <>
      <div className="w-11/12 lg:w-10/12 pb-10">
        <h2 className='text-2xl lg:text-4xl mb-8'>Gentlewoman</h2>
        <div className="grid grid-cols-12 gap-2">
          <Image
            src={gentleWoman1}
            alt="Gentlewoman 1"
            layout="responsive"
            width={500}
            height={300}
            className={'col-span-6'}
          />
          <Image
            src={gentleWoman2}
            alt="Gentlewoman 2"
            layout="responsive"
            width={500}
            height={300}
            className={'col-span-6'}
          />
          <p className='text-xs lg:text-base col-span-12 lg:col-span-6'> 
            Creative Direction & Photography - Maya-Aska<br/>
            Stylist - Moni Jiang<br/>
            Hair - Edoardo Colasanti<br/>
            Makeup - Sophia Pascale<br/>
            Photography Assistants - Olijenson, Alessandro Todisco<br/>
            Hair Assistant - Dongha Kim<br/>
            Makeup Assistant - Alessia Pascale<br/>
            Model - Maya Percival
          </p>
          <Image
            src={gentleWoman3}
            alt="Gentlewoman 3"
            layout="responsive"
            width={500}
            height={300}
            className={'col-span-6 row-start-3'}
          />
          <Image
            src={gentleWoman4}
            alt="Gentlewoman 4"
            layout="responsive"
            width={500}
            height={300}
            className={'col-span-6 row-start-4 col-start-1'}
          />
          <Image
            src={gentleWoman5}
            alt="Gentlewoman 5"
            layout="responsive"
            width={500}
            height={300}
            className={'col-span-6 row-start-5'}
          />
          <Image
            src={gentleWoman6}
            alt="Gentlewoman 6"
            layout="responsive"
            width={500}
            height={300}
            className={'col-span-6 row-start-5'}
          />

          
        </div>
      </div>
    </>
  );
};

export default GentlewomanPage;