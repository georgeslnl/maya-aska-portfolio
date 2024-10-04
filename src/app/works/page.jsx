'use client';
import React, { useState, useEffect, useRef } from 'react';
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
import np7 from '../images/noiseless-portraits/np-7.jpg';
import np1 from '../images/noiseless-portraits/np-1.jpg';
import tt2 from '../images/temporary-teeth/temporary-teeth-2.jpg';
import tt1 from '../images/temporary-teeth/temporary-teeth-1.jpg';
import useVisibilityState from '../hooks/useVisibilityState'; 


const WorksPage = () => {

    const [ref1, isVisible1] = useVisibilityState();
    const [ref2, isVisible2] = useVisibilityState();
    const [ref3, isVisible3] = useVisibilityState();
    const [ref4, isVisible4] = useVisibilityState();
    const [ref5, isVisible5] = useVisibilityState();
    const [ref6, isVisible6] = useVisibilityState();
    const [ref7, isVisible7] = useVisibilityState();
    const [ref8, isVisible8] = useVisibilityState();
    const [ref9, isVisible9] = useVisibilityState();
    const [ref10, isVisible10] = useVisibilityState();
    const [ref11, isVisible11] = useVisibilityState();
    const [ref12, isVisible12] = useVisibilityState();
    const [ref13, isVisible13] = useVisibilityState();
    const [ref14, isVisible14] = useVisibilityState();
    const [ref15, isVisible15] = useVisibilityState();
    const [ref16, isVisible16] = useVisibilityState();
    const [ref17, isVisible17] = useVisibilityState();


    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <p className="text-base lg:text-2xl col-end-12 text-end">2024</p>
            <div className="grid grid-cols-12 gap-1">
                <div ref={ref1} className="col-span-4 col-end-8">
                    <Image
                        src={onna9}
                        alt="Onna 9"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible1 ? ' animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref2} className="col-span-5 col-end-13">
                    <Image
                        src={onna6}
                        alt="Onna 6"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible2 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref3} className="col-span-4 col-end-9">
                    <Image
                        src={onna7}
                        alt="Onna 7"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible3 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref4} className="col-span-4 col-end-13">
                    <Image
                        src={onna10}
                        alt="Onna 10"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible4 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref5} className="col-span-4 col-end-5">
                    <Image
                        src={card6}
                        alt="Card 6"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible5 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref6} className="col-span-4 col-end-9">
                    <Image
                        src={card4}
                        alt="Card 4"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible6 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref7} className="col-span-4 col-end-13">
                    <Image
                        src={card1}
                        alt="Card 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible7 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
            <p className="text-base lg:text-2xl col-end-12 text-end">2023</p>
            <div className="grid grid-cols-12 gap-1">
                <div ref={ref8} className="col-span-4 col-end-9">
                    <Image
                        src={gentlewoman3}
                        alt="Gentlewoman 3"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible8 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref9} className="col-span-4 col-end-13">
                    <Image
                        src={gentlewoman4}
                        alt="Gentlewoman 4"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible9 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref10} className="col-span-4 col-end-13">
                    <Image
                        src={ladyliberty4}
                        alt="Lady Liberty 4"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible10 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref11} className="col-span-6 col-end-9 row-start-2">
                    <Image
                        src={ladyliberty5}
                        alt="Lady Liberty 5"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible11 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref12} className="col-span-4 col-end-7">
                    <Image
                        src={np4}
                        alt="Noiseless Portraits 4"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible12 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref13} className="col-span-6 col-end-13">
                    <Image
                        src={np6}
                        alt="Noiseless Portraits 6"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible13 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref14} className="col-span-6 col-end-9">
                    <Image
                        src={np1}
                        alt="Noiseless Portraits 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible14 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref15} className="col-span-4 col-end-13">
                    <Image
                        src={np7}
                        alt="Noiseless Portraits 7"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible15 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
            <p className="text-base lg:text-2xl col-end-12 text-end">2022</p>
            <div className="grid grid-cols-12 gap-1">
                <div ref={ref16} className="col-span-4 col-end-9">
                    <Image
                        src={tt2}
                        alt="Temporary Teeth 2"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible16 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
                <div ref={ref17} className="col-span-4 col-end-13">
                    <Image
                        src={tt1}
                        alt="Temporary Teeth 1"
                        layout="responsive"
                        width={500}
                        height={300}
                        className={`transition-opacity animate-slow duration-1000 ${isVisible17 ? 'animate-fadeInUp  opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default WorksPage;
