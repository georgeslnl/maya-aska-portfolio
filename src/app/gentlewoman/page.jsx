import React from 'react';
import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import gentleWoman1 from '../images/gentlewoman/gentlewoman-1.jpg';
import gentleWoman2 from '../images/gentlewoman/gentlewoman-2.jpg';
import gentleWoman3 from '../images/gentlewoman/gentlewoman-3.jpg';
import gentleWoman4 from '../images/gentlewoman/gentlewoman-4.jpg';
import gentleWoman5 from '../images/gentlewoman/gentlewoman-5.jpg';
import gentleWoman6 from '../images/gentlewoman/gentlewoman-6.jpg';

export const metadata = {
  title: "Gentlewoman"
};

const imageData = [
  { src: gentleWoman3, alt: "Gentlewoman 3", span: 6 },
  { src: gentleWoman4, alt: "Gentlewoman 4", span: 6 },
  { src: gentleWoman2, alt: "Gentlewoman 2", span: 6 },
  { src: gentleWoman5, alt: "Gentlewoman 5", span: 6 },
];

const credits = [
  { role: "Photography", name: "Maya-Aska" },
  { role: "Stylist", name: "Moni Jiang" },
  { role: "Hair", name: "Edoardo Colasanti" },
  { role: "Makeup", name: "Sophia Pascale" },
  { role: "Photography Assistants", name: "Olijenson, Alessandro Todisco" },
  { role: "Hair Assistant", name: "Dongha Kim" },
  { role: "Makeup Assistant", name: "Alessia Pascale" },
  { role: "Model", name: "Maya Percival" },
];

const GentlewomanPage = () => {

  return (
      <div className="w-11/12 lg:w-10/12 pb-10">
        <h2 className='text-base lg:text-2xl mb-8'>Gentlewoman</h2>
        <div>
          <ImageGrid images={imageData.slice(0, 2)} />
          <Credits credits={credits} />
          <ImageGrid images={imageData.slice(2)} />
        </div>
      </div>
  );
};

export default GentlewomanPage;