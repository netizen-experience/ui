import { jsx as i } from "react/jsx-runtime";
import * as t from "@radix-ui/react-hover-card";
import { forwardRef as n } from "react";
import { cn as s } from "./utils.js";
const c = t.Root, g = t.Trigger, m = n(({ align: o = "center", className: e, sideOffset: a = 4, ...r }, d) => /* @__PURE__ */ i(
  t.Content,
  {
    ref: d,
    align: o,
    sideOffset: a,
    className: s(
      "z-50 w-[256px] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
m.displayName = t.Content.displayName;
export {
  c as HoverCard,
  m as HoverCardContent,
  g as HoverCardTrigger
};
