import { jsx as s } from "react/jsx-runtime";
import { Slot as d } from "@radix-ui/react-slot";
import { cva as g } from "class-variance-authority";
import { forwardRef as v } from "react";
import { cn as c } from "./utils.js";
const b = g(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold leading-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:bg-muted disabled:text-foreground disabled:opacity-50 disabled:outline disabled:outline-1 disabled:-outline-offset-1 disabled:outline-border",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover hover:ring-4 hover:ring-primary-hover/20 active:bg-primary-active active:ring-4 active:ring-primary-active/40 active:ring-offset-0",
        secondary: "border border-input bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary-hover active:bg-secondary-active disabled:border-border disabled:outline-0",
        danger: "bg-danger text-primary-foreground hover:bg-danger-hover hover:ring-4 hover:ring-danger-hover/20 active:bg-danger-active active:ring-4 active:ring-danger-active/40 active:ring-offset-0",
        ghost: "text-inherit hover:bg-secondary-hover active:bg-secondary-active disabled:border-0 disabled:bg-transparent disabled:outline-transparent"
      },
      size: {
        sm: "h-8 px-3 py-1 has-[svg]:space-x-1 [&>svg]:size-4",
        md: "h-10 px-4 py-2 has-[svg]:space-x-2 [&>svg]:size-5",
        lg: "h-12 px-6 py-2 has-[svg]:space-x-2 [&>svg]:size-5"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), l = v(
  ({ asChild: e = !1, className: r, size: i, type: o = "button", variant: a, ...t }, n) => /* @__PURE__ */ s(e ? d : "button", { className: c(b({ variant: a, size: i, className: r })), ref: n, type: o, ...t })
);
l.displayName = "Button";
export {
  l as Button,
  b as buttonVariants
};
