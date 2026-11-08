import { defineArrayMember, defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Homepage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Homepage images',
      type: 'array',
      description: 'Add images in the order they should appear. Each image links to its selected project.',
      of: [
        defineArrayMember({
          name: 'homePageImage',
          title: 'Homepage image',
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
            }),
            defineField({
              name: 'project',
              title: 'Linked project',
              type: 'reference',
              to: [{ type: 'project' }],
              validation: (Rule) => Rule.required(),
              description: 'Clicking this homepage image opens the selected project page.',
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              initialValue: 'half',
              options: {
                list: [
                  { title: 'Half width', value: 'half' },
                  { title: 'Full width', value: 'full' },
                ],
                layout: 'radio',
              },
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              subtitle: 'project.title',
              media: 'image',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.image',
    },
  },
});
