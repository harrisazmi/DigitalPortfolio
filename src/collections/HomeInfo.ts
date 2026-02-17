import type { CollectionConfig } from 'payload'

export const HomeInfo: CollectionConfig = {
  slug: 'home-info',
  labels: {
    singular: 'Home Info',
    plural: 'Home Info Entries',
  },
  admin: {
    useAsTitle: 'titleHook',
    defaultColumns: ['titleHook', 'updatedAt'],
    description: 'Hero copy, highlights, and contact links powering the home page.',
  },
  fields: [
    {
      name: 'titleHook',
      type: 'textarea',
      required: true,
      admin: {
        rows: 2,
        description: 'Primary hero headline. Supports new lines for dramatic wraps.',
      },
    },
    {
      name: 'descHook',
      label: 'Description',
      type: 'textarea',
      required: true,
      admin: {
        rows: 4,
        description: 'Supporting paragraph shown under the hero headline.',
      },
    },
    {
      name: 'techStack',
      label: 'Tech Stack',
      type: 'array',
      minRows: 1,
      admin: {
        initCollapsed: true,
        description: 'Logos, proficiencies, and categories for the highlight grid.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          label: 'Logo Asset',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Select a Media item (PNG/SVG) for this logo.',
          },
        },
      ],
    },
    {
      name: 'education',
      label: 'Education',
      type: 'array',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'major', type: 'text', required: true },
        { name: 'year', type: 'text', required: true },
        { name: 'name', label: 'Institution Name', type: 'text', required: true },
        {
          name: 'logo',
          label: 'Institution Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'certificate',
      label: 'Certificates',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'issuer', type: 'text', required: true },
        { name: 'year', type: 'text', required: true },
        {
          name: 'credID',
          label: 'Credential ID',
          type: 'text',
        },
        {
          name: 'logo',
          label: 'Badge Asset',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'sayAboutMe',
      label: 'Testimonials',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'position', type: 'text', required: true },
        { name: 'company', type: 'text', required: true },
        {
          name: 'comments',
          type: 'textarea',
          required: true,
          admin: {
            rows: 5,
          },
        },
        {
          name: 'avatarImage',
          label: 'Avatar Asset',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'gallery',
      label: 'Gallery',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description:
              'Link each gallery entry to a managed Media asset instead of hardcoded paths.',
          },
        },
      ],
    },
  ],
}
