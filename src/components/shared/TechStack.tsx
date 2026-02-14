import Image from 'next/image'
import type { Media } from '@/payload-types'
import { getMediaUrl } from '@/lib/media'

export type TechTool = {
  name: string
  path?: string | null
  media?: Media | string | null
}

interface TechStackProps {
  techStackTool: TechTool[]
  title: string
}

export default function TechStack({ techStackTool, title }: TechStackProps) {
  return (
    <>
      <h2 className="font-semibold text-2xl pb-6 pt-6 mb-0">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-0">
        {techStackTool.map((tool) => {
          const imageSrc = getMediaUrl(tool.media ?? tool.path)

          return (
            <li
              key={tool.name}
              className="bg-gray-110 max-w-75 mx-auto rounded-lg flex items-center text-black w-full"
            >
              <div className="p-4">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={tool.name}
                    width={60}
                    height={60}
                    quality={100}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-15 h-15 rounded-lg bg-gray-120" aria-hidden="true" />
                )}
              </div>
              {tool.name}
            </li>
          )
        })}
      </div>
    </>
  )
}
