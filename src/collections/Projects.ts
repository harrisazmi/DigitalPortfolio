import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order', 'updatedAt'],
    description: 'Personal and collaboration projects powering the portfolio grids.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'personal',
      options: [
        { label: 'Personal', value: 'personal' },
        { label: 'Collaboration', value: 'collaboration' },
      ] as const,
      admin: {
        description: 'Controls grouping on the frontend.',
      },
    },
    {
      name: 'path',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Card Description',
      type: 'textarea',
      required: true,
      maxLength: 320,
    },
    {
      name: 'shortDescription',
      label: 'Detail Description',
      type: 'textarea',
      admin: {
        description: 'Optional longer copy for hero or detail sections.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'gitHubUrl',
          type: 'text',
          admin: {
            placeholder: 'https://github.com/...',
          },
        },
        {
          name: 'previewUrl',
          type: 'text',
          admin: {
            placeholder: 'https://example.com',
          },
        },
      ],
    },
  ],
}
