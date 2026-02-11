import type { CollectionConfig } from 'payload'

const TOOL_CATEGORY_OPTIONS = [
  { label: 'Languages', value: 'languages' },
  { label: 'Fullstack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Database', value: 'database' },
  { label: 'Dev Ops', value: 'devops' },
  { label: 'Management', value: 'management' },
  { label: 'Others', value: 'others' },
  { label: 'Testing', value: 'testing' },
]

export const Tools: CollectionConfig = {
  slug: 'tools',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category'],
    description: 'Tech stack items powering the Tools grid.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: TOOL_CATEGORY_OPTIONS,
      admin: {
        description: 'Matches the `type` property consumed on the frontend.',
      },
    },
    {
      name: 'icon',
      label: 'Icon Upload',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an icon when not serving from a static /public path.',
      },
    },
  ],
}
