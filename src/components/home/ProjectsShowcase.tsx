import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/Icons'
import { Button } from '@/components/shared/Button'
import type { CollabProject } from '@/data/ProjectsData'

type ProjectsShowcaseProps = {
  projects: CollabProject[]
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  if (!projects.length) return null

  return (
    <div className="flex w-full flex-col gap-10 py-8">
      {projects.map((project) => (
        <article key={project.title} className="flex flex-col gap-4">
          <Link href={project.href} className="relative block w-full">
            <div className="aspect-325/202 w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={3000}
                height={2000}
                quality={100}
              />
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-140">{project.shortDescription}</p>
            <Link href={project.href} className="mt-3 w-fit">
              <Button size={'small'} className="flex h-8 items-center gap-2 text-white text-sm">
                More Info <ArrowRightIcon className="shrink-0 text-white" />
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
