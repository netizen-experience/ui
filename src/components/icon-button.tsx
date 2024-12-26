import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps, buttonVariants } from "./button";

const iconButtonVariants = (props?: VariantProps<typeof buttonVariants>) => {
  return cn(
    buttonVariants(props),
    cva("", {
      variants: {
        variant: {
          primary: "",
          secondary: "",
          danger: "",
          ghost: "",
        },
        size: {
          sm: "size-8 p-1",
          md: "size-10 p-2",
          lg: "size-12 p-2",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
      },
    })(props),
  );
};

export interface IconButtonProps extends ButtonProps, VariantProps<typeof iconButtonVariants> {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ className, size, variant, ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn(iconButtonVariants({ variant, size }), className)}
    {...props}
  />
));
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
