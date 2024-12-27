import { jsx as l, jsxs as c } from "react/jsx-runtime";
import * as e from "@radix-ui/react-alert-dialog";
import { forwardRef as i } from "react";
import { cn as s } from "./utils.js";
import { buttonVariants as n } from "./button.js";
const w = e.Root, T = e.Trigger, p = e.Portal, m = i(({ className: a, ...t }, o) => /* @__PURE__ */ l(
  e.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-overlay/50 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t,
    ref: o
  }
));
m.displayName = e.Overlay.displayName;
const f = i(({ className: a, ...t }, o) => /* @__PURE__ */ c(p, { children: [
  /* @__PURE__ */ l(m, {}),
  /* @__PURE__ */ l(
    e.Content,
    {
      ref: o,
      className: s(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-6 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...t
    }
  )
] }));
f.displayName = e.Content.displayName;
const g = ({ className: a, ...t }) => /* @__PURE__ */ l("div", { className: s("flex flex-col space-y-2 text-center sm:text-left", a), ...t });
g.displayName = "AlertDialogHeader";
const y = ({ className: a, ...t }) => /* @__PURE__ */ l(
  "div",
  {
    className: s(
      "-mx-6 -mb-6 flex flex-col-reverse border-t border-t-border px-6 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...t
  }
);
y.displayName = "AlertDialogFooter";
const N = i(({ className: a, ...t }, o) => /* @__PURE__ */ l(e.Title, { ref: o, className: s("text-xl font-medium", a), ...t }));
N.displayName = e.Title.displayName;
const x = i(({ className: a, ...t }, o) => /* @__PURE__ */ l(e.Description, { ref: o, className: s("text-sm text-muted-foreground", a), ...t }));
x.displayName = e.Description.displayName;
const u = i(({ className: a, size: t, variant: o = "primary", ...r }, d) => /* @__PURE__ */ l(e.Action, { ref: d, className: s(n({ variant: o, size: t }), a), ...r }));
u.displayName = e.Action.displayName;
const A = i(({ className: a, size: t, variant: o = "secondary", ...r }, d) => /* @__PURE__ */ l(
  e.Cancel,
  {
    ref: d,
    className: s(n({ variant: o, size: t }), "mt-2 sm:mt-0", a),
    ...r
  }
));
A.displayName = e.Cancel.displayName;
export {
  w as AlertDialog,
  u as AlertDialogAction,
  A as AlertDialogCancel,
  f as AlertDialogContent,
  x as AlertDialogDescription,
  y as AlertDialogFooter,
  g as AlertDialogHeader,
  m as AlertDialogOverlay,
  p as AlertDialogPortal,
  N as AlertDialogTitle,
  T as AlertDialogTrigger
};
