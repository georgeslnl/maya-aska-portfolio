'use client';
import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import FadeUp from '../components/FadeUp';

const WorkItem = ({ title, image, alt, href, className }) => {
  return (
    <FadeUp className={className} playSound={true}>
      <Link href={href} className="block relative group overflow-hidden hover:scale-105 transition duration-500">
        <Image src={image} alt={alt} layout="responsive" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 bg-gray-500 bg-opacity-50">
          <span className="text-white text-sm lg:text-lg">{title}</span>
        </div>
      </Link>
    </FadeUp>
  );
};

export default WorkItem;