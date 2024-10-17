import Image from 'next/image';
import FadeUp from './FadeUp';

const ImageGrid = ({ images }) => (
    <div className="grid grid-cols-12 gap-1">
      {images.map((image, index) => (
        <FadeUp key={index} className={`col-span-${image.span} ${image.rowStart ? `row-start-${image.rowStart}` : ''} ${image.colStart ? `col-start-${image.colStart}` : ''}`}>
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          layout="responsive"
          width={500}
          height={300}
          // className={`col-span-${image.span} ${image.rowStart ? `row-start-${image.rowStart}` : ''} ${image.colStart ? `col-start-${image.colStart}` : ''}`}
        />
        </FadeUp>
      ))}
    </div>
  );

export default ImageGrid;