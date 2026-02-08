import Link from 'next/link'
import { Button } from './Button'

interface WebsiteCheckerProps {
  href: string
  isLive: boolean | null | undefined
}

export default function WebsiteChecker({ href, isLive }: WebsiteCheckerProps) {
  return (
    <div className="gap-4 flex flex-col">
      {!isLive && (
        <>
          <p className="text-orange-150 font-bold">
            Please note that the website has not yet launched. Live access will remain unavailable
            until the official release.
          </p>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Button
              disabled
              className="flex gap-2 px-8 py-2 bg-white border border-gray-110  hover:text-gray-110 text-gray-130  cursor-not-allowed"
            >
              <div>Company Link</div>
            </Button>
          </Link>
        </>
      )}
      {isLive && (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Button className="px-8 py-2 text-white hover:cursor-pointer">Company Link</Button>
        </Link>
      )}
    </div>
  )
}
