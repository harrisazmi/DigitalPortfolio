interface HighlightSectionProps {
  title: string
  children: React.ReactNode
}

export default function HighlightSection({ title, children }: HighlightSectionProps) {
  return (
    <div className="w-full border-b border-blue-110">
      <h2 className="tracking-[2px] text-gray-130 text-xs font-medium text-start w-full ">
        {title}
      </h2>
      {children}
    </div>
  )
}
