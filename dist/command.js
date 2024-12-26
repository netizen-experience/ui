import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { MagnifyingGlass as p } from "@phosphor-icons/react/dist/ssr";
import { Command as m } from "cmdk";
import { forwardRef as t } from "react";
import { cn as r } from "./utils.js";
import { Dialog as i, DialogContent as l } from "./dialog.js";
const n = t(({ className: e, ...a }, d) => /* @__PURE__ */ o(
  m,
  {
    ref: d,
    className: r(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...a
  }
));
n.displayName = m.displayName;
const c = ({ children: e, ...a }) => /* @__PURE__ */ o(i, { ...a, children: /* @__PURE__ */ o(l, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ o(n, { className: "[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-4 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) });
c.displayName = "CommandDialog";
const u = t(({ className: e, ...a }, d) => (
  // eslint-disable-next-line react/no-unknown-property -- `cmdk-input-wrapper` is used for styling purposes in `CommandDialog` component
  /* @__PURE__ */ s("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
    /* @__PURE__ */ o(p, { size: 16, className: "mr-2 shrink-0 opacity-50" }),
    /* @__PURE__ */ o(
      m.Input,
      {
        ref: d,
        className: r(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...a
      }
    )
  ] })
));
u.displayName = m.Input.displayName;
const g = t(({ className: e, ...a }, d) => /* @__PURE__ */ o(
  m.List,
  {
    ref: d,
    className: r("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...a
  }
));
g.displayName = m.List.displayName;
const x = t((e, a) => /* @__PURE__ */ o(m.Empty, { ref: a, className: "py-6 text-center text-sm", ...e }));
x.displayName = m.Empty.displayName;
const f = t((e, a) => /* @__PURE__ */ o(m.Loading, { ref: a, className: "py-6 text-center text-sm", ...e }));
f.displayName = m.Loading.displayName;
const y = t(({ className: e, ...a }, d) => /* @__PURE__ */ o(
  m.Group,
  {
    ref: d,
    className: r(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...a
  }
));
y.displayName = m.Group.displayName;
const N = t(({ className: e, ...a }, d) => /* @__PURE__ */ o(m.Separator, { ref: d, className: r("-mx-1 h-px bg-border", e), ...a }));
N.displayName = m.Separator.displayName;
const h = t(({ className: e, ...a }, d) => /* @__PURE__ */ o(
  m.Item,
  {
    ref: d,
    className: r(
      "relative flex cursor-default select-none items-center rounded-sm p-2 text-sm outline-none aria-selected:bg-muted data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      e
    ),
    ...a
  }
));
h.displayName = m.Item.displayName;
const _ = ({ className: e, ...a }) => /* @__PURE__ */ o("span", { className: r("ml-auto text-xs tracking-widest text-muted-foreground", e), ...a });
_.displayName = "CommandShortcut";
export {
  n as Command,
  c as CommandDialog,
  x as CommandEmpty,
  y as CommandGroup,
  u as CommandInput,
  h as CommandItem,
  g as CommandList,
  f as CommandLoading,
  N as CommandSeparator,
  _ as CommandShortcut
};
