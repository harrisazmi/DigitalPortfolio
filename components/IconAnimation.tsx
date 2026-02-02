import { clx } from "@/lib/utils";

export function IconAnimation() {
  return (
    <div
      className={clx(
        "bg-gradient-to-br from-orange-110 to-orange-120",
        "absolute inset-0 transition-all duration-300 ease-out",
        "opacity-0 scale-60 group-hover:opacity-100 group-hover:scale-100 rounded-xl"
      )}
    ></div>
  );
}
