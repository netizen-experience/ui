import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const notificationBadgeVariants = cva("bg-danger inline-flex items-center transition-colors", {
  variants: {
    size: {
      sm: "h-4 min-w-4 px-1 text-xs",
      md: "h-6 min-w-6 px-2 text-base",
    },
    variant: {
      dot: "size-2 rounded-sm",
      default: "justify-center rounded font-medium text-primary-foreground",
    },
  },
  compoundVariants: [{ variant: "dot", class: "min-w-2 px-0" }],
  defaultVariants: {
    variant: "default",
  },
});

export interface NotificationBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationBadgeVariants> {}

function NotificationBadge({ className, size, variant, ...props }: NotificationBadgeProps) {
  return <div className={cn(notificationBadgeVariants({ size, variant }), className)} {...props} />;
}

export { NotificationBadge, notificationBadgeVariants };
