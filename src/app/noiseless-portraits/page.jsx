import React from 'react';
import Image from "next/legacy/image";
import np1 from '../images/noiseless-portraits/np-1.jpg';
import np2 from '../images/noiseless-portraits/np-2.jpg';
import np3 from '../images/noiseless-portraits/np-3.jpg';
import np4 from '../images/noiseless-portraits/np-4.jpg';
import FadeUp from '../components/FadeUp';
import ImageGrid from '../components/ImageGrid';
import Credits from '../components/Credits';

export const metadata = {
    title: "Noiseless Portraits"
};

const imageData = [
    { src: np1, alt: "Noiseless Portraits 1", span: 12 },
    { src: np2, alt: "Noiseless Portraits 2", span: 12},
    { src: np3, alt: "Noiseless Portraits 3", span: 12 },
    { src: np4, alt: "Noiseless Portraits 4", span: 12 },
];

const credits = [
    { role: "Photography", name: "Maya-Aska" },
    { role: "Model", name: "Joanna" },
    { role: "Model", name: "Ellie" },
    { role: "Stylist", name: "Isabelle Burnett" },
];

const NoiselessPortraitsPage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Noiseless Portraits</h2>
            <ImageGrid images={imageData.slice(0, 1)} />
            <Credits credits={credits} />
            <ImageGrid images={imageData.slice(1)} />
        </div>
    );
};

export default NoiselessPortraitsPage;