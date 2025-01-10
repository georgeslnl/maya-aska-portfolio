import React from 'react';
import Image from "next/legacy/image";
import tt1 from '../images/temporary-teeth/temporary-teeth-1.jpg';
import tt2 from '../images/temporary-teeth/temporary-teeth-2.jpg';
import tt3 from '../images/temporary-teeth/temporary-teeth-3.jpg';
import tt4 from '../images/temporary-teeth/temporary-teeth-4.jpg';
import FadeUp from '../components/FadeUp';

export const metadata = {
    title: "Temporary Teeth"
};

const TemporaryTeethPage = () => {

    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className="text-base md:text-lg lg:text-2xl mb-8">Temporary Teeth</h2>
            <div>
                <div className="grid grid-cols-12 gap-1">
                    <FadeUp className="col-span-6">
                        <Image
                            key={1}
                            src={tt1}
                            alt="Temporary Teeth 1"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className="col-span-6">
                        <Image
                            key={2}
                            src={tt2}
                            alt="Temporary Teeth 2"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-2'>
                        <p className='text-xs lg:text-base'>
                            Models - Nico & Amy
                        </p>
                    </FadeUp>
                    <FadeUp className='col-span-12 p-2'>
                        <p className='text-xs lg:text-base font-semibold text-stone-700'>
                            FOR DESIGNER RUBY SIDA
                        </p>
                    </FadeUp>
                    <FadeUp className='col-span-12 p-2'>
                        <p className='text-xs lg:text-base'>
                            Photography - Maya-Aska <br />
                            Fashion - Ruby Sida <br />
                            Hair & Makeup - Rina Inata <br />
                            Models - Ruby, Nico, Amy
                        </p>
                    </FadeUp>
                    <FadeUp className="col-span-6">
                        <Image
                            key={3}
                            src={tt3}
                            alt="Temporary Teeth 3"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className="col-span-6">
                        <Image
                            key={4}
                            src={tt4}
                            alt="Temporary Teeth 4"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </FadeUp>
                    <FadeUp className='col-span-12 p-2'>
                        <p className='text-xs lg:text-base'>
                            Models - Amy & Nico
                        </p>
                    </FadeUp>
                </div>
            </div>
        </div>
    );
};

export default TemporaryTeethPage;