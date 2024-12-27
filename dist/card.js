import { jsx as d } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import { cn as s } from "./utils.js";
const m = t(({ className: a, ...e }, r) => /* @__PURE__ */ d("div", { ref: r, className: s("rounded-lg border bg-card text-card-foreground shadow-sm", a), ...e }));
m.displayName = "Card";
const i = t(({ className: a, ...e }, r) => /* @__PURE__ */ d("div", { ref: r, className: s("flex flex-col space-y-1 p-6", a), ...e }));
i.displayName = "CardHeader";
const l = t(
  ({ children: a, className: e, ...r }, o) => /* @__PURE__ */ d("h3", { ref: o, className: s("text-xl font-semibold", e), ...r, children: a })
);
l.displayName = "CardTitle";
const c = t(
  ({ className: a, ...e }, r) => /* @__PURE__ */ d("p", { ref: r, className: s("text-sm text-muted-foreground", a), ...e })
);
c.displayName = "CardDescription";
const p = t(({ className: a, ...e }, r) => /* @__PURE__ */ d("div", { ref: r, className: s("p-6 pt-0", a), ...e }));
p.displayName = "CardContent";
const n = t(({ className: a, ...e }, r) => /* @__PURE__ */ d("div", { ref: r, className: s("flex items-center p-6 pt-0", a), ...e }));
n.displayName = "CardFooter";
export {
  m as Card,
  p as CardContent,
  c as CardDescription,
  n as CardFooter,
  i as CardHeader,
  l as CardTitle
};
