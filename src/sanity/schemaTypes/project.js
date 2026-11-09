import { defineArrayMember, defineField, defineType } from 'sanity';

const imageRowSizeOptions = [
  { title: 'Full width (12/12)', value: 'full' },
  { title: 'Two thirds (8/12)', value: 'twoThirds' },
  { title: 'Half (6/12)', value: 'half' },
  { title: 'Third (4/12)', value: 'third' },
];

const imageRowSizeSpans = {
  full: 12,
  twoThirds: 8,
  half: 6,
  third: 4,
};

const imageRowGapOptions = [
  { title: 'Tight', value: 'tight' },
  { title: 'Normal', value: 'normal' },
  { title: 'Loose', value: 'loose' },
];

const imageRowAlignOptions = [
  { title: 'Left', value: 'left' },
  { title: 'Centered', value: 'center' },
  { title: 'Right', value: 'right' },
];

// Fields for an image placed on a row.
const imageRowImageFields = [
  defineField({
    name: 'image',
    title: 'Image',
    type: 'image',
    options: { hotspot: true },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'alt',
    title: 'Alt text',
    type: 'string',
    validation: (Rule) => Rule.required(),
    description: 'Descriptive alt text for the image, used for accessibility and SEO.',
  }),
  defineField({
    name: 'size',
    title: 'Size',
    type: 'string',
    initialValue: 'half',
    options: {
      list: imageRowSizeOptions,
      layout: 'dropdown',
    },
    description:
      'Width of this image within its row: 4, 6, 8 or 12 of 12 columns. Works for portrait and landscape images alike — the aspect ratio comes from the image itself.',
  }),
  defineField({
    name: 'caption',
    title: 'Caption',
    type: 'string',
  }),
];

const worksThumbnailLayoutOptions = [
  { title: 'Small (2 columns)', value: 'small' },
  { title: 'Medium (3 columns)', value: 'medium' },
  { title: 'Large (4 columns)', value: 'large' },
  { title: 'Wide (6 columns)', value: 'wide' },
];

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Unique URL identifier, auto-generated from title but can be customized. E.g. "my-project".',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2100),
      description: 'Year of the project, used for displaying in chronological order in the Works page.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'showInSidebar',
      title: 'Show in sidebar',
      type: 'boolean',
      initialValue: true,
      description: 'Published projects appear in the Works sidebar by default.',
    }),
    defineField({
      name: 'worksThumbnails',
      title: 'Works page thumbnails',
      type: 'array',
      description: 'Add one or more thumbnail images for this project on the Works page. Images are positioned automatically right-to-left, in the order uploaded. Choose a size: Small (2 columns, 6 per row), Medium (3 columns, 4 per row), Large (4 columns, 23 per row), Wide (6 columns, 2 per row).',
      validation: (Rule) => Rule.custom((value) => {
        if (value?.length) return true;

        return 'Add at least one Works page thumbnail.';
      }),
      of: [
        defineArrayMember({
          name: 'worksThumbnail',
          title: 'Thumbnail',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Descriptive alt text for the thumbnail image, used for accessibility and SEO.',
            }),
            defineField({
              name: 'layout',
              title: 'Size',
              type: 'string',
              initialValue: 'medium',
              options: {
                list: worksThumbnailLayoutOptions,
                layout: 'dropdown',
              },
              description: 'Choose the size for this thumbnail. Images are positioned automatically from right to left based on upload order. First image starts at column 13, subsequent images move left.',
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              subtitle: 'layout',
              media: 'image',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Project page content',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'imageRow',
          title: 'Image row',
          type: 'object',
          fields: [
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              description:
                'One or more images displayed side by side on the same line. Add up to 3; their sizes should add up to 12 columns.',
              validation: (Rule) => [
                Rule.required().min(1),
                Rule.max(3).error('A row can hold at most 3 images. Use a new Image row below instead.'),
                Rule.custom((images) => {
                  const total = images?.reduce((sum, img) => sum + (imageRowSizeSpans[img?.size] || 6), 0);
                  if (total <= 12) return true;
                  return {
                    message: `These sizes fill ${total} of 12 columns. Reduce image sizes so they fit on one line.`,
                    level: 'warning',
                  };
                }),
              ],
              of: [
                defineArrayMember({
                  name: 'imageRowImage',
                  title: 'Image',
                  type: 'object',
                  fields: imageRowImageFields,
                  preview: {
                    select: {
                      title: 'alt',
                      subtitle: 'size',
                      media: 'image',
                    },
                  },
                }),
              ],
            }),
            defineField({
              name: 'gap',
              title: 'Spacing between images',
              type: 'string',
              initialValue: 'normal',
              options: {
                list: imageRowGapOptions,
                layout: 'radio',
              },
              description: 'Horizontal space between the images on this row.',
            }),
            defineField({
              name: 'align',
              title: 'Alignment',
              type: 'string',
              initialValue: 'left',
              options: {
                list: imageRowAlignOptions,
                layout: 'radio',
              },
              description: 'Only applies when the images do not fill the full page width.',
            }),
            defineField({
              name: 'extraSpaceAfter',
              title: 'Extra space below',
              type: 'boolean',
              initialValue: false,
              description: 'Add extra vertical breathing room after this row (e.g. before a section break).',
            }),
            defineField({
              name: 'reduceSpaceBelow',
              title: 'Tighter space below',
              type: 'boolean',
              initialValue: false,
              description:
                'Reduce the usual vertical gap between this row and the next block for more compact groupings.',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (!value || !context.parent?.extraSpaceAfter) return true;
                  return {
                    message: 'Both "Extra space below" and "Tighter space below" are set — pick one.',
                    level: 'warning',
                  };
                }),
            }),
          ],
          preview: {
            select: {
              media: 'images.0.image',
              title: 'images.0.alt',
              count: 'images',
              gap: 'gap',
            },
            prepare({ media, title, count, gap }) {
              const imageCount = Array.isArray(count) ? count.length : 0;
              return {
                title,
                subtitle: `${imageCount} image${imageCount === 1 ? '' : 's'}${gap ? ` — ${gap} spacing` : ''}`,
                media,
              };
            },
          },
        }),
        defineArrayMember({
          name: 'textBlock',
          title: 'Text',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'emphasis',
              title: 'Emphasis',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'text' },
          },
        }),
        defineArrayMember({
          name: 'creditsBlock',
          title: 'Credits',
          type: 'object',
          fields: [
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'number',
              description: 'Number of credits per line. Choose 1 for a single column or 2 for two columns.',
              initialValue: 1,
              options: {
                list: [
                  { title: 'One credit per line', value: 1 },
                  { title: 'Two credits per line', value: 2 },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'credits',
              title: 'Credits',
              type: 'array',
              description: 'List of credits for this project, add one entry per person/role.',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'role', title: 'Role', type: 'string', description: 'E.g. "Photography", "Model", "Makeup", etc.' }),
                    defineField({ name: 'name', title: 'Name', type: 'string', description: 'Full name of the person.' }),
                  ],
                  preview: {
                    select: { subtitle: 'role', title: 'name', },
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      thumbnail: 'worksThumbnails.0.image',
    },
    prepare({ title, subtitle, thumbnail }) {
      return {
        title,
        subtitle,
        media: thumbnail,
      };
    },
  },
});
