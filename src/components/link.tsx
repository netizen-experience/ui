import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "hover:text-primary-hover active:text-primary-active cursor-pointer rounded text-primary underline underline-offset-4 focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-ring",
);

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  newTab?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, className, newTab, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(linkVariants({ className }))}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
});
Link.displayName = "Link";

export { Link, linkVariants };
