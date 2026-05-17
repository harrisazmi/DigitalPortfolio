import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-20">
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-120 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-130">
          <span>404</span>
          <span>·</span>
          <span>Project Not Found</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            <span className="bg-linear-to-r from-orange-110 via-orange-150 to-blue-110 bg-clip-text text-transparent">
              This project vanished into the ether
            </span>
          </h1>
          <p className="text-base leading-relaxed text-gray-140">
            The project you were looking for may have been archived, renamed, or never published.
            Explore the full projects collection or reach out if you think something should still be
            here.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-orange-110 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-140 focus-visible:outline focus-visible:outline-orange-120"
          >
            Back to Projects
          </Link>
          <Link
            href="/contacts"
            className="inline-flex items-center rounded-full border border-gray-120 px-7 py-3 text-sm font-semibold text-gray-140 transition hover:border-orange-120 hover:text-orange-120 focus-visible:outline   focus-visible:outline-gray-120"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}
