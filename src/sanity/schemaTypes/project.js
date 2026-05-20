import { defineArrayMember, defineField, defineType } from 'sanity';

const projectImageLayoutOptions = [
  { title: 'Full width', value: 'full' },
  { title: 'Half width', value: 'half' },
  { title: 'Centered portrait', value: 'centeredPortrait' },
  { title: 'Wide left', value: 'wideLeft' },
  { title: 'Wide right', value: 'wideRight' },
  { title: 'Small left', value: 'smallLeft' },
  { title: 'Small right', value: 'smallRight' },
];

const worksThumbnailLayoutOptions = [
  { title: 'Small left', value: 'smallLeft' },
  { title: 'Small middle', value: 'smallMiddle' },
  { title: 'Small right', value: 'smallRight' },
  { title: 'Medium left', value: 'mediumLeft' },
  { title: 'Medium middle', value: 'mediumMiddle' },
  { title: 'Medium right', value: 'mediumRight' },
  { title: 'Wide', value: 'wide' },
];

  // smallLeft: 'md:col-span-2 md:col-end-7',
  // smallMiddle: 'md:col-span-2 md:col-end-10',
  // smallRight: 'md:col-span-2 md:col-end-13',
  // mediumLeft: 'md:col-span-3 md:col-end-7',
  // mediumMiddle: 'md:col-span-3 md:col-end-10',
  // mediumRight: 'md:col-span-3 md:col-end-13',
  // wide: 'md:col-span-6 md:col-end-13',

const projectImageFields = [
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
    name: 'layout',
    title: 'Page layout',
    type: 'string',
    initialValue: 'full',
    options: {
      list: projectImageLayoutOptions,
      layout: 'radio',
    },
  }),
  defineField({
    name: 'caption',
    title: 'Caption',
    type: 'string',
  }),
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
      description: 'Add one or more thumbnail images for this project on the Works page. The sizes represent the following: Small: 2 columns (1/6 of the page) / Medium: 3 columns (1/4 of the page) / Wide: 6 columns (1/2 of the page).',
      validation: (Rule) => Rule.custom((value, context) => {
        if (value?.length || context.document?.mainImage) return true;

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
              title: 'Works page placement',
              type: 'string',
              initialValue: 'mediumRight',
              options: {
                list: worksThumbnailLayoutOptions,
                layout: 'dropdown',
              },
              description: 'The placement of the thumbnail on the Works page.',
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
      name: 'mainImage',
      title: 'Legacy works thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'Older single-thumbnail field. Prefer Works page thumbnails above for new projects.',
      hidden: true,
    }),
    defineField({
      name: 'mainImageAlt',
      title: 'Legacy thumbnail alt text',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'worksGridClass',
      title: 'Legacy works page desktop placement',
      type: 'string',
      description: 'Optional Tailwind classes matching the existing works grid, such as md:col-span-3 md:col-end-10.',
      hidden: true,
    }),
    defineField({
      name: 'content',
      title: 'Project page content',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'projectImage',
          title: 'Image',
          type: 'object',
          fields: projectImageFields,
          preview: {
            select: {
              title: 'alt',
              media: 'image',
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
      legacyThumbnail: 'mainImage',
    },
    prepare({ title, subtitle, thumbnail, legacyThumbnail }) {
      return {
        title,
        subtitle,
        media: thumbnail || legacyThumbnail,
      };
    },
  },
});
