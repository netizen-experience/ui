"use client";

import type { Icon } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { createContext, forwardRef, useContext } from "react";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex select-none items-center space-x-1 rounded-lg border px-2 text-sm leading-none transition-colors has-[[data-ui=chip-action]]:pr-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>svg]:size-4",
  {
    variants: {
      variant: {
        input: "border-neutral-300 bg-neutral-50 text-muted-foreground",
        emerald:
          "border-emerald-500 text-emerald-700 hover:bg-emerald-50 aria-selected:border-emerald-700 aria-selected:bg-emerald-100",
        pizazz:
          "border-pizazz-500 text-pizazz-700 hover:bg-pizazz-50 aria-selected:border-pizazz-700 aria-selected:bg-pizazz-100",
        violet:
          "border-electric-violet-500 text-electric-violet-700 hover:bg-electric-violet-50 aria-selected:border-electric-violet-700 aria-selected:bg-electric-violet-100",
        picton:
          "border-picton-blue-500 text-picton-blue-700 hover:bg-picton-blue-50 aria-selected:border-picton-blue-700 aria-selected:bg-picton-blue-100",
      },
      size: {
        sm: "h-5",
        md: "h-6",
        lg: "h-8",
      },
    },
    defaultVariants: {
      variant: "input",
      size: "md",
    },
  },
);

const ChipContext = createContext<VariantProps<typeof chipVariants> & { disabled?: boolean }>({
  variant: "input",
  size: "md",
});

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
  selected?: boolean;
  disabled?: boolean;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ children, className, disabled, selected, size, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(chipVariants({ variant, size }), className)}
      aria-disabled={disabled}
      aria-selected={selected}
      {...props}
    >
      <ChipContext.Provider value={{ variant, size, disabled }}>{children}</ChipContext.Provider>
    </div>
  ),
);
Chip.displayName = "Chip";

const ChipAction = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactElement<Icon> }
>(({ className, ...props }, ref) => {
  const { disabled, variant } = useContext(ChipContext);
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex size-5 items-center justify-center rounded-full p-[2px] only:ml-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        {
          "hover:bg-neutral-100 focus-visible:bg-neutral-100 active:bg-neutral-200": variant === "input",
          "hover:bg-emerald-100 focus-visible:bg-emerald-100 active:bg-emerald-200": variant === "emerald",
          "hover:bg-pizazz-100 focus-visible:bg-pizazz-100 active:bg-pizazz-200": variant === "pizazz",
          "hover:bg-electric-violet-100 focus-visible:bg-electric-violet-100 active:bg-electric-violet-200":
            variant === "violet",
          "hover:bg-picton-blue-100 focus-visible:bg-picton-blue-100 active:bg-picton-blue-200": variant === "picton",
        },
        className,
      )}
      data-ui="chip-action"
      disabled={props.disabled ?? disabled}
      {...props}
    />
  );
});
ChipAction.displayName = "ChipAction";

export { Chip, ChipAction, chipVariants };
