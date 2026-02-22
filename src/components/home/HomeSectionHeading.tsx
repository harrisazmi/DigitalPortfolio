import type { ReactNode } from 'react'

type HomeSectionHeadingProps = {
  label?: string
  action?: ReactNode
}

export function HomeSectionHeading({ label, action }: HomeSectionHeadingProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="text-xs font-medium tracking-[2px] text-gray-130">{label}</h2>
      {action}
    </div>
  )
}
