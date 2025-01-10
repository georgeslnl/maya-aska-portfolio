import React from 'react';
import Image from 'next/image';
import FadeUp from '../components/FadeUp';
import onna1 from '../images/onna/onna-1.jpg';
import onna2 from '../images/onna/onna-2.jpg';
import onna3 from '../images/onna/onna-3.jpg';
import onna4 from '../images/onna/onna-4.jpg';
import ImageGrid from '../components/ImageGrid';
import Credits from '../components/Credits';

export const metadata = {
    title: "Onna"
};
const imageData = [
    { src: onna1, alt: "Onna 1", span: 6 },
    { src: onna2, alt: "Onna 2", span: 6 },
    { src: onna3, alt: "Onna 3", span: 12 },
    { src: onna4, alt: "Onna 4", span: 8, colStart: 3 },
];

const credits = [
    { role: "Photography", name: "Maya-Aska" },
];

const OnnaPage = () => {
    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Onna</h2>
            <ImageGrid images={imageData.slice(0, 2)} />
            <div className="my-10">
                <Credits credits={credits} />
            </div>
            <ImageGrid images={imageData.slice(2)} />
        </div>
    );
}

export default OnnaPage;