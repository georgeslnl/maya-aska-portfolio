import Credits from './Credits';
import FadeUp from './FadeUp';
import SanityImage from './SanityImage';
import { getGridSpanClass, getGridColStartClass } from '@/lib/gridClasses';

const layoutClasses = {
  full: 'col-span-4 md:col-span-12',
  half: 'col-span-4 md:col-span-6',
  centeredPortrait: 'col-span-4 md:col-span-6 md:col-start-4',
  wideLeft: 'col-span-4 md:col-span-7',
  wideRight: 'col-span-4 md:col-span-7 md:col-start-6',
  smallLeft: 'col-span-4 md:col-span-4',
  smallRight: 'col-span-4 md:col-span-4 md:col-start-9',
};

function getGridClass(block) {
  if (block.layout && layoutClasses[block.layout]) {
    return layoutClasses[block.layout];
  }

  return [
    getGridSpanClass(block.span) || getGridSpanClass(12),
    getGridColStartClass(block.colStart),
  ].filter(Boolean).join(' ');
}

const ProjectContent = ({ blocks = [] }) => {
  if (!blocks.length) return null;

  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-10">
      {blocks.map((block, index) => {
        if (block._type === 'projectImage') {
          const isFullWidth = !block.layout
            ? block.span >= 11
            : block.layout === 'full';
          return (
            <FadeUp key={block._key || index} className={getGridClass(block)}>
              <SanityImage
                src={block.url}
                alt={block.alt}
                width={block.width}
                height={block.height}
                priority={index < 2}
                sizes={isFullWidth ? '(max-width: 768px) 100vw, 83vw' : '(max-width: 768px) 100vw, 50vw'}
              />
              {block.caption ? (
                <p className="mt-2 text-xs md:text-sm">{block.caption}</p>
              ) : null}
            </FadeUp>
          );
        }

        if (block._type === 'textBlock') {
          return (
            <FadeUp key={block._key || index} className="col-span-4 md:col-span-12 p-2">
              <p className={`text-xs lg:text-base ${block.emphasis ? 'font-semibold text-stone-700' : ''}`}>
                {block.text}
              </p>
            </FadeUp>
          );
        }

        if (block._type === 'creditsBlock') {
          return (
            <div key={block._key || index} className="col-span-4 md:col-span-12">
              <Credits credits={block.credits || []} columns={block.columns} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ProjectContent;
