import { jsx as a } from "react/jsx-runtime";
import * as e from "@radix-ui/react-switch";
import { cva as r } from "class-variance-authority";
import { forwardRef as n } from "react";
import { cn as d } from "./utils.js";
const c = r(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-100 data-[state=checked]:hover:bg-primary-hover data-[state=unchecked]:hover:bg-neutral-200",
  {
    variants: {
      size: {
        sm: "h-4 w-[30px] border-2",
        md: "h-6 w-10 border-4"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), l = r(
  "pointer-events-none block rounded-full border-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-50",
  {
    variants: {
      size: {
        sm: "size-3 border-[3px] data-[state=checked]:translate-x-[14px]",
        md: "size-4 border-4 data-[state=checked]:translate-x-4"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), m = n(
  ({ className: s, size: t, ...i }, o) => /* @__PURE__ */ a(e.Root, { className: d(c({ size: t, className: s })), ...i, ref: o, children: /* @__PURE__ */ a(e.Thumb, { className: l({ size: t }) }) })
);
m.displayName = e.Root.displayName;
export {
  m as Switch
};
