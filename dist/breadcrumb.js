import { jsx as s, jsxs as m } from "react/jsx-runtime";
import { CaretRight as l, DotsThree as n } from "@phosphor-icons/react/dist/ssr";
import { Slot as c } from "@radix-ui/react-slot";
import { forwardRef as t } from "react";
import { cn as i } from "./utils.js";
const d = t(({ ...e }, r) => /* @__PURE__ */ s("nav", { ref: r, "aria-label": "breadcrumb", ...e }));
d.displayName = "Breadcrumb";
const u = t(
  ({ className: e, ...r }, a) => /* @__PURE__ */ s(
    "ol",
    {
      ref: a,
      className: i("flex flex-wrap items-center gap-1 break-words text-sm text-muted-foreground sm:gap-2", e),
      ...r
    }
  )
);
u.displayName = "BreadcrumbList";
const p = t(
  ({ className: e, ...r }, a) => /* @__PURE__ */ s("li", { ref: a, className: i("inline-flex items-center gap-1", e), ...r })
);
p.displayName = "BreadcrumbItem";
const b = t(({ asChild: e, className: r, ...a }, o) => /* @__PURE__ */ s(
  e ? c : "a",
  {
    ref: o,
    className: i(
      "rounded transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-ring",
      r
    ),
    ...a
  }
));
b.displayName = "BreadcrumbLink";
const f = t(
  ({ className: e, ...r }, a) => /* @__PURE__ */ s(
    "span",
    {
      ref: a,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: i("font-bold text-foreground", e),
      ...r
    }
  )
);
f.displayName = "BreadcrumbPage";
const B = ({ children: e, className: r, ...a }) => /* @__PURE__ */ s("li", { role: "presentation", "aria-hidden": "true", className: i("[&>svg]:size-4", r), ...a, children: e ?? /* @__PURE__ */ s(l, {}) });
B.displayName = "BreadcrumbSeparator";
const N = ({ className: e, ...r }) => /* @__PURE__ */ m("span", { role: "presentation", "aria-hidden": "true", className: i("flex items-center justify-center", e), ...r, children: [
  /* @__PURE__ */ s(n, { weight: "bold", size: 16 }),
  /* @__PURE__ */ s("span", { className: "sr-only", children: "More" })
] });
N.displayName = "BreadcrumbEllipsis";
export {
  d as Breadcrumb,
  N as BreadcrumbEllipsis,
  p as BreadcrumbItem,
  b as BreadcrumbLink,
  u as BreadcrumbList,
  f as BreadcrumbPage,
  B as BreadcrumbSeparator
};
