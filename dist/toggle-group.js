import { jsx as n } from "react/jsx-runtime";
import * as t from "@radix-ui/react-toggle-group";
import { createContext as f, forwardRef as p, useContext as g } from "react";
import { cn as c } from "./utils.js";
import { toggleVariants as x } from "./toggle.js";
const d = f({
  variant: "default",
  size: "md"
}), v = p(({ children: o, className: r, size: a, variant: e, ...i }, s) => /* @__PURE__ */ n(
  t.Root,
  {
    ref: s,
    className: c("flex items-center justify-center gap-1", e === "outline" && "gap-0 -space-x-px", r),
    ...i,
    children: /* @__PURE__ */ n(d.Provider, { value: { variant: e, size: a }, children: o })
  }
));
v.displayName = t.Root.displayName;
const y = p(({ children: o, className: r, size: a, variant: e, ...i }, s) => {
  const l = g(d), m = e ?? l.variant, u = a ?? l.size;
  return /* @__PURE__ */ n(
    t.Item,
    {
      ref: s,
      className: c(
        x({ variant: m, size: u }),
        m === "outline" && "relative rounded-none first-of-type:rounded-l-lg last-of-type:rounded-r-lg focus-visible:z-10 data-[state=on]:z-10",
        r
      ),
      ...i,
      children: o
    }
  );
});
y.displayName = t.Item.displayName;
export {
  v as ToggleGroup,
  y as ToggleGroupItem
};
