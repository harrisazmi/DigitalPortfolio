import { clx } from '@/lib/utils'
import { HomeSectionHeading } from './HomeSectionHeading'

type SectionCardProps = {
  label?: string
  children: React.ReactNode
  action?: React.ReactNode
  bordered?: boolean
  className?: string
}

export default function SectionCard({
  label,
  children,
  action,
  bordered = true,
  className,
}: SectionCardProps) {
  return (
    <section className={clx(bordered ? 'w-full border-b border-blue-110' : 'w-full', className)}>
      <HomeSectionHeading label={label} action={action} />
      {children}
    </section>
  )
}
