import { HomeSectionHeading } from './HomeSectionHeading'

type SectionCardProps = {
  label: string
  children: React.ReactNode
  action?: React.ReactNode
  bordered?: boolean
}

export function SectionCard({ label, children, action, bordered = true }: SectionCardProps) {
  return (
    <section className={bordered ? 'w-full border-b border-blue-110' : 'w-full'}>
      <HomeSectionHeading label={label} action={action} />
      {children}
    </section>
  )
}
