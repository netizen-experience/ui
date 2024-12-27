import { jsxs as m, jsx as e } from "react/jsx-runtime";
import * as r from "@radix-ui/react-scroll-area";
import { forwardRef as s } from "react";
import { cn as t } from "./utils.js";
const n = s(
  ({ children: o, className: l, viewportRef: a, ...c }, d) => /* @__PURE__ */ m(r.Root, { ref: d, className: t("relative overflow-hidden", l), ...c, children: [
    /* @__PURE__ */ e(r.Viewport, { ref: a, className: "h-full w-full rounded-[inherit]", children: o }),
    /* @__PURE__ */ e(i, {}),
    /* @__PURE__ */ e(r.Corner, {})
  ] })
);
n.displayName = r.Root.displayName;
const i = s(({ className: o, orientation: l = "vertical", ...a }, c) => /* @__PURE__ */ e(
  r.ScrollAreaScrollbar,
  {
    ref: c,
    orientation: l,
    className: t(
      "flex touch-none select-none transition-colors",
      l === "vertical" && "h-full w-2 border-l border-l-transparent p-px",
      l === "horizontal" && "h-2 flex-col border-t border-t-transparent p-px",
      o
    ),
    ...a,
    children: /* @__PURE__ */ e(r.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
i.displayName = r.ScrollAreaScrollbar.displayName;
export {
  n as ScrollArea,
  i as ScrollBar
};
