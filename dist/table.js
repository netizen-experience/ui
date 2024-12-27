import { jsx as t } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { cn as o } from "./utils.js";
const d = s(
  ({ className: e, wrapperClassName: a, ...l }, r) => /* @__PURE__ */ t("div", { className: o("relative w-full overflow-hidden rounded-md border", a), children: /* @__PURE__ */ t("table", { ref: r, className: o("w-full caption-bottom text-sm", e), ...l }) })
);
d.displayName = "Table";
const m = s(
  ({ className: e, ...a }, l) => /* @__PURE__ */ t("thead", { ref: l, className: o("bg-muted [&_tr]:border-b", e), ...a })
);
m.displayName = "TableHeader";
const b = s(
  ({ className: e, ...a }, l) => /* @__PURE__ */ t("tbody", { ref: l, className: o("[&_tr:last-child]:border-0", e), ...a })
);
b.displayName = "TableBody";
const c = s(
  ({ className: e, ...a }, l) => /* @__PURE__ */ t("tfoot", { ref: l, className: o("bg-neutral-900 font-medium text-neutral-50", e), ...a })
);
c.displayName = "TableFooter";
const i = s(
  ({ className: e, ...a }, l) => /* @__PURE__ */ t(
    "tr",
    {
      ref: l,
      className: o(
        "border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100",
        e
      ),
      ...a
    }
  )
);
i.displayName = "TableRow";
const n = s(
  ({ className: e, ...a }, l) => /* @__PURE__ */ t(
    "th",
    {
      ref: l,
      className: o(
        "h-12 px-4 text-left align-middle font-medium text-neutral-500 has-[[role=checkbox]]:pr-0",
        e
      ),
      ...a
    }
  )
);
n.displayName = "TableHead";
const p = s(
  ({ className: e, ...a }, l) => /* @__PURE__ */ t("td", { ref: l, className: o("p-4 align-middle has-[[role=checkbox]]:pr-0", e), ...a })
);
p.displayName = "TableCell";
const N = s(({ className: e, ...a }, l) => /* @__PURE__ */ t("caption", { ref: l, className: o("mt-4 text-sm text-neutral-500", e), ...a }));
N.displayName = "TableCaption";
export {
  d as Table,
  b as TableBody,
  N as TableCaption,
  p as TableCell,
  c as TableFooter,
  n as TableHead,
  m as TableHeader,
  i as TableRow
};
