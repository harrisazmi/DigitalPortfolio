"use client";
import { FunctionComponent, ReactNode, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, PlaceholderIcon, SunIcon } from "@/Icons";

interface Themes {
  theme: string;
  icon: ReactNode;
}

interface ThemeToggler {
  themes?: Themes[];
}

const ThemeToggler: FunctionComponent<ThemeToggler> = ({
  themes = [
    { theme: "light", icon: <SunIcon /> },
    { theme: "dark", icon: <MoonIcon /> },
  ],
}) => {
  const { toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    toggleTheme(themes[nextIndex]?.theme!);
  };

  return (
    <button
      className="size-10 items-center justify-center flex hover:cursor-pointer"
      onClick={handleClick}
    >
      {themes[currentIndex]?.icon ?? <PlaceholderIcon />}
    </button>
  );
};
export { ThemeToggler };
