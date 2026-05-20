import Image from 'next/legacy/image';

const SanityImage = ({ src, alt, width = 1200, height = 800, priority = false }) => {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt || ''}
      layout="responsive"
      width={width}
      height={height}
      priority={priority}
    />
  );
};

export default SanityImage;
