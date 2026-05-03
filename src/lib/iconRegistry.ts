import { ComponentType, SVGProps } from 'react'

import * as Icons from '@/Icons'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconRegistry = Icons as Record<string, IconComponent>

export const getIconComponent = (
  iconKey?: string,
  fallback: IconComponent = Icons.JataNegaraIcon,
) => {
  if (!iconKey) return fallback
  return iconRegistry[iconKey] ?? fallback
}
