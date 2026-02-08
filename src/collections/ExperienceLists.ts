import type { CollectionConfig } from 'payload'

export const ExperiencesLists: CollectionConfig = {
  slug: 'experiences-list',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'yearRange', 'updatedAt'],
    description: 'Timeline entries powering experience pages and detail views.',
  },
  fields: [
    // company name
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    // company image
    {
      name: 'companyImage',
      label: 'Company Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image shown on cards and detail hero sections.',
      },
    },
    //company website
    {
      name: 'companyWebsite',
      type: 'text',
      required: true,
    },
    // working year range
    {
      name: 'yearRange',
      label: 'Year Range',
      type: 'text',
      required: true,
      admin: {
        description: 'Year working',
      },
    },
    // position
    {
      name: 'position',
      type: 'text',
      required: true,
      admin: {
        description: 'Position in Company',
      },
    },

    // overview
    {
      name: 'overview',
      type: 'richText',
      required: true,
      admin: {
        description: 'Overview what the company does',
      },
    },

    //role
    {
      name: 'role',
      type: 'richText',
      required: true,
      admin: {
        description: 'Role at the company',
      },
    },

    //projects
    {
      name: 'projects',
      label: 'Highlighted Projects',
      type: 'array',
      admin: {
        initCollapsed: true,
        description: 'Optional set of related projects',
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

    //key achievements
    {
      name: 'keyAchievements',
      label: 'Key Achievements & Contributions',
      type: 'array',
      required: true,
      admin: {
        initCollapsed: true,
        description: 'Each entry renders as a section with its own rich text details.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Details',
          type: 'richText',
          required: true,
          admin: {
            description: 'Use paragraphs or bullet lists to describe contributions.',
          },
        },
      ],
    },

    //impact
    {
      name: 'impact',
      label: 'Impact',
      type: 'array',
      required: true,
      admin: {
        initCollapsed: true,
        description: 'Each entry renders as a section with its own rich text details.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Details',
          type: 'richText',
          required: true,
          admin: {
            description: 'Use paragraphs or bullet lists to describe impact.',
          },
        },
      ],
    },
  ],
}
