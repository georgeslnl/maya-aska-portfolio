import React from 'react';
import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import ladyliberty1 from '../images/lady-liberty/lady-liberty-1.jpg';
import ladyliberty2 from '../images/lady-liberty/lady-liberty-2.jpg';
import ladyliberty3 from '../images/lady-liberty/lady-liberty-3.jpg';
import ladyliberty4 from '../images/lady-liberty/lady-liberty-4.jpg';
import ladyliberty5 from '../images/lady-liberty/lady-liberty-5.jpg';

export const metadata = {
    title: "Lady Liberty"
};

const imageData = [
    { src: ladyliberty1, alt: "Lady Liberty 1", span: 6 },
    { src: ladyliberty2, alt: "Lady Liberty 2", span: 6 },
    { src: ladyliberty3, alt: "Lady Liberty 3", span: 12 },
    { src: ladyliberty4, alt: "Lady Liberty 4", span: 6, colStart: 3 },
    { src: ladyliberty5, alt: "Lady Liberty 5", span: 12 }
];
    
const credits = [
    { role: "Photography", name: "Maya-Aska" },
    { role: "Stylist", name: "Moni Jiang" },
    { role: "Hair", name: "Edoardo Colasanti" },
    { role: "Makeup", name: "Sophia Pascale" },
    { role: "Set", name: "Joana Azevedo" },
    { role: "Photography Assistants", name: "Olijenson, Alessandro Todisco" },
    { role: "Hair Assistant", name: "Dongha Kim" },
    { role: "Makeup Assistant", name: "Alessia Pascale" },
    { role: "Model", name: "Maya Percival" },
];

const LadyLibertyPage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Lady Liberty</h2>
            <div>
            <ImageGrid images={imageData.slice(0, 2)} />
            <Credits credits={credits} />
            <ImageGrid images={imageData.slice(2)} />
            </div>
        </div>
    );
};

export default LadyLibertyPage;
