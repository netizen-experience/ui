import { jsx as t } from "react/jsx-runtime";
import * as o from "@radix-ui/react-popover";
import { forwardRef as s } from "react";
import { cn as n } from "./utils.js";
const c = o.Root, g = o.Trigger, v = o.Close, m = s(({ align: e = "center", className: a, sideOffset: r = 4, ...d }, i) => /* @__PURE__ */ t(o.Portal, { children: /* @__PURE__ */ t(
  o.Content,
  {
    ref: i,
    align: e,
    sideOffset: r,
    className: n(
      "z-50 rounded-lg border border-border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...d
  }
) }));
m.displayName = o.Content.displayName;
export {
  c as Popover,
  v as PopoverClose,
  m as PopoverContent,
  g as PopoverTrigger
};
