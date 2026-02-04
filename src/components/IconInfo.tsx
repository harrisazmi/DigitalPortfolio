import { clx } from "@/lib/utils";
import { ReactNode } from "react";

interface IconInfoProps {
  children: ReactNode;
  className?: string;
}

export function IconInfo({ children, className }: IconInfoProps) {
  return (
    <div
      className={clx(
        "absolute left-1/2 px-2 py-1 rounded top-13 ",
        "text-xs text-black bg-gray-120 ",
        "opacity-0 invisible transition-all duration-300 ease-in-out transform -translate-x-1/2 scale-95 ",
        "group-hover:opacity-100 group-hover:visible group-hover:scale-100",
        className
      )}
    >
      {children}
    </div>
  );
}
