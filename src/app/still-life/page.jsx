import React from 'react';
import ImageGrid from '../components/ImageGrid';
import Credits from '../components/Credits';
import stillLife1 from '../images/still-life/still life 1.jpg';
import stillLife2 from '../images/still-life/still life 2.jpg';
import stillLife3 from '../images/still-life/still life 3.jpg';
import stillLife4 from '../images/still-life/still life 4.jpg';

export const metadata = {
    title: "Still Life"
};

const imageData = [
    { src: stillLife1, alt: "Still Life 1", span: 8, colStart: 3 },
    { src: stillLife2, alt: "Still Life 2", span: 8, colStart: 3 },
    { src: stillLife4, alt: "Still Life 2", span: 8, colStart: 3 },
    { src: stillLife3, alt: "Still Life 2", span: 8, colStart: 3 },
];

const credits = [
    { role: "Photography & Set-Design", name: "Maya-Aska" },
];

const StillLifePage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className="text-base md:text-lg lg:text-2xl mb-8">Still Life</h2>
            <ImageGrid images={imageData.slice(0, 2)} /> 
            <div className='text-center'>
            <Credits credits={credits} />    
            </div>        
            <ImageGrid images={imageData.slice(2)} />
        </div>
    );
};

export default StillLifePage;