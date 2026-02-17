import type { CollectionConfig } from 'payload'

export const ProjectDetails: CollectionConfig = {
  slug: 'project-details',
  labels: {
    singular: 'Project Detail',
    plural: 'Project Details',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'priority', 'updatedAt'],
    description: 'Long-form write-ups used by the detailed project pages.',
  },
  fields: [
    {
      name: 'title',
      label: 'Project Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Stable identifier consumed by the frontend route builder.',
      },
    },
    {
      name: 'priority',
      label: 'Sort Order',
      type: 'number',
      admin: {
        description: 'Lower numbers surface first when listing detail pages.',
      },
    },
    {
      name: 'hero',
      label: 'Hero Media',
      type: 'group',
      fields: [
        {
          name: 'image',
          label: 'Hero Media Asset',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'overview',
      label: 'Project Overview',
      type: 'textarea',
      required: true,
      admin: {
        rows: 5,
        description: 'Opening paragraph that appears directly under the hero.',
      },
    },
    {
      name: 'problemStatement',
      label: 'Problem & Solution Narrative',
      type: 'group',
      fields: [
        {
          name: 'issuesHeader',
          type: 'text',
          admin: {
            description: 'header for Issues',
          },
        },
        {
          name: 'issueRichText',
          label: 'Issues Rich Text',
          type: 'richText',
          admin: {
            description: 'Rich Text for Issue description',
          },
        },
        {
          name: 'solutionsHeader',
          type: 'text',
          admin: {
            description: 'header for Solutions',
          },
        },
        {
          name: 'solutionsRichText',
          label: 'Solutions Rich Text',
          type: 'richText',
          admin: {
            description: 'Rich Text for Solutions',
          },
        },
      ],
    },
    {
      name: 'links',
      label: 'Project Links',
      type: 'group',
      fields: [
        {
          name: 'website',
          type: 'text',
          required: true,
        },
        {
          name: 'websitelive',
          label: 'Website Verified Live',
          type: 'checkbox',
          required: true,
          admin: {
            description: 'Editors tick this once they confirm the official site is reachable.',
          },
        },
        {
          name: 'github',
          type: 'text',
          required: true,
        },
        {
          name: 'githublive',
          label: 'Github Verified Live',
          type: 'checkbox',
          required: true,
          admin: {
            description:
              'Editors tick this once they confirm the official Github site is reachable.',
          },
        },
      ],
    },
    {
      name: 'techstack',
      label: 'Tech Stack Groups',
      type: 'array',
      admin: {
        initCollapsed: true,
        description: 'Mirror the grouped tech stacks exported inside src/data/ProjectInfo.tsx.',
      },
      fields: [
        {
          name: 'key',
          label: 'Group Key',
          type: 'text',
          required: true,
          admin: {
            description: 'Slug consumed by the frontend (e.g., main, fenbe, devops).',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'items',
          label: 'Stack Items',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'image',
              label: 'Tech Stack',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
    {
      name: 'sections',
      label: 'Content Sections',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'key',
          label: 'Section Key',
          type: 'text',
          required: true,
          admin: {
            description: 'Machine-friendly identifier, e.g., FrontendDevelopment.',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'items',
          label: 'Section Items',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'details',
              label: 'Detail Lines',
              type: 'array',
              minRows: 1,
              fields: [
                {
                  name: 'line',
                  label: 'Detail',
                  type: 'richText',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
