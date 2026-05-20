import { defineArrayMember, defineField, defineType } from 'sanity';

const gridSpanOptions = [
  { title: 'Full width', value: 12 },
  { title: 'Half width', value: 6 },
  { title: 'Seven columns', value: 7 },
  { title: 'Five columns', value: 5 },
  { title: 'Four columns', value: 4 },
  { title: 'Three columns', value: 3 },
];

const colStartOptions = [
  { title: 'Automatic', value: 0 },
  { title: 'Column 2', value: 2 },
  { title: 'Column 3', value: 3 },
  { title: 'Column 4', value: 4 },
  { title: 'Column 5', value: 5 },
  { title: 'Column 6', value: 6 },
  { title: 'Column 7', value: 7 },
  { title: 'Column 8', value: 8 },
];

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
  }),
  defineField({
    name: 'span',
    title: 'Grid width',
    type: 'number',
    initialValue: 12,
    options: { list: gridSpanOptions },
  }),
  defineField({
    name: 'colStart',
    title: 'Desktop start column',
    type: 'number',
    initialValue: 0,
    options: { list: colStartOptions },
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
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Works page thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImageAlt',
      title: 'Thumbnail alt text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'worksGridClass',
      title: 'Works page desktop placement',
      type: 'string',
      description: 'Optional Tailwind classes matching the existing works grid, such as md:col-span-3 md:col-end-10.',
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
              name: 'credits',
              title: 'Credits',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'role', title: 'Role', type: 'string' }),
                    defineField({ name: 'name', title: 'Name', type: 'string' }),
                  ],
                  preview: {
                    select: { title: 'role', subtitle: 'name' },
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
      media: 'mainImage',
    },
  },
});
