import Image from "next/image";
import Link from 'next/link';
import FadeUp from './FadeUp';
import {
  getGridSpanClass,
  getGridColStartClass,
  getGridRowStartClass,
} from '@/lib/gridClasses';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-10">
      {images.map((image, index) => (
        <FadeUp
          key={image._key || index}
          className={[
            getGridSpanClass(image.span) || 'col-span-4',
            getGridColStartClass(image.colStart),
            getGridRowStartClass(image.rowStart),
          ].filter(Boolean).join(' ')}
        >
          {image.href ? (
            <Link href={image.href} className="block hover:opacity-80 transition-opacity duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={image.span >= 12 ? '(max-width: 768px) 100vw, 83vw' : '(max-width: 768px) 100vw, 50vw'}
                priority={index < 2}
                className="h-auto w-full"
              />
            </Link>
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={image.span >= 12 ? '(max-width: 768px) 100vw, 83vw' : '(max-width: 768px) 100vw, 50vw'}
              priority={index < 2}
              className="h-auto w-full"
            />
          )}
        </FadeUp>
      ))}
    </div>
  );
};

export default ImageGrid;
