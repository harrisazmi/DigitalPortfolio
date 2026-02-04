import { clx } from "@/lib/utils";

export function ArrowLeftShortIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clx("size-4", className)}
      {...props}
    >
      <path
        d="M4.66663 8L0.666626 4L4.66663 0L5.59996 0.966667L3.23329 3.33333H11.3333V4.66667H3.23329L5.59996 7.03333L4.66663 8Z"
        fill="url(#paint0_linear_4323_163)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4323_163"
          x1="0.666626"
          y1="0"
          x2="8.34663"
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
