import { jsx as m } from "react/jsx-runtime";
import { Slot as p } from "@radix-ui/react-slot";
import { cva as n } from "class-variance-authority";
import { forwardRef as i } from "react";
import { cn as r } from "./utils.js";
import { Button as d } from "./button.js";
const c = n("flex flex-col justify-center text-center", {
  variants: {
    variant: {
      default: "",
      dashed: "rounded-lg border border-dashed border-border p-8"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), l = i(({ as: t, className: e, variant: a, ...o }, s) => /* @__PURE__ */ m(t ?? "div", { ref: s, className: r(c({ variant: a, className: e })), ...o }));
l.displayName = "EmptyState";
const y = ({
  children: t,
  className: e,
  ...a
}) => /* @__PURE__ */ m("div", { className: "peer/icon flex justify-center", "data-ui": "empty-state-icon", children: /* @__PURE__ */ m(p, { className: r("size-16 text-muted", e), ...a, children: t }) });
y.displayName = "EmptyStateIcon";
const u = i(
  ({ children: t, className: e, ...a }, o) => /* @__PURE__ */ m(
    "h3",
    {
      ref: o,
      className: r("peer/title text-sm font-semibold peer-data-[ui=empty-state-icon]/icon:mt-2", e),
      "data-ui": "empty-state-title",
      ...a,
      children: t
    }
  )
);
u.displayName = "EmptyStateTitle";
const f = i(
  ({ className: t, ...e }, a) => /* @__PURE__ */ m(
    "p",
    {
      ref: a,
      className: r("peer/description text-sm peer-data-[ui=empty-state-title]/title:mt-1", t),
      "data-ui": "empty-state-description",
      ...e
    }
  )
);
f.displayName = "EmptyStateDescription";
const S = i(({ className: t, ...e }, a) => /* @__PURE__ */ m(
  d,
  {
    ref: a,
    className: r("peer/button mt-8 w-max self-center", t),
    "data-ui": "empty-state-button",
    ...e
  }
));
S.displayName = "EmptyStateButton";
export {
  l as EmptyState,
  S as EmptyStateButton,
  f as EmptyStateDescription,
  y as EmptyStateIcon,
  u as EmptyStateTitle,
  c as emptyStateVariants
};
