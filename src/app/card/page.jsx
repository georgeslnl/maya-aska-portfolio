import React from 'react';
import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import card1 from '../images/card/card-1.jpg';
import card2 from '../images/card/card-2.jpg';
import card3 from '../images/card/card-3.jpg';
import card4 from '../images/card/card-4.jpg';
import card5 from '../images/card/card-5.jpg';
import card6 from '../images/card/card-6.jpg';

export const metadata = {
    title: "Card"
};

const imageData = [
    { src: card1, alt: "Card 1", span: 6 },
    { src: card2, alt: "Card 2", span: 6 },
    { src: card3, alt: "Card 3", span: 6 },
    { src: card4, alt: "Card 4", span: 6 },
    { src: card5, alt: "Card 5", span: 6 },
    { src: card6, alt: "Card 6", span: 6 },
];

const credits = [
    { role: "Photography & Stylist", name: "Maya-Aska" },
    { role: "Hair & Makeup", name: "Makumi" },
    { role: "Photography Assistants", name: "Bear Moody" },
    { role: "Models", name: "Moli Grewal, Rea and Charlie" },
];

const CardPage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-2xl lg:text-4xl mb-8'>Card</h2>
            <div>
            <ImageGrid images={imageData.slice(0, 2)} />
            <Credits credits={credits} />
            <ImageGrid images={imageData.slice(2)} />
            </div>
        </div>
    );
};

export default CardPage;