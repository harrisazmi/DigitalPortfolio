import type { CollectionConfig } from 'payload'

const techStackCategoryOptions: { label: string; value: string }[] = [
  { label: 'Fullstack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Language', value: 'language' },
  { label: 'Database', value: 'database' },
  { label: 'Dev Ops', value: 'dev-ops' },
]

const contactIconOptions: { label: string; value: string }[] = [
  { label: 'GitHub', value: 'GitHubIcon' },
  { label: 'LinkedIn', value: 'LinkedInIcon' },
  { label: 'WhatsApp', value: 'WhatsappIcon' },
  { label: 'Telegram', value: 'TelegramIcon' },
  { label: 'Mail', value: 'MailIcon' },
  { label: 'Resume', value: 'ResumeIcon' },
]

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
          name: 'path',
          label: 'Logo Path',
          type: 'text',
          required: true,
          admin: {
            description: 'Absolute public path or CDN URL, e.g., /tools/fullstack/nextjs.png.',
          },
        },
        {
          name: 'proficiency',
          type: 'text',
          admin: {
            description: 'Short sentence describing your experience with the tool.',
          },
        },
        {
          name: 'category',
          type: 'select',
          options: techStackCategoryOptions,
          defaultValue: 'fullstack',
          admin: {
            description: 'Determines the section grouping inside the tech stack grid.',
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
          name: 'path',
          label: 'Logo Path',
          type: 'text',
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
          name: 'path',
          label: 'Badge Path',
          type: 'text',
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
          name: 'path',
          label: 'Avatar Path',
          type: 'text',
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
    {
      name: 'connect',
      label: 'Contact Links',
      type: 'array',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'iconKey',
          label: 'Icon',
          type: 'select',
          required: true,
          options: contactIconOptions,
          admin: {
            description: 'Front-end maps this key to the matching React icon component.',
          },
        },
        { name: 'details', type: 'text', required: true },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
