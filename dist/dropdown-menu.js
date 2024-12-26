import { jsxs as l, jsx as n } from "react/jsx-runtime";
import { CaretRight as m, Check as p, RadioButton as c } from "@phosphor-icons/react/dist/ssr";
import * as e from "@radix-ui/react-dropdown-menu";
import { Slot as u } from "@radix-ui/react-slot";
import { forwardRef as d } from "react";
import { cn as s } from "./utils.js";
const R = e.Root, T = e.Trigger, j = e.Group, k = e.Portal, G = e.Sub, P = e.RadioGroup, f = d(({ children: t, className: o, inset: a, ...r }, i) => /* @__PURE__ */ l(
  e.SubTrigger,
  {
    ref: i,
    className: s(
      "flex cursor-default select-none items-center rounded px-2 py-2 text-sm outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[state=open]:bg-neutral-100 data-[disabled]:opacity-50",
      a && "pl-8",
      o
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ n(m, { className: "ml-auto size-4" })
    ]
  }
));
f.displayName = e.SubTrigger.displayName;
const b = d(({ className: t, ...o }, a) => /* @__PURE__ */ n(
  e.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...o
  }
));
b.displayName = e.SubContent.displayName;
const y = d(({ align: t = "start", className: o, sideOffset: a = 4, ...r }, i) => /* @__PURE__ */ n(e.Portal, { children: /* @__PURE__ */ n(
  e.Content,
  {
    ref: i,
    align: t,
    sideOffset: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      o
    ),
    ...r
  }
) }));
y.displayName = e.Content.displayName;
const N = d(({ className: t, inset: o, ...a }, r) => /* @__PURE__ */ n(
  e.Item,
  {
    ref: r,
    className: s(
      "relative flex cursor-default select-none items-center rounded px-2 py-2 text-sm outline-none transition-colors focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o && "pl-8",
      t
    ),
    ...a
  }
));
N.displayName = e.Item.displayName;
const g = ({
  children: t,
  className: o,
  ...a
}) => /* @__PURE__ */ n(u, { className: s("mr-2 size-4", o), ...a, children: t });
g.displayName = "DropdownMenuItemIcon";
const h = d(({ checked: t, children: o, className: a, ...r }, i) => /* @__PURE__ */ l(
  e.CheckboxItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a
    ),
    checked: t,
    ...r,
    children: [
      /* @__PURE__ */ n(
        "span",
        {
          className: s(
            "absolute left-2 flex size-4 items-center justify-center rounded-sm border border-input hover:border-primary",
            t && "border-primary bg-primary hover:outline hover:outline-1 hover:outline-primary-hover/20"
          ),
          children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(p, { size: 12, weight: "bold", className: "text-white" }) })
        }
      ),
      o
    ]
  }
));
h.displayName = e.CheckboxItem.displayName;
const w = d(({ children: t, className: o, ...a }, r) => /* @__PURE__ */ l(
  e.RadioItem,
  {
    ref: r,
    className: s(
      "relative flex cursor-default select-none items-center rounded py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o
    ),
    ...a,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(c, { size: 16, weight: "fill", className: "text-primary" }) }) }),
      t
    ]
  }
));
w.displayName = e.RadioItem.displayName;
const x = d(({ className: t, inset: o, ...a }, r) => /* @__PURE__ */ n(
  e.Label,
  {
    ref: r,
    className: s("p-2 text-sm font-semibold", o && "pl-8", t),
    ...a
  }
));
x.displayName = e.Label.displayName;
const v = d(({ className: t, ...o }, a) => /* @__PURE__ */ n(e.Separator, { ref: a, className: s("-mx-1 my-1 h-px bg-input", t), ...o }));
v.displayName = e.Separator.displayName;
const D = ({ className: t, ...o }) => /* @__PURE__ */ n("span", { className: s("ml-auto text-xs tracking-widest opacity-60", t), ...o });
D.displayName = "DropdownMenuShortcut";
export {
  R as DropdownMenu,
  h as DropdownMenuCheckboxItem,
  y as DropdownMenuContent,
  j as DropdownMenuGroup,
  N as DropdownMenuItem,
  g as DropdownMenuItemIcon,
  x as DropdownMenuLabel,
  k as DropdownMenuPortal,
  P as DropdownMenuRadioGroup,
  w as DropdownMenuRadioItem,
  v as DropdownMenuSeparator,
  D as DropdownMenuShortcut,
  G as DropdownMenuSub,
  b as DropdownMenuSubContent,
  f as DropdownMenuSubTrigger,
  T as DropdownMenuTrigger
};
