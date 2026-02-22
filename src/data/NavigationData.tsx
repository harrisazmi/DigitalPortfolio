import type { ReactNode } from 'react'
import { BriefcaseIcon, FolderIcon, HomeIcon, PhoneIcon, WrenchIcon } from '@/Icons'

export type NavigationTab = {
  href: string
  label: string
  icon: ReactNode
}

export const NavigationTabs: NavigationTab[] = [
  {
    href: '/home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    href: '/experiences',
    label: 'Experiences',
    icon: <BriefcaseIcon />,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: <FolderIcon />,
  },
  {
    href: '/tools',
    label: 'Tools',
    icon: <WrenchIcon />,
  },

  {
    href: '/contacts',
    label: 'Contact',
    icon: <PhoneIcon />,
  },
]
