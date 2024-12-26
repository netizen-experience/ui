"use client";

import { Circle } from "@phosphor-icons/react/dist/ssr";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type VariantProps, cva } from "class-variance-authority";
import { createContext, forwardRef, useContext } from "react";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  "peer aspect-square rounded-full border border-input text-primary-foreground ring-offset-background hover:border-primary hover:outline hover:outline-primary/20 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:border-muted disabled:bg-muted disabled:hover:outline-none data-[state=checked]:border-primary data-[state=checked]:bg-primary disabled:data-[state=checked]:border-muted disabled:data-[state=checked]:bg-muted",
  {
    variants: {
      size: {
        sm: "size-4 hover:outline-1",
        md: "size-6 hover:outline-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const RadioGroupContext = createContext<VariantProps<typeof radioVariants>>({
  size: "md",
});

const RadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & VariantProps<typeof radioVariants>
>(({ children, className, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref}>
      <RadioGroupContext.Provider value={{ size }}>{children}</RadioGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioVariants>
>(({ className, size: sizeProp, ...props }, ref) => {
  const context = useContext(RadioGroupContext);
  const size = sizeProp ?? context.size;

  return (
    <RadioGroupPrimitive.Item ref={ref} className={cn(radioVariants({ size }), className)} {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle weight="fill" className={cn("text-current", size === "sm" ? "size-2" : "size-3")} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
