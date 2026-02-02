"use client";
import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  useContext,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { clx } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

/*========================================================================================================================*/
// Variants for button

const button_cva = cva(["rounded-md"], {
  variants: {
    variant: {
      "default-outline": [],
      "default-ghost": [],
      "orange-primary-fill": ["bg-gradient-to-br from-[#F97316] to-[#EAB308] "],
      "orange-primary-outline": [],
      "orange-primary-ghost": [],
      "icon-animated": [
        "size-10 rounded-xl relative group overflow-hidden items-center justify-center flex shrink-0",
      ],
      unset: null,
    },

    size: {
      small: "py-1.5 px-2.5 text-body-sm",
      medium: "py-2 px-3 text-body-md",
      large: "py-2.5 px-4 text-body-lg",
    },

    iconOnly: {
      true: "aspect-square rounded-md",
      false: "",
    },
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: "small",
      className: "p-2",
    },
    {
      iconOnly: true,
      size: "medium",
      className: "p-2.5",
    },
    {
      iconOnly: true,
      size: "large",
      className: "p-3",
    },
  ],
  defaultVariants: {
    variant: "orange-primary-fill",
    size: "small",
    iconOnly: false,
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button_cva> {
  asChild?: boolean;
  iconOnly?: boolean;
}

const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    {
      className,
      variant = "orange-primary-fill",
      size = "small",
      children,
      asChild = false,
      iconOnly = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <ButtonContext.Provider value={{ variant, size }}>
        <Comp
          ref={ref}
          className={clx(button_cva({ variant, size, className, iconOnly }))}
          {...props}
        >
          {children}
        </Comp>
      </ButtonContext.Provider>
    );
  }
);
Button.displayName = "Button";

/*========================================================================================================================*/

const ButtonContext = createContext<VariantProps<typeof button_cva>>({
  variant: "orange-primary-fill",
  size: "small",
  iconOnly: false,
});

/*========================================================================================================================*/

const button_icon_cva = cva(
  "block stroke-inherit text-inherit stroke-[1.5px] shrink-0",
  {
    variants: {
      size: {
        small: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);

interface ButtonIconProps extends ComponentProps<"div"> {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const ButtonIcon: ForwardRefExoticComponent<ButtonIconProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    const { size } = useContext(ButtonContext);

    return (
      <Slot
        ref={ref}
        className={button_icon_cva({ size, className })}
        {...props}
      >
        {children}
      </Slot>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";

export { Button, ButtonIcon, button_cva };

export function IconButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick} // Make sure to pass the onClick here
      className="size-6 p-0 rounded-[8px] flex items-center justify-center flex-shrink-0 relative overflow-visible hover:cursor-pointer"
    >
      <div className="absolute top-1/2 left-1/2 size-5.5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[7px] z-0" />
      <div className="relative z-10">{children}</div>
    </Button>
  );
}
