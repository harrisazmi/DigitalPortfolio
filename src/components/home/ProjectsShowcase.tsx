import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/Icons'
import { Button } from '@/components/shared/Button'
import { Media, Project } from '@/types/payload-types'
import { getMediaUrl } from '@/lib/media'

type ProjectsShowcaseProps = {
  projects: Project[]
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <div className="flex w-full flex-col gap-10 py-8">
      {projects.map((project) => {
        const projectImage = project.image as Media
        const imageSrc = getMediaUrl(projectImage)

        return (
          <article key={project.id} className="flex flex-col gap-4">
            <Link
              href={project.path}
              className="relative block w-full"
              aria-label={`View ${project.title}`}
            >
              <div className="aspect-325/202 w-full overflow-hidden rounded-2xl border-[1.5px] border-gray-200">
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={projectImage.alt}
                    width={3000}
                    height={2000}
                    quality={100}
                  />
                )}
              </div>
            </Link>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold">{project.title}</div>
              <p className="text-gray-140">{project.shortDescription}</p>
              <Link
                href={project.path}
                className="mt-3 w-fit"
                aria-label={`View ${project.title} project details`}
              >
                <Button
                  size={'small'}
                  className="flex h-8 items-center gap-2 text-white text-sm hover:cursor-pointer"
                >
                  More Info <ArrowRightIcon className="shrink-0 text-white" />
                </Button>
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}
