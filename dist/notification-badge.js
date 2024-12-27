import { jsx as r } from "react/jsx-runtime";
import { cva as e } from "class-variance-authority";
import { cn as o } from "./utils.js";
const s = e("inline-flex items-center bg-danger transition-colors", {
  variants: {
    size: {
      sm: "h-4 min-w-4 px-1 text-xs",
      md: "h-6 min-w-6 px-2 text-base"
    },
    variant: {
      dot: "size-2 rounded-sm",
      default: "justify-center rounded font-medium text-primary-foreground"
    }
  },
  compoundVariants: [{ variant: "dot", class: "min-w-2 px-0" }],
  defaultVariants: {
    variant: "default"
  }
});
function c({ className: t, size: i, variant: n, ...a }) {
  return /* @__PURE__ */ r("div", { className: o(s({ size: i, variant: n }), t), ...a });
}
export {
  c as NotificationBadge,
  s as notificationBadgeVariants
};
