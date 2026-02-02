import { HomeInfo } from "@/data/HomeInfo";
import { ArrowRightShortIcon } from "@/Icons";
import { clx } from "@/lib/utils";
import Link from "next/link";

export default function Contacts({ title }: { title?: string }) {
  return (
    <div className="pb-8 gap-2 flex flex-col w-full border-b border-blue-110">
      <h2 className="tracking-[2px] text-gray-130 text-xs font-medium">
        {title}
      </h2>
      {HomeInfo.connect.map((connect, index) => (
        <Link
          key={connect.href}
          href={connect.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            key={index}
            className={clx(
              "rounded-lg border border-blue-110 bg-white p-3 flex justify-between items-center flex-shrink-0 w-full",
              "hover:bg-orange-101 hover:border-orange-140"
            )}
          >
            <div className="flex items-center gap-2.5 justify-start">
              <div className="text-orange-140">{connect.icon}</div>

              <div>
                <div className="font-medium text-base text-start">
                  {connect.title}
                </div>
                <div className="font-light text-xs text-gray-140">
                  {connect.details}
                </div>
              </div>
            </div>
            <div>
              <ArrowRightShortIcon className="size-4"></ArrowRightShortIcon>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
