import Image from 'next/image'
import type { TechStackItem } from '@/types/home'

type TechStackGridProps = {
  items?: TechStackItem[]
}

export function TechStackGrid({ items = [] }: TechStackGridProps) {
  if (!items.length) {
    return <p className="text-sm text-gray-400">Tech stack information coming soon.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 xl:grid-cols-3">
      {items.map((stack) => (
        <div
          key={stack.name}
          className="flex items-center justify-between rounded-lg border border-blue-110 py-2 pl-2"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl">
              <Image
                src={stack.path}
                alt={stack.name}
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-12 rounded-lg object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base text-black">{stack.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
