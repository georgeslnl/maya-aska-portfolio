import React from 'react';
import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import root1 from '../images/root/root-1.jpg';
import root2 from '../images/root/root-2.jpg';
import root3 from '../images/root/root-3.jpg';

export const metadata = {
    title: "Root"
};

// Define the image data for centered layout
const imageData = [
    { src: root1, alt: "Root 1", span: 6, colStart: 4 },
    { src: root3, alt: "Root 3", span: 6, colStart: 4 },
];

const credits = [
    { role: "Model", name: "Kaya Yokoi Arai" },
]



const RootPage = () => {
    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Root</h2>
            <div>
                <div>
                    <ImageGrid images={imageData.slice(0, 1)} />
                </div>
                <div className="my-10 text-center">
                    <Credits credits={credits} />
                </div>
                <div>
                    <ImageGrid images={imageData.slice(1)} />
                </div>
            </div>
        </div>
    );
};

export default RootPage;