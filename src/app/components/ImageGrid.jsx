import Image from 'next/image';
import FadeUp from './FadeUp';

const ImageGrid = ({ images }) => {
  // Helper to get the correct class string
  const getSpanClasses = (span) => {
    const spanClasses = {
      1: 'col-span-4 md:col-span-1',
      2: 'col-span-4 md:col-span-2',
      3: 'col-span-4 md:col-span-3',
      4: 'col-span-4 md:col-span-4',
      5: 'col-span-4 md:col-span-5',
      6: 'col-span-4 md:col-span-6',
      7: 'col-span-4 md:col-span-7',
      8: 'col-span-4 md:col-span-8',
      9: 'col-span-4 md:col-span-9',
      10: 'col-span-4 md:col-span-10',
      11: 'col-span-4 md:col-span-11',
      12: 'col-span-4 md:col-span-12'
    };
    return spanClasses[span] || 'col-span-4';
  };

  const getStartClasses = (colStart) => {
    if (!colStart) return '';
    const startClasses = {
      1: 'md:col-start-1',
      2: 'md:col-start-2',
      3: 'md:col-start-3',
      4: 'md:col-start-4',
      5: 'md:col-start-5',
      6: 'md:col-start-6',
      7: 'md:col-start-7',
      8: 'md:col-start-8',
      9: 'md:col-start-9',
      10: 'md:col-start-10',
      11: 'md:col-start-11',
      12: 'md:col-start-12'
    };
    return startClasses[colStart] || '';
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-10">
      {images.map((image, index) => (
        <FadeUp 
          key={index} 
          className={`
            ${getSpanClasses(image.span)}
            ${getStartClasses(image.colStart)}
            ${image.rowStart ? `row-start-${image.rowStart}` : ''}
          `.trim()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={500}
            height={300}
            priority={index < 2}
          />
        </FadeUp>
      ))}
    </div>
  );
};

export default ImageGrid;