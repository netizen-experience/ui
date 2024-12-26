import { jsx as t } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { cn as a } from "./utils.js";
const i = u(({ className: r, type: e, ...o }, d) => /* @__PURE__ */ t(
  "input",
  {
    type: e,
    className: a(
      "flex h-10 w-full rounded-lg border border-input bg-background px-3 text-sm placeholder:text-neutral-500 read-only:cursor-default hover:border-primary-hover focus:border-primary-hover focus:outline-none focus:ring-4 focus:ring-primary-hover/20 disabled:cursor-default disabled:border-input disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50 disabled:hover:border-input",
      r
    ),
    ref: d,
    ...o
  }
));
i.displayName = "Input";
export {
  i as Input
};
