import { jsx as e } from "react/jsx-runtime";
import { Circle as l } from "@phosphor-icons/react/dist/ssr";
import * as r from "@radix-ui/react-radio-group";
import { cva as u } from "class-variance-authority";
import { createContext as p, forwardRef as m, useContext as f } from "react";
import { cn as d } from "./utils.js";
const b = u(
  "peer aspect-square rounded-full border border-input text-primary-foreground ring-offset-background hover:border-primary hover:outline hover:outline-primary/20 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:border-muted disabled:bg-muted disabled:hover:outline-none data-[state=checked]:border-primary data-[state=checked]:bg-primary disabled:data-[state=checked]:border-muted disabled:data-[state=checked]:bg-muted",
  {
    variants: {
      size: {
        sm: "size-4 hover:outline-1",
        md: "size-6 hover:outline-2"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), c = p({
  size: "md"
}), h = m(({ children: t, className: i, size: o, ...a }, s) => /* @__PURE__ */ e(r.Root, { className: d("grid gap-2", i), ...a, ref: s, children: /* @__PURE__ */ e(c.Provider, { value: { size: o }, children: t }) }));
h.displayName = r.Root.displayName;
const v = m(({ className: t, size: i, ...o }, a) => {
  const s = f(c), n = i ?? s.size;
  return /* @__PURE__ */ e(r.Item, { ref: a, className: d(b({ size: n }), t), ...o, children: /* @__PURE__ */ e(r.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ e(l, { weight: "fill", className: d("text-current", n === "sm" ? "size-2" : "size-3") }) }) });
});
v.displayName = r.Item.displayName;
export {
  h as RadioGroup,
  v as RadioGroupItem
};
