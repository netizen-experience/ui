import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { Minus as n, Check as m } from "@phosphor-icons/react";
import * as d from "@radix-ui/react-checkbox";
import { cva as c } from "class-variance-authority";
import * as l from "react";
import { cn as r } from "./utils.js";
const b = c(
  "peer shrink-0 border border-input bg-background ring-offset-background hover:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:border-muted disabled:bg-muted disabled:hover:border-muted data-[state=checked]:border-primary data-[state=indeterminate]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground data-[state=checked]:hover:outline data-[state=indeterminate]:hover:outline data-[state=checked]:hover:outline-primary/20 data-[state=indeterminate]:hover:outline-primary/20 disabled:data-[state=checked]:border-muted disabled:data-[state=indeterminate]:border-muted disabled:data-[state=checked]:bg-muted disabled:data-[state=indeterminate]:bg-muted disabled:data-[state=checked]:text-muted-foreground disabled:data-[state=indeterminate]:text-muted-foreground",
  {
    variants: {
      size: {
        sm: "size-4 rounded data-[state=checked]:hover:outline-1 data-[state=indeterminate]:hover:outline-1",
        md: "size-6 rounded-md data-[state=checked]:hover:outline-2 data-[state=indeterminate]:hover:outline-2"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), u = l.forwardRef(({ className: i, size: e, ...t }, o) => /* @__PURE__ */ a(d.Root, { ref: o, className: r(b({ size: e }), i), ...t, children: /* @__PURE__ */ s(d.Indicator, { className: r("flex items-center justify-center"), children: [
  t.checked === "indeterminate" && /* @__PURE__ */ a(n, { className: "text-white", weight: "bold", size: e === "sm" ? 12 : 20 }),
  t.checked === !0 && /* @__PURE__ */ a(m, { className: "text-white", weight: "bold", size: e === "sm" ? 12 : 20 })
] }) }));
u.displayName = d.Root.displayName;
export {
  u as Checkbox
};
