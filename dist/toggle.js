import { jsx as s } from "react/jsx-runtime";
import * as r from "@radix-ui/react-toggle";
import { cva as n } from "class-variance-authority";
import { forwardRef as d } from "react";
import { cn as g } from "./utils.js";
const m = n(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-[color,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-secondary-hover data-[state=on]:bg-primary-background data-[state=on]:text-primary",
        outline: "border border-input bg-transparent hover:bg-secondary-hover data-[state=on]:border-primary data-[state=on]:bg-primary-background"
      },
      size: {
        sm: "h-8 px-3 [&>svg]:size-5",
        md: "h-10 px-3 [&>svg]:size-5",
        lg: "h-12 px-4 [&>svg]:size-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), l = d(({ className: e, size: o, variant: t, ...a }, i) => /* @__PURE__ */ s(r.Root, { ref: i, className: g(m({ variant: t, size: o, className: e })), ...a }));
l.displayName = r.Root.displayName;
export {
  l as Toggle,
  m as toggleVariants
};
