import type { CollectionConfig } from 'payload'

export const AvatarInfo: CollectionConfig = {
  slug: 'avatar-info',
  admin: {
    useAsTitle: 'username',
    defaultColumns: ['username', 'updatedAt'],
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      required: true,
    },
    {
      name: 'designations',
      type: 'text',
      hasMany: true,
      required: true,
      defaultValue: () => [],
      admin: {
        description:
          'Ordered list of roles or taglines displayed under your name. Example: ["chemical engineer","developer"]',
      },
      validate: (value) => {
        if (!Array.isArray(value)) {
          return 'Designations must be an array of strings.'
        }

        if (value.length === 0) {
          return 'Provide at least one designation.'
        }

        const hasInvalidEntry = value.some(
          (entry) => typeof entry !== 'string' || entry.trim().length === 0,
        )

        if (hasInvalidEntry) {
          return 'Each designation must be a non-empty string.'
        }

        return true
      },
    },
    {
      name: 'links',
      type: 'array',
      minRows: 1,
      admin: {
        description: 'External profile and contact links shown in the avatar card.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'GitHub', value: 'github' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Mail', value: 'mail' },
            { label: 'Resume', value: 'resume' },
          ],
        },
      ],
    },
  ],
}
