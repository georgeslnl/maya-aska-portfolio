import Image from 'next/image';

const SanityImage = ({ src, alt, width = 1200, height = 800, priority = false, sizes = '(max-width: 768px) 100vw, 50vw' }) => {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className="h-auto w-full"
    />
  );
};

export default SanityImage;
