import { jsxs as f, jsx as r } from "react/jsx-runtime";
import { X as g, CheckCircle as p, WarningDiamond as m, Warning as b, Info as x } from "@phosphor-icons/react/dist/ssr";
import { cva as h } from "class-variance-authority";
import { forwardRef as i } from "react";
import { cn as o } from "./utils.js";
import { Button as v } from "./button.js";
import { IconButton as A } from "./icon-button.js";
const k = h(
  "relative flex w-full flex-row items-center justify-between rounded-lg py-4 pl-[44px] pr-[52px] text-sm has-[[data-ui=alert-description]]:flex-col has-[[data-ui=alert-description]]:items-start has-[[data-ui=alert-description]]:justify-normal",
  {
    variants: {
      variant: {
        info: "bg-info-background text-info-foreground [&>button]:ring-offset-info-background",
        success: "bg-success-background text-success-foreground [&>button]:ring-offset-success-background",
        warning: "bg-warning-background text-warning-foreground [&>button]:ring-offset-warning-background",
        danger: "bg-danger-background text-danger-foreground [&>button]:ring-offset-danger-background"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
function N({ variant: e, ...t }) {
  return e === "success" ? /* @__PURE__ */ r(p, { ...t }) : e === "warning" ? /* @__PURE__ */ r(m, { ...t }) : e === "danger" ? /* @__PURE__ */ r(b, { ...t }) : /* @__PURE__ */ r(x, { ...t });
}
const w = i(
  ({ children: e, className: t, hideClose: a, icon: n, onDismiss: c, variant: s = "info", ...l }, d) => {
    const u = n || N;
    return /* @__PURE__ */ f("div", { ref: d, role: "alert", className: o(k({ variant: s }), a && "pr-4", t), ...l, children: [
      /* @__PURE__ */ r(u, { variant: s, size: 20, className: "absolute left-4 top-[16.5px]" }),
      e,
      !a && /* @__PURE__ */ r(
        A,
        {
          variant: "ghost",
          size: "sm",
          className: "absolute right-2 top-[10.5px] hover:bg-transparent active:bg-transparent [&>svg]:size-5",
          onClick: c,
          children: /* @__PURE__ */ r(g, {})
        }
      )
    ] });
  }
);
w.displayName = "Alert";
const y = i(
  ({ children: e, className: t, ...a }, n) => /* @__PURE__ */ r("h5", { ref: n, className: o("peer/title text-sm font-bold", t), "data-ui": "alert-title", ...a, children: e })
);
y.displayName = "AlertTitle";
const j = i(
  ({ className: e, ...t }, a) => /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      className: o("peer/description peer-data-[ui=alert-title]/title:mt-2", e),
      "data-ui": "alert-description",
      ...t
    }
  )
);
j.displayName = "AlertDescription";
const z = i(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  v,
  {
    ref: a,
    variant: "ghost",
    className: o(
      "-m-[9px] h-auto p-[9px] hover:bg-transparent active:bg-transparent peer-data-[ui=alert-description]/description:mt-[10px]",
      e
    ),
    "data-ui": "alert-action",
    ...t
  }
));
z.displayName = "AlertAction";
export {
  w as Alert,
  z as AlertAction,
  j as AlertDescription,
  y as AlertTitle
};
