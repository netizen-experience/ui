import { jsx as r } from "react/jsx-runtime";
import { Slot as n } from "@radix-ui/react-slot";
import { cn as s } from "./utils.js";
function c({ className: o, ...i }) {
  return /* @__PURE__ */ r(
    n,
    {
      className: s(
        "ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        o
      ),
      tabIndex: 0,
      ...i
    }
  );
}
export {
  c as Focusable
};
