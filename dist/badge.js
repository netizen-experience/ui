import { jsx as o } from "react/jsx-runtime";
import { cva as d } from "class-variance-authority";
import { cn as g } from "./utils.js";
const i = d(
  "inline-flex max-w-[160px] items-center overflow-hidden rounded-lg px-2 leading-none transition-colors *:leading-none [&>svg]:size-4",
  {
    variants: {
      variant: {
        gray: "bg-muted text-muted-foreground",
        accent: "bg-accent-background text-accent-foreground",
        white: "bg-neutral-100 text-muted-foreground dark:bg-neutral-900 dark:text-primary-foreground",
        info: "bg-info-background text-info-foreground",
        success: "bg-success-background text-success-foreground",
        warning: "bg-warning-background text-warning-foreground",
        danger: "bg-danger-background text-danger-foreground",
        emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-600 dark:text-primary-foreground",
        pizazz: "bg-pizazz-100 text-pizazz-700 dark:bg-pizazz-600 dark:text-primary-foreground",
        violet: "bg-electric-violet-100 text-electric-violet-700 dark:bg-electric-violet-600 dark:text-primary-foreground",
        picton: "bg-picton-blue-100 text-picton-blue-700 dark:bg-picton-blue-600 dark:text-primary-foreground"
      },
      size: {
        sm: "h-5 text-xs",
        md: "h-6 text-sm",
        lg: "h-8 text-sm"
      }
    },
    defaultVariants: {
      variant: "gray",
      size: "md"
    }
  }
);
function l({ children: e, className: r, size: t, variant: a, ...n }) {
  return /* @__PURE__ */ o("div", { className: g(i({ variant: a, size: t }), r), ...n, children: e });
}
export {
  l as Badge,
  i as badgeVariants
};
