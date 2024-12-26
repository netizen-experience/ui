import { jsx as d } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { cn as t } from "./utils.js";
const i = a(({ className: r, ...e }, o) => /* @__PURE__ */ d(
  "textarea",
  {
    className: t(
      "flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm [scroll-padding-block:8px] placeholder:text-neutral-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary-hover/20 disabled:cursor-default disabled:border-input disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50 disabled:hover:border-input",
      r
    ),
    ref: o,
    ...e
  }
));
i.displayName = "Textarea";
export {
  i as Textarea
};
