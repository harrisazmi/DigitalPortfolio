import { ArrowLeftShortIcon, ArrowRightShortIcon } from "@/Icons";
import { useRef } from "react";
import { IconButton } from "./Button";
import { clx } from "@/lib/utils";

interface HorizontalCardProps {
  title?: string;
  children?: React.ReactNode;
}

export default function HorizontalCard({
  title,
  children,
}: HorizontalCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div
      className={clx(
        "max-[375px]:max-w-[82vw] max-[450px]:max-w-[85vw] max-[550px]:max-w-[87vw] max-[650px]:max-w-[89vw] max-[750px]:max-w-[91vw] max-[850px]:max-w-[92vw] max-[950px]:max-w-[93vw] max-[1023px]:max-w-[94vw]",
        "lg:max-w-[650px]"
      )}
    >
      <div className="w-full border-b border-blue-110">
        <div className="justify-between flex">
          <h2 className="tracking-[2px] text-gray-130 text-xs font-medium items-center flex">
            {title}
          </h2>
          <div className="flex space-x-1">
            <IconButton onClick={() => scroll(-300)}>
              <ArrowLeftShortIcon className="size-3" />
            </IconButton>
            <IconButton onClick={() => scroll(300)}>
              <ArrowRightShortIcon className="size-3" />
            </IconButton>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="my-8 flex gap-2 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
