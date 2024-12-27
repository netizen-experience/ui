import { jsx as r } from "react/jsx-runtime";
import { Slot as c } from "@radix-ui/react-slot";
import * as i from "@radix-ui/react-tabs";
import { cva as d } from "class-variance-authority";
import { createContext as f, forwardRef as s, useContext as m } from "react";
import { cn as o } from "./utils.js";
const g = d(
  "inline-flex items-center justify-center data-[orientation=vertical]:grid data-[orientation=vertical]:w-fit",
  {
    variants: {
      variant: {
        segment: "rounded-lg bg-neutral-200 p-1 text-muted-foreground",
        line: "border-border data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-l data-[orientation=horizontal]:pb-1 data-[orientation=vertical]:pl-1"
      }
    },
    defaultVariants: {
      variant: "segment"
    }
  }
), l = f({
  variant: "segment"
}), w = i.Root, b = s(({ className: e, variant: t = "segment", ...a }, n) => /* @__PURE__ */ r(l.Provider, { value: { variant: t }, children: /* @__PURE__ */ r(i.List, { ref: n, className: o(g({ variant: t }), e), ...a }) }));
b.displayName = i.List.displayName;
const v = s(({ className: e, ...t }, a) => {
  const { variant: n } = m(l);
  return /* @__PURE__ */ r(
    i.Trigger,
    {
      ref: a,
      className: o(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1 text-sm font-medium ring-offset-neutral-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 has-[[data-ui=tabs-trigger-icon]]:space-x-1 data-[orientation=vertical]:py-2 data-[state=active]:font-bold data-[state=active]:text-foreground",
        {
          "transition-all focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[state=active]:bg-background data-[state=active]:shadow-sm": n === "segment",
          "after:invisible after:absolute after:h-px after:w-full after:bg-primary after:content-[''] hover:bg-primary/10 active:bg-primary/20 after:data-[state=active]:visible after:data-[orientation=horizontal]:-bottom-[5px] after:data-[orientation=vertical]:-left-[5px] after:data-[orientation=vertical]:h-full after:data-[orientation=vertical]:w-px": n === "line"
        },
        e
      ),
      ...t
    }
  );
});
v.displayName = i.Trigger.displayName;
const p = ({
  children: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r(c, { className: o("size-4", t), ...a, "data-ui": "tabs-trigger-icon", children: e });
p.displayName = "TabsTriggerIcon";
const u = s(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  i.Content,
  {
    ref: a,
    className: o(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
u.displayName = i.Content.displayName;
export {
  w as Tabs,
  u as TabsContent,
  b as TabsList,
  v as TabsTrigger,
  p as TabsTriggerIcon
};
