'use client'

type HeroSectionProps = {
  title: string
  description: string
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <>
      <h1 className="text-4xl font-extrabold">
        {title.split('\n').map((line, id) => (
          <span key={line.concat(String(id))}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <p className="pt-3 text-gray-140">{description}</p>
    </>
  )
}
