import { BroadcastIcon, GitHubIcon } from '@/Icons'
import { Button } from './Button'
import Link from 'next/link'

interface ProjectLinksProps {
  website?: string | null
  websitelive?: boolean | null
  github?: string | null
  githublive?: boolean | null
}

export default function ProjectLinks({
  website,
  websitelive,
  github,
  githublive,
}: ProjectLinksProps) {
  return (
    <section className="w-full">
      <h2 className="font-bold text-2xl pb-6 pt-6">Project Links</h2>
      {!websitelive && (
        <p className="font-bold text-orange-150 pb-6">
          Please note that the project has not yet launched. Live access will remain unavailable
          until the official release.
        </p>
      )}

      <div className="flex flex-wrap gap-4 items-center">
        {websitelive && website ? (
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <Button className="flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
              <BroadcastIcon />
              <div>View Live</div>
            </Button>
          </Link>
        ) : (
          <div className="shrink-0">
            <Button
              disabled
              className="flex gap-2 bg-white border border-gray-110 hover:text-gray-110 text-gray-130 cursor-not-allowed"
            >
              <BroadcastIcon />
              <div>View Live</div>
            </Button>
          </div>
        )}
        {githublive && github ? (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Button className="flex gap-2 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
              <GitHubIcon />
              <div>View Repository</div>
            </Button>
          </Link>
        ) : (
          <div className="shrink-0">
            <Button
              disabled
              className="flex gap-2 bg-white border border-gray-110 hover:text-gray-110 text-gray-130 cursor-not-allowed"
            >
              <GitHubIcon />
              <div>View Repository</div>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
