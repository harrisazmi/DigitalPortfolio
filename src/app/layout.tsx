import type { JSX, ReactNode } from 'react'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/hooks/useTheme'
import { clx } from '@/lib/utils'
import Navbar from '@/components/shared/Navbar'
import LayoutContent from '@/components/shared/LayoutContent'
import { cmsFind } from '@/lib/cms'
import type { AvatarInfo } from '@/types/avatar'

type ServerProp = {
  children: ReactNode
}

// Async-friendly server component type alias
type FSP = (props: ServerProp) => Promise<JSX.Element>

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliocf.harrisviewcodes.uk'),
  title: 'Harris Azmi Roswadi | GovTech Malaysia · Mid-Senior Frontend Engineer',
  description:
    'Portfolio of Harris Azmi Roswadi — Mid-Senior Frontend Engineer at GovTech Malaysia (Nucleus Unit). Specialist in React, Next.js, and enterprise-grade government web platforms.',
  keywords: [
    'Harris Azmi Roswadi',
    'GovTech Malaysia',
    'GovTech Malaysia Developer',
    'GovTech Nucleus Unit',
    'Mid-Senior Frontend Engineer Malaysia',
    'Mid-Senior Software Engineer Malaysia',
    'Frontend Lead Malaysia',
    'Full-Stack Developer',
    'Software Engineer',
    'Next.js Developer',
    'React Expert',
    'Government Web Developer Malaysia',
    'TypeScript',
    'Tailwind CSS',
    'CI/CD',
    'Cloudflare Pages',
    'DevOps',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Harris Azmi bin Roswadi',
      url: 'https://www.linkedin.com/in/harris-azmi-roswadi/',
    },
  ],
  openGraph: {
    title: 'Harris Azmi Roswadi | GovTech Malaysia · Mid-Senior Frontend Engineer',
    description:
      'Portfolio of Harris Azmi Roswadi — Mid-Senior Frontend Engineer at GovTech Malaysia (Nucleus Unit). Specialist in React, Next.js, and enterprise-grade government web platforms.',
    url: 'https://portfoliocf.harrisviewcodes.uk',
    siteName: 'Harris Azmi Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://portfoliocf.harrisviewcodes.uk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harris Azmi Roswadi — GovTech Malaysia Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harris Azmi Roswadi | GovTech Malaysia · Mid-Senior Frontend Engineer',
    description:
      'Mid-Senior Frontend Engineer at GovTech Malaysia. Building scalable government web platforms with React, Next.js, and TypeScript.',
    images: ['https://portfoliocf.harrisviewcodes.uk/og-image.png'],
  },
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/home',
  },
}

const RootLayout: FSP = async ({ children }) => {
  const { docs: avatarInfoData } = await cmsFind<AvatarInfo>('avatar-info', { limit: 1, depth: 1 })
  const avatarInfo = avatarInfoData[0]

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Harris Azmi Roswadi',
              url: 'https://portfoliocf.harrisviewcodes.uk/home',
              jobTitle: 'Mid-Senior Frontend Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'GovTech Malaysia',
              },
              sameAs: ['https://www.linkedin.com/in/harris-azmi-roswadi/'],
            }),
          }}
        />
      </head>
      <body
        className={clx(
          `${outfit.variable} antialiased`,
          'items-center justify-center flex flex-col font-outfit xl:px-8',
        )}
      >
        <ThemeProvider>
          <div className="mx-auto container px-8 pb-8 ">
            <Navbar></Navbar>
            <main>
              {avatarInfo && <LayoutContent avatarInfo={avatarInfo}>{children}</LayoutContent>}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
