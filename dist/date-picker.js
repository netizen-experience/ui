import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { CaretDown as s } from "@phosphor-icons/react/dist/ssr";
import { Button as i } from "./button.js";
import { Calendar as m } from "./calendar.js";
import { Popover as l, PopoverTrigger as d, PopoverContent as c } from "./popover.js";
function v({ disabled: o, disabledDays: t, value: a, ...n }) {
  return /* @__PURE__ */ e(l, { children: [
    /* @__PURE__ */ r(d, { asChild: !0, children: /* @__PURE__ */ e(i, { variant: "secondary", className: "w-full justify-between", disabled: o, children: [
      /* @__PURE__ */ r("span", { className: "font-medium", children: a }),
      /* @__PURE__ */ r(s, { className: "text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ r(c, { align: "start", className: "p-6 shadow-sm", children: /* @__PURE__ */ r(m, { autoFocus: !0, disabled: t, ...n }) })
  ] });
}
export {
  v as DatePicker
};
