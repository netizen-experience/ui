import { jsx as s } from "react/jsx-runtime";
import { Slot as e } from "@radix-ui/react-slot";
import { cn as r } from "./utils.js";
function n({ className: o, ...i }) {
  return /* @__PURE__ */ s(
    e,
    {
      className: r(
        "ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        o
      ),
      tabIndex: 0,
      ...i
    }
  );
}
n.displayName = "Focusable";
export {
  n as Focusable
};
