'use client'

import { useMemo } from 'react'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

type LexicalRootData = {
  root: {
    type: string
    children: { type: unknown; version: number; [k: string]: unknown }[]
    direction: ('ltr' | 'rtl') | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
  [k: string]: unknown
}

type RichTextContentProps = {
  field?: LexicalRootData | null
  className?: string
}

export function RichTextContent({ field, className }: RichTextContentProps) {
  const html = useMemo(() => {
    if (!field?.root) return ''

    try {
      return convertLexicalToHTML({
        data: field as Parameters<typeof convertLexicalToHTML>[0]['data'],
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
