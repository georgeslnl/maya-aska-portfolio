'use client';
import Image from "next/legacy/image";
import Link from 'next/link';
import FadeUp from '../components/FadeUp';

const WorkItem = ({ title, image, alt, href, style, width = 1200, height = 800 }) => {
  return (
    <div style={style}>
      <FadeUp playSound={true}>
        <Link href={href} className="block relative group overflow-hidden hover:scale-105 transition duration-500">
          <Image src={image} alt={alt} layout="responsive" width={width} height={height} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 bg-gray-500 bg-opacity-50">
            <span className="text-white text-sm lg:text-lg">{title}</span>
          </div>
        </Link>
      </FadeUp>
    </div>
  );
};

export default WorkItem;