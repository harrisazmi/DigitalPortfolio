import type { ExperiencesList as PayloadExperiencesList } from '@/payload-types'

export type ExperiencesList = PayloadExperiencesList

export type ExperienceProject = NonNullable<ExperiencesList['projects']>[number]

export type ExperienceRichTextField =
  | ExperiencesList['overview']
  | ExperiencesList['role']
  | ExperiencesList['keyAchievements'][number]['content']
  | ExperiencesList['impact'][number]['content']
