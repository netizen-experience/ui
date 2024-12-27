import { jsx as o } from "react/jsx-runtime";
import { Toaster as e, toast as r } from "sonner";
const a = ({ ...t }) => /* @__PURE__ */ o(
  e,
  {
    className: "toaster group/toaster",
    toastOptions: {
      unstyled: !0,
      closeButton: !0,
      classNames: {
        toast: "group/toast flex w-[350px] flex-nowrap items-center rounded-lg border bg-popover p-4 text-popover-foreground shadow-lg has-[[data-close-button=true]]:pr-10",
        content: "mr-auto pr-2",
        title: "text-sm font-medium",
        description: "text-xs font-medium text-muted-foreground",
        actionButton: "h-8 shrink-0 rounded-lg px-2 text-sm font-semibold text-primary transition-colors hover:bg-neutral-100 active:bg-neutral-200",
        cancelButton: "h-8 shrink-0 rounded-lg px-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-neutral-100 active:bg-neutral-200",
        closeButton: "absolute left-[unset] right-2 top-1/2 size-8 -translate-y-1/2 rounded-lg border-none p-0 transition-colors hover:bg-neutral-100 active:bg-neutral-200 [&>svg]:size-5"
      }
    },
    ...t
  }
), u = r;
export {
  a as Toaster,
  u as toast
};
