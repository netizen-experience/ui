import { jsxs as t, jsx as o } from "react/jsx-runtime";
import * as e from "@radix-ui/react-slider";
import { forwardRef as d } from "react";
import { cn as c } from "./utils.js";
const m = d(({ className: s, defaultValue: r, value: i, ...l }, n) => /* @__PURE__ */ t(
  e.Root,
  {
    ref: n,
    className: c("relative flex w-full touch-none select-none items-center", s),
    defaultValue: r,
    value: i,
    ...l,
    children: [
      /* @__PURE__ */ o(e.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ o(e.Range, { className: "absolute h-full bg-primary" }) }),
      (i ?? r ?? []).map((f, a) => /* @__PURE__ */ o(
        e.Thumb,
        {
          className: "block size-6 rounded-full border-2 border-primary bg-background shadow-xs ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50"
        },
        a
      ))
    ]
  }
));
m.displayName = e.Root.displayName;
export {
  m as Slider
};
