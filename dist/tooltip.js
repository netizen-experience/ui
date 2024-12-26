import { jsx as r } from "react/jsx-runtime";
import * as o from "@radix-ui/react-tooltip";
import { forwardRef as d } from "react";
import { cn as s } from "./utils.js";
const f = o.Provider, c = o.Root, g = o.Trigger, T = o.Portal, m = d(({ className: t, sideOffset: e = 4, ...i }, a) => /* @__PURE__ */ r(
  o.Content,
  {
    ref: a,
    sideOffset: e,
    className: s(
      "dark z-50 overflow-hidden rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
));
m.displayName = o.Content.displayName;
export {
  c as Tooltip,
  m as TooltipContent,
  T as TooltipPortal,
  f as TooltipProvider,
  g as TooltipTrigger
};
