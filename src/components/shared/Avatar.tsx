'use client'
import { Button } from './Button'
import { IconAnimation } from './IconAnimation'
import { clx } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { IconInfo } from './IconInfo'
import { TypeAnimation } from 'react-type-animation'
import type { AvatarInfo, AvatarLinkIcon } from '@/types/avatar'
import type { ReactElement } from 'react'
import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from '@/Icons'
import { Media } from '@/types/payload-types'
import { getMediaUrl } from '@/lib/media'

interface AvatarProps {
  className?: string
  avatarInfo?: AvatarInfo
}

export default function Avatar({ className, avatarInfo }: AvatarProps) {
  const iconMap: Record<AvatarLinkIcon, ReactElement> = {
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
    mail: <MailIcon />,
    resume: <ResumeIcon />,
  }
  const avatarImageLight = avatarInfo?.imageLight as Media
  const avatarImageDark = avatarInfo?.imageDark as Media
  const imageSrcLight = getMediaUrl(avatarImageLight)
  const imageSrcDark = getMediaUrl(avatarImageDark)

  return (
    <>
      {avatarInfo && (
        <div
          className={clx(
            'h-150  bg-gray-110 rounded-xl flex justify-center p-8 ',
            'max-lg:bg-white xl:w-77.5',
            className,
          )}
        >
          <div className="flex flex-col justify-between h-134">
            <div className="items-center justify-center flex flex-col">
              <div className="h-70 w-60 rounded-lg mb-6 overflow-clip">
                <div className="img-light">
                  {imageSrcLight && (
                    <Image
                      src={imageSrcLight}
                      alt={'Avatar Light Mode'}
                      width={240}
                      height={280}
                    ></Image>
                  )}
                </div>
                <div className="img-dark">
                  {imageSrcDark && (
                    <Image
                      src={imageSrcDark}
                      alt={'Avatar Dark Mode'}
                      width={240}
                      height={280}
                    ></Image>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <div className="text-center">
                  <h1 className="text-4xl font-extrabold  text-black">{avatarInfo.username}</h1>
                  <h2 className="text-xl font-medium">
                    <span
                      className={`bg-linear-to-br from-orange-110 to-orange-120 bg-clip-text text-transparent`}
                    >
                      <TypeAnimation
                        sequence={avatarInfo.designations.flatMap((designation) => [
                          designation,
                          1000,
                        ])}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                    </span>
                  </h2>
                  <p className="text-lg text-gray-140">{avatarInfo.location}</p>
                </div>
              </div>

              <div className="space-x-4 py-4 flex">
                {avatarInfo.links?.map((tab) => (
                  <a
                    key={tab.href}
                    href={tab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tab.label}
                    className={clx(
                      'p-2 rounded-xl relative group overflow-visible',
                      'hover:text-white',
                    )}
                  >
                    <div
                      className="relative z-10 flex items-center text-gray-130 group-hover:text-white"
                      aria-hidden="true"
                    >
                      {iconMap[tab.icon]}
                    </div>
                    <IconAnimation />
                    <IconInfo className="top-11 bg-gray-120">{tab.label}</IconInfo>
                  </a>
                ))}
              </div>
            </div>
            <div className="items-center justify-center flex">
              <Link href={'/contacts'}>
                <Button className="px-10 py-2 hover:cursor-pointer text-white">
                  {avatarInfo.buttonInfo}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
