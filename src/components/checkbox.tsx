"use client";

import { Check, Minus } from "@phosphor-icons/react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer shrink-0 border border-input bg-background ring-offset-background hover:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:border-muted disabled:bg-muted disabled:hover:border-muted data-[state=checked]:border-primary data-[state=indeterminate]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground data-[state=checked]:hover:outline data-[state=indeterminate]:hover:outline data-[state=checked]:hover:outline-primary/20 data-[state=indeterminate]:hover:outline-primary/20 disabled:data-[state=checked]:border-muted disabled:data-[state=indeterminate]:border-muted disabled:data-[state=checked]:bg-muted disabled:data-[state=indeterminate]:bg-muted disabled:data-[state=checked]:text-muted-foreground disabled:data-[state=indeterminate]:text-muted-foreground",
  {
    variants: {
      size: {
        sm: "size-4 rounded data-[state=checked]:hover:outline-1 data-[state=indeterminate]:hover:outline-1",
        md: "size-6 rounded-md data-[state=checked]:hover:outline-2 data-[state=indeterminate]:hover:outline-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>
>(({ className, size, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariants({ size }), className)} {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center")}>
      {props.checked === "indeterminate" && (
        <Minus className="text-white" weight="bold" size={size === "sm" ? 12 : 20} />
      )}
      {props.checked === true && <Check className="text-white" weight="bold" size={size === "sm" ? 12 : 20} />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
