import Image from 'next/image'
import type { ProjectDetail } from '@/payload-types'
import { getMediaUrl } from '@/lib/media'

interface TechStackProps {
  techstackdata?: ProjectDetail['techstack']
}

export default function TechStack({ techstackdata }: TechStackProps) {
  return (
    <section className="space-y-8 pt-6">
      {techstackdata?.map((group) => (
        <div key={group?.key}>
          {group?.title && <h2 className="font-semibold text-2xl pb-4">{group.title}</h2>}

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-0">
            {group?.items?.map((item) => {
              const imageSrc = getMediaUrl(item?.image)

              return (
                <li
                  key={item?.name}
                  className="bg-gray-110 max-w-75 mx-auto rounded-lg flex items-center text-black w-full"
                >
                  <div className="p-4">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={item?.name ?? 'Tech stack item'}
                        width={60}
                        height={60}
                        quality={100}
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  {item?.name}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}
