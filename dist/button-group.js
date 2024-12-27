import { jsx as i } from "react/jsx-runtime";
import { createContext as m, forwardRef as u, useContext as l } from "react";
import { cn as d } from "./utils.js";
import { Button as p } from "./button.js";
import { IconButton as v } from "./icon-button.js";
const c = m({
  variant: "secondary",
  size: "md"
}), f = u(({ children: n, className: e, size: r, variant: t = "secondary", ...s }, o) => /* @__PURE__ */ i(
  "div",
  {
    ref: o,
    className: d("isolate inline-flex -space-x-px rounded-lg", t !== "ghost" && "shadow-xs", e),
    ...s,
    children: /* @__PURE__ */ i(c.Provider, { value: { variant: t, size: r }, children: n })
  }
));
f.displayName = "ButtonGroup";
const x = u(({ children: n, className: e, variant: r, ...t }, s) => {
  const o = l(c), a = r ?? o.variant;
  return /* @__PURE__ */ i(
    p,
    {
      ref: s,
      className: d(
        "relative shadow-none focus-visible:z-10",
        a !== "ghost" && "rounded-none first:rounded-l-lg last:rounded-r-lg",
        e
      ),
      variant: a,
      size: o.size,
      ...t,
      children: n
    }
  );
});
x.displayName = "ButtonGroupItem";
const B = u(({ children: n, className: e, variant: r, ...t }, s) => {
  const o = l(c), a = r ?? o.variant;
  return /* @__PURE__ */ i(
    v,
    {
      ref: s,
      className: d(
        "relative shadow-none focus-visible:z-10",
        a !== "ghost" && "rounded-none first:rounded-l-lg last:rounded-r-lg",
        e
      ),
      variant: a,
      size: o.size,
      ...t,
      children: n
    }
  );
});
B.displayName = "ButtonGroupIconItem";
export {
  f as ButtonGroup,
  B as ButtonGroupIconItem,
  x as ButtonGroupItem
};
