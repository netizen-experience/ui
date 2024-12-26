import { jsx as o } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import { cn as p } from "./utils.js";
import { Avatar as s } from "./avatar.js";
const l = t(({ className: r, overlapDirection: a = "ltr", ...e }, m) => /* @__PURE__ */ o(
  "div",
  {
    ref: m,
    className: p(
      "flex -space-x-2 px-4 py-2",
      a === "rtl" && "flex-row-reverse space-x-reverse",
      r
    ),
    ...e
  }
));
l.displayName = "AvatarGroup";
const i = t(
  ({ className: r, ...a }, e) => /* @__PURE__ */ o(s, { ref: e, className: p("outline outline-2 outline-background", r), ...a })
);
i.displayName = "AvatarGroupItem";
export {
  l as AvatarGroup,
  i as AvatarGroupItem
};
