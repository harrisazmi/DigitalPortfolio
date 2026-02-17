import type { CollectionConfig } from 'payload'
const contactIconOptions: { label: string; value: string }[] = [
  { label: 'GitHub', value: 'GitHubIcon' },
  { label: 'LinkedIn', value: 'LinkedInIcon' },
  { label: 'WhatsApp', value: 'WhatsappIcon' },
  { label: 'Telegram', value: 'TelegramIcon' },
  { label: 'Mail', value: 'MailIcon' },
  { label: 'Resume', value: 'ResumeIcon' },
]
export const ContactInfo: CollectionConfig = {
  slug: 'contact-info',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'updatedAt'],
  },
  fields: [
    {
      name: 'mainlabel',
      label: 'Main Profile Label',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      label: 'Profile Label',
      type: 'text',
      required: true,
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
