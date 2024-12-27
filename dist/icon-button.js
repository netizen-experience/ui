import { jsx as m } from "react/jsx-runtime";
import { cva as s } from "class-variance-authority";
import { forwardRef as e } from "react";
import { cn as a } from "./utils.js";
import { Button as p, buttonVariants as c } from "./button.js";
const f = (t) => a(
  c(t),
  s("", {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        danger: "",
        ghost: ""
      },
      size: {
        sm: "size-8 p-1",
        md: "size-10 p-2",
        lg: "size-12 p-2"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  })(t)
), d = e(({ className: t, size: r, variant: o, ...n }, i) => /* @__PURE__ */ m(
  p,
  {
    ref: i,
    variant: o,
    size: r,
    className: a(f({ variant: o, size: r }), t),
    ...n
  }
));
d.displayName = "IconButton";
export {
  d as IconButton,
  f as iconButtonVariants
};
