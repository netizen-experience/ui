"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";

const AvatarGroup = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { overlapDirection?: "ltr" | "rtl" }
>(({ className, overlapDirection = "ltr", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex -space-x-2 px-4 py-2",
      overlapDirection === "rtl" && "flex-row-reverse space-x-reverse",
      className,
    )}
    {...props}
  />
));

const AvatarGroupItem = forwardRef<React.ElementRef<typeof Avatar>, React.ComponentPropsWithoutRef<typeof Avatar>>(
  ({ className, ...props }, ref) => (
    <Avatar ref={ref} className={cn("outline outline-2 outline-background", className)} {...props} />
  ),
);

export { AvatarGroup, AvatarGroupItem };
