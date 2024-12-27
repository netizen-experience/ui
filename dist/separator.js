import { jsx as i } from "react/jsx-runtime";
import * as o from "@radix-ui/react-separator";
import { forwardRef as e } from "react";
import { cn as l } from "./utils.js";
const f = e(({ className: a, decorative: m = !0, orientation: r = "horizontal", ...t }, p) => /* @__PURE__ */ i(
  o.Root,
  {
    ref: p,
    decorative: m,
    orientation: r,
    className: l("shrink-0 bg-border", r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", a),
    ...t
  }
));
f.displayName = o.Root.displayName;
export {
  f as Separator
};
