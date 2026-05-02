'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/Icons'

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className="size-10 items-center justify-center flex hover:cursor-pointer"
      onClick={handleClick}
      aria-label="Toggle theme"
    >
      <SunIcon className="text-gray-130 dark:hidden" />
      <MoonIcon className="text-gray-130 hidden dark:block" />
    </button>
  )
}
export { ThemeToggler }
