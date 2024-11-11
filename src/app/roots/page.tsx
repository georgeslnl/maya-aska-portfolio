import React from 'react';
import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import root1 from '../images/root/root-1.jpg';
import root2 from '../images/root/root-2.jpg';
import root3 from '../images/root/root-3.jpg';
import FadeUp from '../components/FadeUp';
import Image from 'next/image';


export const metadata = {
    title: "Root"
};

const imageData = [
    { src: root1, alt: "Root 1", span: 6, colStart: 4 },
    { src: root2, alt: "Root 2", span: 6 },
    { src: root3, alt: "Root 3", span: 6 },
];

const credits = [
    { role: "Photography & Stylist", name: "Maya-Aska" },
    { role: "Hair & Makeup", name: "Makumi" },
    { role: "Photography Assistants", name: "Bear Moody" },
    { role: "Models", name: "Moli Grewal, Rea and Charlie" },
];

const RootPage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Root</h2>
            <div className="grid grid-cols-12 gap-1">
            <FadeUp className="col-span-6 col-start-4 row-start-1">
            <Image
                src={root1}
                alt="Root 1"
                layout="responsive"
                width={100}
                height={100}
            />
            </FadeUp>

            {/* <Credits credits={credits} /> */}
            <FadeUp className="col-span-6 col-start-4 row-start-2">
            <Image
                src={root3}
                alt="Root 1"
                layout="responsive"
                width={100}
                height={100}
            />
            </FadeUp>
            </div>
        </div>
    );
};

export default RootPage;