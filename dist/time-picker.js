import { jsxs as h, jsx as s } from "react/jsx-runtime";
import { CaretDown as M } from "@phosphor-icons/react";
import { useState as I } from "react";
import { cn as x } from "./utils.js";
import { Button as A } from "./button.js";
import { Command as E, CommandInput as T, CommandList as $, CommandEmpty as N, CommandGroup as P, CommandItem as y } from "./command.js";
import { Popover as j, PopoverTrigger as H, PopoverContent as O } from "./popover.js";
const S = (r) => {
  if (r.length !== 4 || !/^\d{4}$/.test(r))
    throw new Error('Invalid time string format. Expected "HHmm".');
  const i = parseInt(r.substring(0, 2), 10), n = parseInt(r.substring(2, 4), 10);
  if (i < 0 || i > 23 || n < 0 || n > 59)
    throw new Error("Invalid time value. Hours must be between 00-23 and minutes between 00-59.");
}, k = (r, i, n) => {
  const m = (o) => {
    const t = parseInt(o.substring(0, 2), 10), e = parseInt(o.substring(2, 4), 10);
    return t * 60 + e;
  }, f = (o) => {
    const t = Math.floor(o / 60), e = o % 60, c = t >= 12 ? "PM" : "AM", l = `${(t % 12 || 12).toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}${c.toLowerCase()}`, v = {
      hours: t,
      minutes: e,
      hoursAndMinutes: `${t.toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}`
    };
    return {
      label: l,
      value: v
    };
  }, u = m(r), d = m(i);
  if (u > d)
    throw new Error("endTime must be after startTime");
  return Array.from({ length: Math.floor((d - u) / n) + 1 }, (o, t) => {
    const e = u + t * n;
    return f(e);
  });
}, q = ({
  className: r,
  defaultValue: i,
  endTime: n,
  interval: m,
  notFoundMessage: f = "Time not found",
  onSelect: u,
  placeholder: d = "Select time",
  searchPlaceholder: o = "Search time...",
  startTime: t
}) => {
  var w;
  if (S(t), S(n), m <= 0 || !Number.isInteger(m))
    throw new Error("Invalid interval. Interval must be an integer and more than 0");
  const e = k(t, n, m), [c, g] = I(!1), [l, v] = I(i);
  return /* @__PURE__ */ h(j, { open: c, onOpenChange: g, modal: !0, children: [
    /* @__PURE__ */ s(H, { asChild: !0, children: /* @__PURE__ */ h(
      A,
      {
        variant: "secondary",
        role: "combobox",
        "aria-expanded": c,
        className: x("min-w-[248px] justify-between", r),
        children: [
          /* @__PURE__ */ s("span", { className: "font-medium", children: l && e.length > 0 ? (w = e.find((a) => a.value.hoursAndMinutes === l)) == null ? void 0 : w.label : d }),
          /* @__PURE__ */ s(M, { className: "ml-2 size-4 shrink-0 text-muted-foreground" })
        ]
      }
    ) }),
    /* @__PURE__ */ s(O, { className: "w-[var(--radix-popover-trigger-width)] overflow-hidden p-0", children: /* @__PURE__ */ h(
      E,
      {
        filter: (a, b) => a.includes(b) ? 1 : 0,
        children: [
          /* @__PURE__ */ s(T, { placeholder: o }),
          /* @__PURE__ */ h($, { children: [
            /* @__PURE__ */ s(N, { children: f }),
            /* @__PURE__ */ s(P, { children: e.map((a) => /* @__PURE__ */ s(
              y,
              {
                value: a.label,
                onSelect: (b) => {
                  const p = e.find((C) => C.label === b);
                  p && p.value.hoursAndMinutes !== l && (v(p.value.hoursAndMinutes), u(p.value)), g(!1);
                },
                children: a.label
              },
              a.value.hoursAndMinutes
            )) })
          ] })
        ]
      }
    ) })
  ] });
};
export {
  q as TimePicker
};
