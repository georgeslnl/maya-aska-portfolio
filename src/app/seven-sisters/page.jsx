import React from 'react';
import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import tan1 from '../images/michelle-tan/tan1.jpg';
import tan2 from '../images/michelle-tan/tan2.jpg';
import tan3 from '../images/michelle-tan/tan3.jpg';
import tan4 from '../images/michelle-tan/tan4.jpg';
import tan5 from '../images/michelle-tan/tan5.jpg';
import tan6 from '../images/michelle-tan/tan6.jpg';
import tan7 from '../images/michelle-tan/tan7.jpg';
import tan8 from '../images/michelle-tan/tan8.jpg';
import FadeUp from '../components/FadeUp';

export const metadata = {
  title: "Seven Sisters"
};

const imageData = [
  { src: tan1, alt: "Seven Sisters 1", span: 12 },
  { src: tan2, alt: "Seven Sisters 2", span: 7 },
  { src: tan3, alt: "Seven Sisters 3", span: 5 },
  { src: tan4, alt: "Seven Sisters 4", span: 12 },
  { src: tan5, alt: "Seven Sisters 5", span: 6 },
  { src: tan6, alt: "Seven Sisters 6", span: 6 },
  { src: tan7, alt: "Seven Sisters 7", span: 12 },
  { src: tan8, alt: "Seven Sisters 8", span: 12 },
];

const credits = [
  { role: "Photography", name: "Maya-Aska" },
  { role: "Creative Direction & Designer", name: "Michelle Tan" },
  { role: "Photography Assistant", name: "Annabelle Lily" },
  { role: "Designer Assistants ", name: "Ali & Jolene" },
  { role: "Models", name: "Marla & Molly" },
];

const SevenSistersPage = () => {

  return (
    <div className="w-11/12 lg:w-10/12 pb-10">
      <h2 className="text-base md:text-lg lg:text-2xl mb-8">Seven Sisters</h2>
      <div>
        <ImageGrid images={imageData} />
        <div className='text-xs md:text-sm lg:text-base mx-4 mt-4 lg:mx-8 lg:mt-8'>
          <FadeUp>
            <p>Campaign for Michelle Tan 2025</p>
          </FadeUp>
        </div>
        <Credits credits={credits} className='text-xs md:text-sm lg:text-base mx-4 lg:mx-8'/>
      </div>
    </div>
  );
};

export default SevenSistersPage;