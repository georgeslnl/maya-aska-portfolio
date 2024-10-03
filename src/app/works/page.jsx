import React from 'react';
import Image from 'next/image';
import onna9 from '../images/onna/onna-9.jpg';
import onna6 from '../images/onna/onna-6.jpg';
import onna7 from '../images/onna/onna-7.jpg';
import onna10 from '../images/onna/onna-10.jpg';
import card6 from '../images/card/card-6.jpg';
import card4 from '../images/card/card-4.jpg';
import card1 from '../images/card/card-1.jpg';
import gentlewoman3 from '../images/gentlewoman/gentlewoman-3.jpg';
import gentlewoman4 from '../images/gentlewoman/gentlewoman-4.jpg';
import ladyliberty5 from '../images/lady-liberty/lady-liberty-5.jpg';
import ladyliberty4 from '../images/lady-liberty/lady-liberty-4.jpg';
import np4 from '../images/noiseless-portraits/np-4.jpg';
import np6 from '../images/noiseless-portraits/np-6.jpg';
import np1 from '../images/noiseless-portraits/np-1.jpg';
// TODO: add np7
import tt2 from '../images/temporary-teeth/temporary-teeth-2.jpg';
import tt1 from '../images/temporary-teeth/temporary-teeth-1.jpg';

const images2024 = [
    {src: onna9, alt: "Onna 9", span: 4, rowStart: 2},
    {src: onna6, alt: "Onna 6", span: 3, colEnd: 12, rowStart: 2},
    {src: onna7, alt: "Onna 7", span: 4, rowStart: 3},
    {src: onna10, alt: "Onna 10", span: 4, colEnd: 12, rowStart: 3},
    {src: np4, alt: "Noiseless Portraits 4", span: 4, rowStart: 4},
    {src: np6, alt: "Noiseless Portraits 6", span: 4, rowStart: 4},
    {src: np1, alt: "Noiseless Portraits 1", span: 4, colEnd: 12, rowStart: 4},
];


const WorksPage = () => {
    return (
        <div className='w-11/12 lg:w-10/12 pb-10'>
            <p className="text-base lg:text-2xl col-end-12 text-end">2024</p>
        <div className="grid grid-cols-12 gap-1 grid-">
                
                <Image
                    key={1}
                    src={onna9}
                    alt="Onna 9"
                    layout="responsive"
                    // fill
                    width={500}
                    height={300}
                    className={`col-span-4 col-end-8`}
                />
                <Image
                    key={2}
                    src={onna6}
                    alt="Onna 6"
                    layout="responsive"
                    width={500}
                    height={300}
                    className={`col-span-5 col-end-13`}
                />
                <Image
                    key={3}
                    src={onna7}
                    alt="Onna 7"
                    layout="responsive"
                    width={500}
                    height={300}
                    className={`col-span-4 col-end-9`}
                />
                <Image
                    key={4}
                    src={onna10}
                    alt="Onna 10"
                    layout="responsive"
                    width={500}
                    height={300}
                    className={`col-span-4 col-end-13`}
                />
                <Image
                    key={5}
                    src={card6}
                    alt="Noiseless Portraits 4"
                    layout="responsive"
                    width={500}
                    height={300}
                    className={`col-span-4 col-end-5`}
                />
                <Image
                    key={6}
                    src={card4}
                    alt="Noiseless Portraits 6"
                    layout="responsive"
                    width={500}
                    height={300}
                    className={`col-span-4 col-end-9`}
                />
                <Image
                    key={7}
                    src={card1}
                    alt="Noiseless Portraits 1"
                    layout="responsive"
                    width={500}
                    height={300}
                    className={`col-span-4 col-end-13`}
                />

        </div>
        </div>
    )
}

export default WorksPage;