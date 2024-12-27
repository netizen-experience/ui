import { jsx as m } from "react/jsx-runtime";
import * as o from "@radix-ui/react-label";
import { cva as a } from "class-variance-authority";
import { forwardRef as i } from "react";
import { cn as s } from "./utils.js";
const d = a(
  "text-sm font-medium text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:text-foreground/50"
), l = i(({ className: e, ...r }, t) => /* @__PURE__ */ m(o.Root, { ref: t, className: s(d(), e), ...r }));
l.displayName = o.Root.displayName;
export {
  l as Label,
  d as labelVariants
};
