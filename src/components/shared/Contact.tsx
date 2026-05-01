import { ArrowRightShortIcon } from '@/Icons'
import { clx } from '@/lib/utils'
import Link from 'next/link'
import { getIconComponent } from '@/lib/iconRegistry'
import { ContactInfo } from '@/types/payload-types'

type ContactsProps = {
  title?: string
  contactItems?: ContactInfo['connect']
}

export default function Contacts({ title, contactItems }: ContactsProps) {
  const contactItemsCheck = Array.isArray(contactItems) ? contactItems : []
  return (
    <div className="flex flex-col w-full border-b border-blue-110">
      {title && <h2 className="tracking-[2px] text-gray-130 text-xs font-medium">{title}</h2>}
      <div className="py-8 gap-2 flex flex-col">
        {contactItemsCheck.map((connect) => {
          const IconComponent = getIconComponent(connect.iconKey)
          return (
            <Link key={connect.href} href={connect.href} target="_blank" rel="noopener noreferrer">
              <div
                className={clx(
                  'rounded-lg border border-blue-110 bg-white p-3 flex justify-between items-center shrink-0 w-full',
                  'hover:bg-orange-101 hover:border-orange-140',
                )}
              >
                <div className="flex items-center gap-2.5 justify-start">
                  <div className="text-orange-140">
                    <IconComponent className="size-6" />
                  </div>

                  <div>
                    <div className="font-medium text-base text-start">{connect.title}</div>
                    <div className="font-light text-xs text-gray-140 text-start">
                      {connect.details}
                    </div>
                  </div>
                </div>
                <div>
                  <ArrowRightShortIcon className="size-4"></ArrowRightShortIcon>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
