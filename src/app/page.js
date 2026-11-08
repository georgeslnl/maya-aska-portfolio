import ImageGrid from './components/ImageGrid';
import { getSanityHomePage } from '@/sanity/lib/queries';

export const metadata = {
  title: {
    absolute: "Maya-Aska",
  }
};

export default async function Home() {
  const homePage = await getSanityHomePage();
  const images = (homePage?.images || [])
    .filter((image) => image.url && image.href)
    .map((image) => ({
      src: image.url,
      alt: image.alt,
      href: image.href,
      width: image.width,
      height: image.height,
      span: image.layout === 'full' ? 12 : 6,
    }));

  return (
    <div className="w-11/12 lg:w-10/12 pb-10">
      {images.length ? <ImageGrid images={images} /> : null}
    </div>
  );
}
