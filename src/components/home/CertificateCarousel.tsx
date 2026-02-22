import Image from 'next/image'
import HorizontalCard from '@/components/shared/HorizontalCard'
import type { HomeInfo, Media } from '@/payload-types'
import { getMediaUrl } from '@/lib/media'

type CertificateCarouselProps = {
  items: NonNullable<HomeInfo['certificate']>
}

export default function CertificateCarousel({ items }: CertificateCarouselProps) {
  if (!items.length) return null

  return (
    <HorizontalCard title="CERTIFICATES">
      {items.map((certificate) => {
        const certificateLogo = certificate.logo as Media
        const imageSrc = getMediaUrl(certificateLogo)
        return (
          <div
            key={certificate.title.concat(certificate.year)}
            className="flex shrink-0 snap-start items-center justify-between rounded-lg border border-blue-110 bg-white p-3"
          >
            <div>
              <div className="font-medium" style={{ maxWidth: '20ch', wordWrap: 'break-word' }}>
                {certificate.title}
              </div>
              <div className="text-xs text-gray-140">
                {certificate.issuer}, {certificate.year}
              </div>
              {certificate.credID && (
                <div className="text-xs font-light text-gray-140">{certificate.credID}</div>
              )}
            </div>
            <div className="pl-4">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={certificate.issuer}
                  width={32}
                  height={32}
                  quality={100}
                />
              )}
            </div>
          </div>
        )
      })}
    </HorizontalCard>
  )
}
