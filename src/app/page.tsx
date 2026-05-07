import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/home',
  },
}

export default function Home() {
  redirect('/home')
}
