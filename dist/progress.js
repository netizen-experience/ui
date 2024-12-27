import { jsx as o } from "react/jsx-runtime";
import * as r from "@radix-ui/react-progress";
import { forwardRef as s } from "react";
import { cn as i } from "./utils.js";
const m = s(({ className: l, value: e, ...a }, t) => /* @__PURE__ */ o(
  r.Root,
  {
    ref: t,
    className: i("relative h-2 w-full overflow-hidden rounded-full bg-muted", l),
    ...a,
    children: /* @__PURE__ */ o(
      r.Indicator,
      {
        className: "h-full w-full flex-1 rounded-full bg-primary transition-all",
        style: { transform: `translateX(-${100 - (e ?? 0)}%)` }
      }
    )
  }
));
m.displayName = r.Root.displayName;
export {
  m as Progress
};
