"use client";

import type { Icon } from "@phosphor-icons/react";
import { Slot } from "@radix-ui/react-slot";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";
import { createContext, forwardRef, useContext } from "react";
import { cn } from "@/lib/utils";

const tabsVariants = cva(
  "inline-flex items-center justify-center data-[orientation=vertical]:grid data-[orientation=vertical]:w-fit",
  {
    variants: {
      variant: {
        segment: "rounded-lg bg-neutral-200 p-1 text-muted-foreground",
        line: "border-border data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-l data-[orientation=horizontal]:pb-1 data-[orientation=vertical]:pl-1",
      },
    },
    defaultVariants: {
      variant: "segment",
    },
  },
);

const TabsContext = createContext<VariantProps<typeof tabsVariants>>({
  variant: "segment",
});

const Tabs = TabsPrimitive.Root;

const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsVariants>
>(({ className, variant = "segment", ...props }, ref) => (
  <TabsContext.Provider value={{ variant }}>
    <TabsPrimitive.List ref={ref} className={cn(tabsVariants({ variant }), className)} {...props} />
  </TabsContext.Provider>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { variant } = useContext(TabsContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1 text-sm font-medium ring-offset-neutral-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 has-[[data-ui=tabs-trigger-icon]]:space-x-1 data-[orientation=vertical]:py-2 data-[state=active]:font-bold data-[state=active]:text-foreground",
        {
          "transition-all focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[state=active]:bg-background data-[state=active]:shadow-sm":
            variant === "segment",
          "after:invisible after:absolute after:h-px after:w-full after:bg-primary after:content-[''] hover:bg-primary/10 active:bg-primary/20 after:data-[state=active]:visible after:data-[orientation=horizontal]:-bottom-[5px] after:data-[orientation=vertical]:-left-[5px] after:data-[orientation=vertical]:h-full after:data-[orientation=vertical]:w-px":
            variant === "line",
        },
        className,
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsTriggerIcon = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactElement<Icon> }) => (
  <Slot className={cn("size-4", className)} {...props} data-ui="tabs-trigger-icon">
    {children}
  </Slot>
);
TabsTriggerIcon.displayName = "TabsTriggerIcon";

const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsTriggerIcon, TabsContent };
