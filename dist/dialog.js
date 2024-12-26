import { jsx as o, jsxs as r } from "react/jsx-runtime";
import { X as m } from "@phosphor-icons/react/dist/ssr";
import * as e from "@radix-ui/react-dialog";
import * as l from "react";
import { cn as i } from "./utils.js";
const D = e.Root, v = e.Trigger, c = e.Portal, w = e.Close, d = l.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ o(
  e.Overlay,
  {
    ref: s,
    className: i(
      "fixed inset-0 z-50 bg-overlay/50 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t
  }
));
d.displayName = e.Overlay.displayName;
const p = l.forwardRef(({ children: a, className: t, ...s }, n) => /* @__PURE__ */ r(c, { children: [
  /* @__PURE__ */ o(d, {}),
  /* @__PURE__ */ r(
    e.Content,
    {
      ref: n,
      className: i(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-6 rounded-lg border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full",
        t
      ),
      ...s,
      children: [
        a,
        /* @__PURE__ */ r(e.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500", children: [
          /* @__PURE__ */ o(m, { size: 24 }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
p.displayName = e.Content.displayName;
const f = ({ className: a, ...t }) => /* @__PURE__ */ o("div", { className: i("flex flex-col space-y-2", a), ...t });
f.displayName = "DialogHeader";
const g = ({ className: a, ...t }) => /* @__PURE__ */ o(
  "div",
  {
    className: i(
      "-mx-6 -mb-6 flex flex-col-reverse border-t border-t-border px-6 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...t
  }
);
g.displayName = "DialogFooter";
const u = l.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ o(e.Title, { ref: s, className: i("text-xl font-medium", a), ...t }));
u.displayName = e.Title.displayName;
const y = l.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ o(e.Description, { ref: s, className: i("text-sm text-muted-foreground", a), ...t }));
y.displayName = e.Description.displayName;
export {
  D as Dialog,
  w as DialogClose,
  p as DialogContent,
  y as DialogDescription,
  g as DialogFooter,
  f as DialogHeader,
  d as DialogOverlay,
  c as DialogPortal,
  u as DialogTitle,
  v as DialogTrigger
};
