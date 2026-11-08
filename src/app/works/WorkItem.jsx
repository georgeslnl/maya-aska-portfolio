import Image from "next/image";
import Link from 'next/link';
import FadeUp from '../components/FadeUp';

const WorkItem = ({ title, image, alt, href, onClick, style, width = 1200, height = 800 }) => {
  return (
    <div style={style}>
      <FadeUp playSound={true}>
        <Link
          href={href}
          onClick={onClick}
          className="block relative group overflow-hidden hover:scale-105 transition duration-500"
        >
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="h-auto w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 bg-gray-500 bg-opacity-50">
            <span className="text-white text-xs lg:text-sm">{title}</span>
          </div>
        </Link>
      </FadeUp>
    </div>
  );
};

export default WorkItem;
