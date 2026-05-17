import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/home',
  },
}

export default function Home() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.location.replace('/home');`,
      }}
    />
  )
}
