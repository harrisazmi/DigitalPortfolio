import Link from 'next/link'

import { Button } from './Button'
import { clx } from '@/lib/utils'

type WebsiteCheckerProps = {
  href: string
  isLive?: boolean
}

export default function WebsiteChecker({ href, isLive = false }: WebsiteCheckerProps) {
  const linkProps = isLive
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : { target: '_self', rel: undefined }

  return (
    <div className="flex flex-col gap-4">
      {!isLive && (
        <p className="text-orange-150 font-bold">
          Please note that the website has not yet launched. Live access will remain unavailable
          until the official release.
        </p>
      )}
      <Link href={href} {...linkProps} aria-disabled={!isLive} tabIndex={isLive ? 0 : -1}>
        <Button
          disabled={!isLive}
          className={clx(
            'flex gap-2 px-8 py-2 border border-gray-110 transition-colors duration-200',
            isLive
              ? 'bg-orange-160 text-white hover:bg-orange-150'
              : 'bg-white text-gray-130 cursor-not-allowed hover:text-gray-110',
          )}
        >
          Company Link
        </Button>
      </Link>
    </div>
  )
}
