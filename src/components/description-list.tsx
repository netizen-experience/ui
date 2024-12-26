import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const DescriptionList = forwardRef<HTMLDListElement, React.HTMLAttributes<HTMLDListElement>>(
  ({ className, ...props }, ref) => <dl ref={ref} className={cn("divide-y divide-border", className)} {...props} />,
);
DescriptionList.displayName = "DescriptionList";

const DescriptionListItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", className)} {...props} />
  ),
);
DescriptionListItem.displayName = "DescriptionListItem";

const DescriptionListTerm = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => <dt ref={ref} className={cn("font-semibold", className)} {...props} />,
);
DescriptionListTerm.displayName = "DescriptionListTerm";

const DescriptionListDetails = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => <dd ref={ref} className={cn("mt-1 sm:col-span-2 sm:mt-0", className)} {...props} />,
);
DescriptionListDetails.displayName = "DescriptionListDetails";

export { DescriptionList, DescriptionListItem, DescriptionListTerm, DescriptionListDetails };
