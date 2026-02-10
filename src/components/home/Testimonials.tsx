import Image from 'next/image'
import HorizontalCard from '@/components/shared/HorizontalCard'
import type { TestimonialItem } from '@/types/home'

type TestimonialsProps = {
  items: TestimonialItem[]
}

export function Testimonials({ items }: TestimonialsProps) {
  if (!items.length) return null

  return (
    <HorizontalCard title="WHAT PEOPLE SAY ABOUT ME">
      {items.map((item) => (
        <div
          key={item.name.concat(item.company)}
          className="flex w-77.5 shrink-0 snap-start flex-col gap-2.5 rounded-lg border border-blue-110 bg-white p-3"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-8 shrink-0 overflow-hidden rounded-full">
              <Image src={item.path} alt={item.name} width={32} height={32} quality={100} />
            </div>
            <div>
              <div className="font-medium" style={{ maxWidth: '20ch', wordWrap: 'break-word' }}>
                {item.name}
              </div>
              <div className="text-xs text-gray-140">
                {item.position}, {item.company}
              </div>
            </div>
          </div>
          <p className="text-xs font-light text-gray-140">{item.comments}</p>
        </div>
      ))}
    </HorizontalCard>
  )
}
