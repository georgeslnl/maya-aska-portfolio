import Studio from './Studio';

export const metadata = {
  referrer: 'same-origin',
  robots: 'noindex',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
