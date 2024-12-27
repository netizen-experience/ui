import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { CaretDown as m } from "@phosphor-icons/react/dist/ssr";
import * as e from "@radix-ui/react-accordion";
import { forwardRef as n } from "react";
import { cn as s } from "./utils.js";
const y = e.Root, d = n(({ className: o, ...t }, a) => /* @__PURE__ */ r(e.Item, { ref: a, className: s("border-b", o), ...t }));
d.displayName = "AccordionItem";
const l = n(({ children: o, className: t, ...a }, i) => /* @__PURE__ */ r(e.Header, { className: "flex", children: /* @__PURE__ */ c(
  e.Trigger,
  {
    ref: i,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...a,
    children: [
      o,
      /* @__PURE__ */ r(m, { className: "size-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
l.displayName = e.Trigger.displayName;
const p = n(({ children: o, className: t, ...a }, i) => /* @__PURE__ */ r(
  e.Content,
  {
    ref: i,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...a,
    children: /* @__PURE__ */ r("div", { className: s("pb-4 pt-0", t), children: o })
  }
));
p.displayName = e.Content.displayName;
export {
  y as Accordion,
  p as AccordionContent,
  d as AccordionItem,
  l as AccordionTrigger
};
