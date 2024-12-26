import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

function Focusable({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Slot
      className={cn(
        "ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        className,
      )}
      tabIndex={0}
      {...props}
    />
  );
}
Focusable.displayName = "Focusable";

export { Focusable };
