import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { CaretDown as n, CaretUp as u, Check as f } from "@phosphor-icons/react/dist/ssr";
import * as e from "@radix-ui/react-select";
import { Slot as b } from "@radix-ui/react-slot";
import { forwardRef as s } from "react";
import { cn as l } from "./utils.js";
const B = e.Root, j = e.Group, L = e.Value, g = s(({ children: r, className: o, ...t }, i) => /* @__PURE__ */ d(
  e.Trigger,
  {
    ref: i,
    className: l(
      "flex h-10 w-full items-center rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-500 hover:border-primary focus-visible:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-hover/20 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:opacity-50 disabled:hover:border-input data-[state=open]:border-primary-hover data-[state=open]:ring-4 data-[state=open]:ring-primary-hover/20 [&>span]:line-clamp-1",
      o
    ),
    ...t,
    children: [
      r,
      /* @__PURE__ */ a(e.Icon, { asChild: !0, children: /* @__PURE__ */ a(n, { size: 16, className: "ml-auto" }) })
    ]
  }
));
g.displayName = e.Trigger.displayName;
const h = ({
  children: r,
  className: o,
  ...t
}) => /* @__PURE__ */ a(b, { className: l("mr-2 size-5 text-[inherit]", o), ...t, children: r });
h.displayName = "SelectLeadingIcon";
const c = s(({ className: r, ...o }, t) => /* @__PURE__ */ a(
  e.ScrollUpButton,
  {
    ref: t,
    className: l("flex cursor-default items-center justify-center py-1", r),
    ...o,
    children: /* @__PURE__ */ a(u, { className: "size-4" })
  }
));
c.displayName = e.ScrollUpButton.displayName;
const m = s(({ className: r, ...o }, t) => /* @__PURE__ */ a(
  e.ScrollDownButton,
  {
    ref: t,
    className: l("flex cursor-default items-center justify-center py-1", r),
    ...o,
    children: /* @__PURE__ */ a(n, { className: "size-4" })
  }
));
m.displayName = e.ScrollDownButton.displayName;
const y = s(({ children: r, className: o, position: t = "popper", ...i }, p) => /* @__PURE__ */ a(e.Portal, { children: /* @__PURE__ */ d(
  e.Content,
  {
    ref: p,
    className: l(
      "relative z-50 max-h-[256px] min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t === "popper" && "data-[side=bottom]:translate-y-2 data-[side=left]:-translate-x-2 data-[side=right]:translate-x-2 data-[side=top]:-translate-y-2",
      o
    ),
    position: t,
    ...i,
    children: [
      /* @__PURE__ */ a(c, {}),
      /* @__PURE__ */ a(
        e.Viewport,
        {
          className: l(
            "p-1",
            t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ a(m, {})
    ]
  }
) }));
y.displayName = e.Content.displayName;
const N = s(({ className: r, ...o }, t) => /* @__PURE__ */ a(e.Label, { ref: t, className: l("p-2 text-sm font-semibold", r), ...o }));
N.displayName = e.Label.displayName;
const x = s(({ children: r, className: o, ...t }, i) => /* @__PURE__ */ d(
  e.Item,
  {
    ref: i,
    className: l(
      "relative flex w-full cursor-default select-none items-center rounded p-2 text-sm outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(e.ItemText, { children: r }),
      /* @__PURE__ */ a("span", { className: "absolute right-2 flex items-center justify-center", children: /* @__PURE__ */ a(e.ItemIndicator, { children: /* @__PURE__ */ a(f, { size: 16, className: "text-primary", weight: "bold" }) }) })
    ]
  }
));
x.displayName = e.Item.displayName;
const S = s(({ className: r, ...o }, t) => /* @__PURE__ */ a(e.Separator, { ref: t, className: l("-mx-1 my-1 h-px bg-border", r), ...o }));
S.displayName = e.Separator.displayName;
export {
  B as Select,
  y as SelectContent,
  j as SelectGroup,
  x as SelectItem,
  N as SelectLabel,
  h as SelectLeadingIcon,
  m as SelectScrollDownButton,
  c as SelectScrollUpButton,
  S as SelectSeparator,
  g as SelectTrigger,
  L as SelectValue
};
