import React from 'react';
import Layout from '../components/Layout';
import { IoDocument, IoMail } from "react-icons/io5";



const InfoPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-10/12 lg:w-11/12 font-cormorant">
        <h2 className="text-2xl lg:text-4xl mb-8">Info</h2>
        
        <p className="text-lg lg:text-2xl ">
          I am Maya-Aska. I am a London based photographer. My upbringing in Paris, Tokyo and London has shaped a multi-cultural lens for me to examine the world and its traditional and contemporary values. Work experience includes: photography assistant to James Perolls including campaign for Ader Error, production for Wonderland Magazine.
        </p>
        
        <div className="mt-auto lg:p-2 border-t border-black">
          <div className="flex flex-col lg:flex-row items-center justify-between text-sm lg:text-lg">
          <div className="flex items-center gap-1 group">
          <IoMail className='group-hover:animate-bounce' />
          <p> Email - mayaxaska@gmail.com</p>
          </div>
          <div className="flex items-center gap-1 group">
            <IoDocument className='group-hover:animate-bounce' />
            <p>CV upon request</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoPage;