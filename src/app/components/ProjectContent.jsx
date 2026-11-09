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

const imageRowSizeSpans = {
  full: 12,
  twoThirds: 8,
  half: 6,
  third: 4,
};

const imageRowGapClasses = {
  tight: 'gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-0',
  normal: 'gap-x-4 gap-y-4 md:gap-x-10 md:gap-y-0',
  loose: 'gap-x-6 gap-y-4 md:gap-x-16 md:gap-y-0',
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

function getRowImageSizes(span) {
  const vw = Math.round((span / 12) * 83) || 83;
  return `(max-width: 768px) 100vw, ${vw}vw`;
}

const ProjectContent = ({ blocks = [] }) => {
  if (!blocks.length) return null;

  const priorityKeys = new Set();
  let imageCount = 0;
  for (const block of blocks) {
    if (block._type === 'projectImage' || block._type === 'imageRow') {
      for (const img of block._type === 'imageRow' ? block.images || [] : [block]) {
        if (imageCount < 2) priorityKeys.add(img._key);
        imageCount += 1;
      }
    }
  }

  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-10">
      {blocks.map((block, index) => {
        if (block._type === 'projectImage') {
          const isFullWidth = !block.layout
            ? block.span >= 11
            : block.layout === 'full';
          const priority = priorityKeys.has(block._key);
          return (
            <FadeUp key={block._key || index} className={getGridClass(block)}>
              <SanityImage
                src={block.url}
                alt={block.alt}
                width={block.width}
                height={block.height}
                priority={priority}
                sizes={isFullWidth ? '(max-width: 768px) 100vw, 83vw' : '(max-width: 768px) 100vw, 50vw'}
              />
              {block.caption ? (
                <p className="mt-2 text-xs md:text-sm">{block.caption}</p>
              ) : null}
            </FadeUp>
          );
        }

        if (block._type === 'imageRow') {
          const images = Array.isArray(block.images) ? block.images : [];
          const gapClass = imageRowGapClasses[block.gap] || imageRowGapClasses.normal;
          const totalSpans = images.reduce(
            (sum, img) => sum + (imageRowSizeSpans[img.size] || 6),
            0
          );
          const align = block.align || 'left';
          let firstColStart = 1;
          if (totalSpans < 12) {
            if (align === 'center') {
              firstColStart = 1 + Math.floor((12 - totalSpans) / 2);
            } else if (align === 'right') {
              firstColStart = 13 - totalSpans;
            }
          }

          return (
            <FadeUp
              key={block._key || index}
              className={[
                'col-span-4 md:col-span-12',
                block.extraSpaceAfter ? 'mb-8 md:mb-20' : '',
                block.reduceSpaceBelow ? '-mb-2 md:-mb-6' : '',
              ].filter(Boolean).join(' ')}
            >
              <div className={`grid grid-cols-1 md:grid-cols-12 ${gapClass}`}>
                {images.map((img, imgIndex) => {
                  const span = imageRowSizeSpans[img.size] || 6;
                  const isFirst = imgIndex === 0;
                  const priority = priorityKeys.has(img._key);
                  const classes = [
                    'col-span-1',
                    getGridSpanClass(span)?.split(' ')[1], // md:col-span-N only
                  ];
                  if (isFirst && totalSpans < 12 && firstColStart > 1) {
                    classes.push(getGridColStartClass(firstColStart));
                  }
                  return (
                    <div key={img._key || imgIndex} className={classes.filter(Boolean).join(' ')}>
                      <SanityImage
                        src={img.url}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        priority={priority}
                        sizes={getRowImageSizes(span)}
                      />
                      {img.caption ? (
                        <p className="mt-2 text-xs md:text-sm">{img.caption}</p>
                      ) : null}
                    </div>
                  );
                })}
              </div>
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
