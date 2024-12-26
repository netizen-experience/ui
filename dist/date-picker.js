import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { CaretDown as s } from "@phosphor-icons/react/dist/ssr";
import { Button as n } from "./button.js";
import { Calendar as m } from "./calendar.js";
import { Popover as l, PopoverTrigger as d, PopoverContent as c } from "./popover.js";
function p({ disabled: o, disabledDays: t, value: a, ...i }) {
  return /* @__PURE__ */ r(l, { children: [
    /* @__PURE__ */ e(d, { asChild: !0, children: /* @__PURE__ */ r(n, { variant: "secondary", className: "w-full justify-between", disabled: o, children: [
      /* @__PURE__ */ e("span", { className: "font-medium", children: a }),
      /* @__PURE__ */ e(s, { className: "text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ e(c, { align: "start", className: "p-6 shadow-sm", children: /* @__PURE__ */ e(m, { autoFocus: !0, disabled: t, ...i }) })
  ] });
}
p.displayName = "DatePicker";
export {
  p as DatePicker
};
