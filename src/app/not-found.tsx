import type { Metadata } from 'next'
import Link from 'next/link'

//404 issues with this page dont get triggered.

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-16">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-120 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-130">
          <span>404</span>
          <span>·</span>
          <span>Page Missing</span>
        </div>

        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            <span className="bg-linear-to-r from-orange-110 via-orange-150 to-blue-110 bg-clip-text text-transparent">
              Looks like you&apos;ve wandered off the map
            </span>
          </h1>
          <p className="text-base leading-relaxed text-gray-140">
            This page either moved, never existed, or is still under construction. Try heading back
            home, browsing highlighted projects, or reaching out if you need a direct link.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-orange-110 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-140"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-gray-120 px-7 py-3 text-sm font-semibold text-gray-140 transition hover:border-orange-120 hover:text-orange-120 "
          >
            Browse Projects
          </Link>
          <Link
            href="/contacts"
            className="inline-flex items-center rounded-full border border-transparent px-7 py-3 text-sm font-semibold text-gray-140 underline-offset-4 hover:underline"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}
