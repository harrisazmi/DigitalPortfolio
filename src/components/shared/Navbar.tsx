'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clx } from '@/lib/utils'

import { MoonIcon, SunIcon } from '@/Icons'
import { NavigationTabs } from '@/data/NavigationData'
import { IconAnimation } from './IconAnimation'
import { ThemeToggler } from './ThemeToggler'
import { IconInfo } from './IconInfo'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className="p-8 items-center justify-center flex sticky top-2 z-50">
      <div className="flex items-center justify-between bg-gray-110 p-4 py-2 rounded-xl gap-2">
        <ThemeToggler
          themes={[
            { theme: 'light', icon: <SunIcon className="text-gray-130" /> },
            { theme: 'dark', icon: <MoonIcon className="text-gray-130" /> },
          ]}
        />

        {NavigationTabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={clx(
              'hover:text-white',
              'p-2 rounded-xl relative group overflow-visible',
              pathname.startsWith(tab.href) ? 'bg-linear-to-br from-orange-110 to-orange-120' : '',
            )}
          >
            <div
              className={clx(
                'relative z-10 flex items-center',
                'group-hover:text-white',
                pathname.startsWith(tab.href) ? ' text-white' : ' text-gray-130',
              )}
            >
              {tab.icon}
            </div>

            <IconAnimation />
            <IconInfo>{tab.label}</IconInfo>
          </Link>
        ))}
      </div>
    </div>
  )
}
