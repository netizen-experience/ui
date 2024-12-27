import { jsx as o } from "react/jsx-runtime";
import { cva as p } from "class-variance-authority";
import { createContext as v, forwardRef as c, useContext as u } from "react";
import { cn as n } from "./utils.js";
const z = p(
  "inline-flex select-none items-center space-x-1 rounded-lg border px-2 text-sm leading-none transition-colors has-[[data-ui=chip-action]]:pr-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>svg]:size-4",
  {
    variants: {
      variant: {
        input: "border-neutral-300 bg-neutral-50 text-muted-foreground",
        emerald: "border-emerald-500 text-emerald-700 hover:bg-emerald-50 aria-selected:border-emerald-700 aria-selected:bg-emerald-100",
        pizazz: "border-pizazz-500 text-pizazz-700 hover:bg-pizazz-50 aria-selected:border-pizazz-700 aria-selected:bg-pizazz-100",
        violet: "border-electric-violet-500 text-electric-violet-700 hover:bg-electric-violet-50 aria-selected:border-electric-violet-700 aria-selected:bg-electric-violet-100",
        picton: "border-picton-blue-500 text-picton-blue-700 hover:bg-picton-blue-50 aria-selected:border-picton-blue-700 aria-selected:bg-picton-blue-100"
      },
      size: {
        sm: "h-5",
        md: "h-6",
        lg: "h-8"
      }
    },
    defaultVariants: {
      variant: "input",
      size: "md"
    }
  }
), d = v({
  variant: "input",
  size: "md"
}), m = c(
  ({ children: a, className: i, disabled: t, selected: r, size: e, variant: l, ...s }, b) => /* @__PURE__ */ o(
    "div",
    {
      ref: b,
      className: n(z({ variant: l, size: e }), i),
      "aria-disabled": t,
      "aria-selected": r,
      ...s,
      children: /* @__PURE__ */ o(d.Provider, { value: { variant: l, size: e, disabled: t }, children: a })
    }
  )
);
m.displayName = "Chip";
const g = c(({ className: a, ...i }, t) => {
  const { disabled: r, variant: e } = u(d);
  return /* @__PURE__ */ o(
    "button",
    {
      ref: t,
      className: n(
        "inline-flex size-5 items-center justify-center rounded-full p-[2px] only:ml-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        {
          "hover:bg-neutral-100 focus-visible:bg-neutral-100 active:bg-neutral-200": e === "input",
          "hover:bg-emerald-100 focus-visible:bg-emerald-100 active:bg-emerald-200": e === "emerald",
          "hover:bg-pizazz-100 focus-visible:bg-pizazz-100 active:bg-pizazz-200": e === "pizazz",
          "hover:bg-electric-violet-100 focus-visible:bg-electric-violet-100 active:bg-electric-violet-200": e === "violet",
          "hover:bg-picton-blue-100 focus-visible:bg-picton-blue-100 active:bg-picton-blue-200": e === "picton"
        },
        a
      ),
      "data-ui": "chip-action",
      disabled: i.disabled ?? r,
      ...i
    }
  );
});
g.displayName = "ChipAction";
export {
  m as Chip,
  g as ChipAction,
  z as chipVariants
};
