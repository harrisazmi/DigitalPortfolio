import { BroadcastIcon, GitHubIcon } from '@/Icons'
import { Button } from './Button'
import Link from 'next/link'
import type { ProjectDetail } from '@/types/payload-types'
import { OthersIcon } from '@/Icons/OthersIcon'

type ProjectDetailLinks = NonNullable<ProjectDetail['links']>

interface ProjectLinksProps {
  website?: ProjectDetailLinks['website']
  githubs?: ProjectDetailLinks['githubs']
  others?: ProjectDetailLinks['others']
}

export default function ProjectLinks({ website, githubs, others }: ProjectLinksProps) {
  return (
    <section className="w-full">
      <h2 className="font-bold text-2xl pb-6 pt-6">Project Links</h2>

      {website && (
        <>
          {website.verified !== true && (
            <p className="font-bold text-orange-150 pb-6">
              Please note that the project has not yet launched. Live access will remain unavailable
              until the official release.
            </p>
          )}
          {website.title && <h3 className="text-lg font-semibold pb-2">{website.title}</h3>}
          <div className="flex flex-wrap gap-4 items-center">
            {website.verified !== true && (
              <div className="shrink-0 pb-4">
                <Button
                  disabled
                  className="flex gap-3 bg-white border border-gray-110 hover:text-gray-110 text-gray-130 cursor-not-allowed"
                >
                  <BroadcastIcon />
                  <div>View Live</div>
                </Button>
              </div>
            )}
            {website.verified === true && website.url && (
              <div className="pb-4">
                <Link href={website.url} target="_blank" rel="noopener noreferrer">
                  <Button className="flex gap-3 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
                    <BroadcastIcon />
                    <div>View Live</div>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </>
      )}

      {Array.isArray(githubs) &&
        githubs.length > 0 &&
        githubs.map((repo, index) => {
          const key = repo?.id ?? `${repo?.title ?? 'repo'}-${index}`
          const isEnabled = repo?.verified === true && Boolean(repo?.url)

          return (
            <div key={key}>
              {!isEnabled && (
                <div className="shrink-0 pb-4">
                  <Button
                    disabled
                    className="flex gap-3 bg-white border border-gray-110 hover:text-gray-110 text-gray-130 cursor-not-allowed"
                  >
                    <GitHubIcon />
                    <div>View Code - Github</div>
                  </Button>
                </div>
              )}

              {isEnabled && (
                <>
                  <h3 className="text-lg font-semibold pb-2">{repo.title}</h3>
                  <div className="pb-4">
                    <Link className="" href={repo.url!} target="_blank" rel="noopener noreferrer">
                      <Button className="flex gap-3 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110">
                        <GitHubIcon />
                        <div>View Code - Github</div>
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          )
        })}

      {Array.isArray(others) &&
        others.length > 0 &&
        others.map((repo, index) => {
          const key = repo?.id ?? `${repo?.title ?? 'repo'}-${index}`
          const isEnabled = repo?.verified === true && Boolean(repo?.url)

          return (
            <div key={key}>
              {!isEnabled && (
                <div className="shrink-0">
                  <Button
                    disabled
                    className="flex gap-3 bg-white border border-gray-110 hover:text-gray-110 text-gray-130 cursor-not-allowed"
                  >
                    <OthersIcon />
                    <div>View {repo.title}</div>
                  </Button>
                </div>
              )}

              {isEnabled && (
                <>
                  <h3 className="text-lg font-semibold pb-2">{repo.title}</h3>
                  <Link href={repo.url!} target="_blank" rel="noopener noreferrer">
                    <Button className="flex gap-3 bg-white border border-gray-110 hover:cursor-pointer hover:bg-gray-110 items-center justify-center">
                      <OthersIcon />
                      <div>View {repo.title}</div>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )
        })}
    </section>
  )
}
