import { jsx as e } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { cn as o } from "./utils.js";
const r = m(
  ({ className: s, ...i }, t) => /* @__PURE__ */ e("dl", { ref: t, className: o("divide-y divide-border", s), ...i })
);
r.displayName = "DescriptionList";
const a = m(
  ({ className: s, ...i }, t) => /* @__PURE__ */ e("div", { ref: t, className: o("px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", s), ...i })
);
a.displayName = "DescriptionListItem";
const p = m(
  ({ className: s, ...i }, t) => /* @__PURE__ */ e("dt", { ref: t, className: o("font-semibold", s), ...i })
);
p.displayName = "DescriptionListTerm";
const c = m(
  ({ className: s, ...i }, t) => /* @__PURE__ */ e("dd", { ref: t, className: o("mt-1 sm:col-span-2 sm:mt-0", s), ...i })
);
c.displayName = "DescriptionListDetails";
export {
  r as DescriptionList,
  c as DescriptionListDetails,
  a as DescriptionListItem,
  p as DescriptionListTerm
};
