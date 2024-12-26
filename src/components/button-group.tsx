"use client";

import type { VariantProps } from "class-variance-authority";
import { createContext, forwardRef, useContext } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./button";
import { IconButton } from "./icon-button";

const ButtonGroupContext = createContext<VariantProps<typeof buttonVariants>>({
  variant: "secondary",
  size: "md",
});

const ButtonGroup = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof buttonVariants>
>(({ children, className, size, variant = "secondary", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("isolate inline-flex -space-x-px rounded-lg", variant !== "ghost" && "shadow-xs", className)}
    {...props}
  >
    <ButtonGroupContext.Provider value={{ variant, size }}>{children}</ButtonGroupContext.Provider>
  </div>
));
ButtonGroup.displayName = "ButtonGroup";

const ButtonGroupItem = forwardRef<
  React.ElementRef<typeof Button>,
  Omit<React.ComponentPropsWithoutRef<typeof Button>, "size">
>(({ children, className, variant: variantProp, ...props }, ref) => {
  const context = useContext(ButtonGroupContext);
  const variant = variantProp ?? context.variant;
  return (
    <Button
      ref={ref}
      className={cn(
        "relative shadow-none focus-visible:z-10",
        variant !== "ghost" && "rounded-none first:rounded-l-lg last:rounded-r-lg",
        className,
      )}
      variant={variant}
      size={context.size}
      {...props}
    >
      {children}
    </Button>
  );
});
ButtonGroupItem.displayName = "ButtonGroupItem";

const ButtonGroupIconItem = forwardRef<
  React.ElementRef<typeof IconButton>,
  Omit<React.ComponentPropsWithoutRef<typeof IconButton>, "size">
>(({ children, className, variant: variantProp, ...props }, ref) => {
  const context = useContext(ButtonGroupContext);
  const variant = variantProp ?? context.variant;
  return (
    <IconButton
      ref={ref}
      className={cn(
        "relative shadow-none focus-visible:z-10",
        variant !== "ghost" && "rounded-none first:rounded-l-lg last:rounded-r-lg",
        className,
      )}
      variant={variant}
      size={context.size}
      {...props}
    >
      {children}
    </IconButton>
  );
});
ButtonGroupIconItem.displayName = "ButtonGroupIconItem";

export { ButtonGroup, ButtonGroupItem, ButtonGroupIconItem };
