'use client';

import dynamic from 'next/dynamic';
import config from '../../../../sanity.config';

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

const Studio = () => {
  return <NextStudio config={config} />;
};

export default Studio;
