'use client'

import { usePathname } from 'next/navigation'
import Avatar from './Avatar'
import { clx } from '@/lib/utils'
import type { AvatarInfo } from '@/types/avatar'

export default function LayoutContent({
  children,
  avatarInfo,
}: {
  children: React.ReactNode
  avatarInfo?: AvatarInfo | null
}) {
  const pathname = usePathname()
  const isHome = pathname === '/home'

  return (
    <>
      {avatarInfo && (
        <div
          className={clx(
            'flex justify-center flex-col text-center items-center',
            'lg:flex-row lg:gap-10 lg:items-start lg:text-left',
          )}
        >
          {isHome && <Avatar className="lg:hidden" avatarInfo={avatarInfo} />}
          <Avatar className="hidden lg:block" avatarInfo={avatarInfo} />
          <div className="lg:w-162.5">{children}</div>
          {!isHome && <Avatar className=" lg:hidden" avatarInfo={avatarInfo} />}
        </div>
      )}
    </>
  )
}
