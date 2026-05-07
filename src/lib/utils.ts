import { type ClassNameValue } from 'tailwind-merge'
import { twMerge } from 'tailwind-merge'

const clx = (...args: ClassNameValue[]): string => {
  return twMerge(args)
}

type LexicalNode = {
  text?: string
  children?: LexicalNode[]
  [key: string]: unknown
}

/**
 * Recursively extracts plain text from a Payload Lexical rich text node tree.
 */
function lexicalToPlainText(node: LexicalNode): string {
  if (typeof node.text === 'string') return node.text
  if (Array.isArray(node.children)) {
    return node.children.map(lexicalToPlainText).join(' ')
  }
  return ''
}

/**
 * Extracts plain text from a Payload Lexical rich text field (has a `root` node).
 */
function richTextToPlainText(field: { root: LexicalNode } | null | undefined): string {
  if (!field?.root) return ''
  return lexicalToPlainText(field.root).replace(/\s+/g, ' ').trim()
}

export { clx, richTextToPlainText }
