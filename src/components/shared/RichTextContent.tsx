'use client'

import { useMemo } from 'react'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import type { ExperienceRichTextField } from '@/types/experience'

type SerializedEditorState = ExperienceRichTextField
type RichTextContentProps = {
  field?: ExperienceRichTextField | null
  className?: string
}

export function RichTextContent({ field, className }: RichTextContentProps) {
  const html = useMemo(() => {
    if (!field?.root) return ''

    try {
      return convertLexicalToHTML({
        data: field as unknown as SerializedEditorState,
        disableContainer: true,
      })
    } catch (error) {
      console.error('Failed to render rich text field', error)
      return ''
    }
  }, [field])

  if (!html) return null

  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
