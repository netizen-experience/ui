"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  "data-[state=checked]:hover:bg-primary-hover peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-100 data-[state=unchecked]:hover:bg-neutral-200",
  {
    variants: {
      size: {
        sm: "h-4 w-[30px] border-2",
        md: "h-6 w-10 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const thumbVariants = cva(
  "pointer-events-none block rounded-full border-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-50",
  {
    variants: {
      size: {
        sm: "size-3 border-[3px] data-[state=checked]:translate-x-[14px]",
        md: "size-4 border-4 data-[state=checked]:translate-x-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, ...props }, ref) => (
    <SwitchPrimitives.Root className={cn(switchVariants({ size, className }))} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={thumbVariants({ size })} />
    </SwitchPrimitives.Root>
  ),
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
