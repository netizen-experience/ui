import { jsx as m } from "react/jsx-runtime";
import * as a from "@radix-ui/react-avatar";
import { forwardRef as s } from "react";
import { cn as t } from "./utils.js";
const o = s(({ className: e, ...l }, r) => /* @__PURE__ */ m(
  a.Root,
  {
    ref: r,
    className: t("relative flex size-10 shrink-0 overflow-hidden rounded-full", e),
    ...l
  }
));
o.displayName = a.Root.displayName;
const i = s(({ className: e, ...l }, r) => /* @__PURE__ */ m(a.Image, { ref: r, className: t("aspect-square h-full w-full", e), ...l }));
i.displayName = a.Image.displayName;
const f = s(({ className: e, ...l }, r) => /* @__PURE__ */ m(
  a.Fallback,
  {
    ref: r,
    className: t("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...l
  }
));
f.displayName = a.Fallback.displayName;
export {
  o as Avatar,
  f as AvatarFallback,
  i as AvatarImage
};
