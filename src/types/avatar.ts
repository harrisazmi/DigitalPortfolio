import type { AvatarInfo as PayloadAvatarInfo } from '@/types/payload-types'

export type AvatarInfo = PayloadAvatarInfo
type LinksArray = NonNullable<AvatarInfo['links']>
export type AvatarLinkType = LinksArray[number]
export type AvatarLinkIcon = AvatarLinkType['icon']
