import { clx } from "@/lib/utils";

export function ArrowRightIcon({ className = "", ...props }) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clx("", className)}
      {...props}
    >
      <path
        d="M9.39995 4.55786L13.8 8.75786M13.8 8.75786L9.39995 12.9579M13.8 8.75786H2.19995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
