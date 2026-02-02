"use client";

import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import { clx } from "@/lib/utils";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/home";

  return (
    <div
      className={clx(
        "flex justify-center flex-col text-center items-center",
        "lg:flex-row lg:gap-10 lg:items-start lg:text-left"
      )}
    >
      {isHome && <Avatar className="lg:hidden" />}
      <Avatar className="hidden lg:block" />
      <div className="lg:w-[650px]">{children}</div>
      {!isHome && <Avatar className=" lg:hidden" />}
    </div>
  );
}
