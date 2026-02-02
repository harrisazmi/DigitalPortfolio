import { clx } from "@/lib/utils";

export function ArrowRightShortIcon({ className = "", ...props }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clx("", className)}
      {...props}
    >
      <path
        d="M7.33337 8L11.3334 4L7.33337 0L6.40004 0.966667L8.76671 3.33333H0.666707V4.66667H8.76671L6.40004 7.03333L7.33337 8Z"
        fill="url(#paint0_linear_4323_168)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4323_168"
          x1="11.3334"
          y1="0"
          x2="3.65337"
          y2="10.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F97916" />
          <stop offset="1" stopColor="#EAB308" />
        </linearGradient>
      </defs>
    </svg>
  );
}
