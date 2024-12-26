import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-neutral-500 read-only:cursor-default hover:border-primary-hover focus:border-primary-hover focus:outline-none focus:ring-4 focus:ring-primary-hover/20 disabled:cursor-default disabled:border-input disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50 disabled:hover:border-input",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
