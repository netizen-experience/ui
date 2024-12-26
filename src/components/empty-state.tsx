import type { Icon } from "@phosphor-icons/react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

const emptyStateVariants = cva("flex flex-col justify-center text-center", {
  variants: {
    variant: {
      default: "",
      dashed: "rounded-lg border border-dashed border-border p-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const EmptyState = forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    VariantProps<typeof emptyStateVariants> & {
      as?: React.ElementType;
    }
>(({ as, className, variant, ...props }, ref) => {
  const Comp = as ?? "div";
  return <Comp ref={ref} className={cn(emptyStateVariants({ variant, className }))} {...props} />;
});
EmptyState.displayName = "EmptyState";

const EmptyStateIcon = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactElement<Icon> }) => {
  return (
    <div className="peer/icon flex justify-center" data-ui="empty-state-icon">
      <Slot className={cn("size-16 text-muted", className)} {...props}>
        {children}
      </Slot>
    </div>
  );
};
EmptyStateIcon.displayName = "EmptyStateIcon";

const EmptyStateTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("peer/title text-sm font-semibold peer-data-[ui=empty-state-icon]/icon:mt-2", className)}
      data-ui="empty-state-title"
      {...props}
    >
      {children}
    </h3>
  ),
);
EmptyStateTitle.displayName = "EmptyStateTitle";

const EmptyStateDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("peer/description text-sm peer-data-[ui=empty-state-title]/title:mt-1", className)}
      data-ui="empty-state-description"
      {...props}
    />
  ),
);
EmptyStateDescription.displayName = "EmptyStateDescription";

const EmptyStateButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn("peer/button mt-8 w-max self-center", className)}
    data-ui="empty-state-button"
    {...props}
  />
));
EmptyStateButton.displayName = "EmptyStateButton";

export { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateButton, emptyStateVariants };
