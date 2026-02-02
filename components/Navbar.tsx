"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clx } from "@/lib/utils";

import {
  HomeIcon,
  FolderIcon,
  WrenchIcon,
  BriefcaseIcon,
  PhoneIcon,
  MonochromeIcon,
  MoonIcon,
  SepiaIcon,
  SunIcon,
} from "@/Icons";
import { IconAnimation } from "./IconAnimation";
import { ThemeToggler } from "./ThemeToggler";
import { IconInfo } from "./IconInfo";

export default function Navbar() {
  const pathname = usePathname();
  const tabs = [
    {
      href: "/home",
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <FolderIcon />,
    },
    {
      href: "/tools",
      label: "Tools",
      icon: <WrenchIcon />,
    },
    {
      href: "/experiences",
      label: "Experiences",
      icon: <BriefcaseIcon />,
    },
    {
      href: "/contacts",
      label: "Contact",
      icon: <PhoneIcon />,
    },
  ];

  return (
    <div className="p-8 items-center justify-center flex sticky top-2 z-50">
      <div className="flex items-center justify-between bg-gray-110 p-4 py-2 rounded-xl gap-2">
        <ThemeToggler
          themes={[
            { theme: "light", icon: <SunIcon className="text-gray-130" /> },
            { theme: "dark", icon: <MoonIcon className="text-gray-130" /> },
          ]}
        />

        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={clx(
              "hover:text-white",
              "p-2 rounded-xl relative group overflow-visible",
              pathname.startsWith(tab.href)
                ? "bg-gradient-to-br from-orange-110 to-orange-120"
                : ""
            )}
          >
            <div
              className={clx(
                "relative z-10 flex items-center",
                "group-hover:text-white",
                pathname.startsWith(tab.href) ? " text-white" : " text-gray-130"
              )}
            >
              {tab.icon}
            </div>

            <IconAnimation />
            <IconInfo>{tab.label}</IconInfo>
          </Link>
        ))}
      </div>
    </div>
  );
}
