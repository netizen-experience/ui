import { jsx as n } from "react/jsx-runtime";
import { cva as a } from "class-variance-authority";
import { forwardRef as s } from "react";
import { cn as f } from "./utils.js";
const l = a(
  "cursor-pointer rounded text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-ring active:text-primary-active"
), m = s(({ children: r, className: e, newTab: o, ...i }, t) => /* @__PURE__ */ n(
  "a",
  {
    ref: t,
    className: f(l({ className: e })),
    ...o ? { target: "_blank", rel: "noopener noreferrer" } : {},
    ...i,
    children: r
  }
));
m.displayName = "Link";
export {
  m as Link,
  l as linkVariants
};
