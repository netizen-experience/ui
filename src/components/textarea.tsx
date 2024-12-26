import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "focus:ring-primary-hover/20 flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm [scroll-padding-block:8px] placeholder:text-neutral-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-4 disabled:cursor-default disabled:border-input disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50 disabled:hover:border-input",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
