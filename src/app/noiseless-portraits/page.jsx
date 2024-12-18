import React from 'react';
import Image from 'next/image';
import np1 from '../images/noiseless-portraits/np-1.jpg';
import np2 from '../images/noiseless-portraits/np-2.jpg';
import np3 from '../images/noiseless-portraits/np-3.jpg';
import np4 from '../images/noiseless-portraits/np-4.jpg';
import np5 from '../images/noiseless-portraits/np-5.jpg';
import np6 from '../images/noiseless-portraits/np-6.jpg';
import FadeUp from '../components/FadeUp';

export const metadata = {
    title: "Noiseless Portraits"
};

const NoiselessPortraitsPage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Noiseless Portraits</h2>
            <div>
                <div className="grid grid-cols-12 gap-1">
                    <FadeUp className='col-span-12 my-5 px-2'>
                        <p className='text-xs lg:text-base'>
                            Photography - Maya-Aska
                        </p>
                    </FadeUp>
                    
                    <FadeUp className={`col-span-12`}>
                        <Image
                            key={2}
                            src={np2}
                            alt="Noiseless Portraits 2"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-4'>
                        <p className='text-xs lg:text-base'>
                            Model - Ellie <br />
                            Stylist - Isabelle Burnett
                        </p>
                    </FadeUp>
                    <FadeUp className={`col-span-12`}>
                        <Image
                            key={1}
                            src={np1}
                            alt="Noiseless Portraits 1"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-4'>
                        <p className='text-xs lg:text-base'>
                            Model - Joanna
                        </p>
                    </FadeUp>
                    {/* <FadeUp className={`col-span-6 row-start-6`}>
                        <Image
                            key={3}
                            src={np3}
                            alt="Noiseless Portraits 3"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className={`col-span-6 row-start-6`}>
                        <Image
                            key={4}
                            src={np4}
                            alt="Noiseless Portraits 4"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-4'>
                        <p className='text-xs lg:text-base'>
                            Model - Lia <br />
                            Stylist - Isabelle Burnett
                        </p>
                    </FadeUp> */}
                    <FadeUp className={`col-span-12`}>
                        <Image
                            key={5}
                            src={np5}
                            alt="Noiseless Portraits 5"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-4'>
                        <p className='text-xs lg:text-base'>
                            Model - Joanna
                        </p>
                    </FadeUp>
                    <FadeUp className={`col-span-12`}>
                        <Image
                            key={6}
                            src={np6}
                            alt="Noiseless Portraits 6"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-4'>
                        <p className='text-xs lg:text-base'>
                            Model - Ellie <br />
                            Stylist - Isabelle Burnett
                        </p>
                    </FadeUp>
                </div>
            </div>
        </div>
    );
};

export default NoiselessPortraitsPage;