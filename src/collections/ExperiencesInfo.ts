import type { CollectionConfig } from 'payload'

export const ExperiencesInfo: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'yearRange', 'updatedAt'],
    description: 'Timeline entries powering experience pages and detail views.',
  },
  fields: [
    // name
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    //details
    {
      name: 'details',
      type: 'richText',
      required: true,
      admin: {
        description: 'Short description shown on the primary experience list.',
      },
    },
    //year
    {
      name: 'yearRange',
      label: 'Year Range',
      type: 'text',
      required: true,
    },
    //position
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    //routing to on click
    {
      name: 'ctaHref',
      label: 'Detail Page Route',
      type: 'text',
      required: true,
    },
    //image path
    {
      name: 'companyImage',
      label: 'Company Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image of the Company',
      },
    },
    //projects
    {
      name: 'projects',
      label: 'Highlighted Projects',
      type: 'array',
      admin: {
        initCollapsed: true,
        description: 'Optional set of related projects (AskMyGov, Directory, etc.).',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Project Route',
          type: 'text',
          required: true,
        },
        {
          name: 'iconKey',
          label: 'Icon Key',
          type: 'text',
          required: true,
          admin: {
            description: 'Matches a frontend icon component name, e.g., AskMyGovIcon.',
          },
        },
      ],
    },
  ],
}
