import { jsx as o, jsxs as r } from "react/jsx-runtime";
import { X as p } from "@phosphor-icons/react/dist/ssr";
import * as e from "@radix-ui/react-dialog";
import { cva as f } from "class-variance-authority";
import { forwardRef as n } from "react";
import { cn as i } from "./utils.js";
const D = e.Root, j = e.Trigger, z = e.Close, h = e.Portal, g = e.Content, d = n(({ className: t, ...a }, s) => /* @__PURE__ */ o(
  e.Overlay,
  {
    className: i(
      "fixed inset-0 z-50 bg-overlay/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-black/80",
      t
    ),
    ...a,
    ref: s
  }
));
d.displayName = e.Overlay.displayName;
const u = f(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), y = n(
  ({ children: t, className: a, hideClose: s, side: l = "right", ...m }, c) => /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ o(d, {}),
    /* @__PURE__ */ r(g, { ref: c, className: i(u({ side: l }), a), ...m, children: [
      t,
      !s && /* @__PURE__ */ r(e.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ o(p, { className: "size-4" }),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
y.displayName = e.Content.displayName;
const b = ({ className: t, ...a }) => /* @__PURE__ */ o("div", { className: i("flex flex-col space-y-2 text-left", t), ...a });
b.displayName = "SheetHeader";
const x = ({ className: t, ...a }) => /* @__PURE__ */ o("div", { className: i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...a });
x.displayName = "SheetFooter";
const N = n(({ className: t, ...a }, s) => /* @__PURE__ */ o(e.Title, { ref: s, className: i("text-lg font-semibold text-foreground", t), ...a }));
N.displayName = e.Title.displayName;
const S = n(({ className: t, ...a }, s) => /* @__PURE__ */ o(e.Description, { ref: s, className: i("text-sm text-muted-foreground", t), ...a }));
S.displayName = e.Description.displayName;
export {
  D as Sheet,
  z as SheetClose,
  y as SheetContent,
  g as SheetContentBarebones,
  S as SheetDescription,
  x as SheetFooter,
  b as SheetHeader,
  d as SheetOverlay,
  h as SheetPortal,
  N as SheetTitle,
  j as SheetTrigger,
  u as sheetVariants
};
