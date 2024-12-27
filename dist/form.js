import { jsx as s } from "react/jsx-runtime";
import { Slot as p } from "@radix-ui/react-slot";
import { createContext as f, forwardRef as i, useId as I, useContext as l } from "react";
import { FormProvider as x, Controller as g, useFormContext as C } from "react-hook-form";
import { cn as d } from "./utils.js";
import { Label as y } from "./label.js";
const j = x, F = f({}), E = ({
  ...e
}) => /* @__PURE__ */ s(F.Provider, { value: { name: e.name }, children: /* @__PURE__ */ s(g, { ...e }) }), a = () => {
  const e = l(F), o = l(u), { formState: r, getFieldState: t } = C(), m = t(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: n } = o;
  return {
    id: n,
    name: e.name,
    formItemId: `${n}-form-item`,
    formDescriptionId: `${n}-form-item-description`,
    formMessageId: `${n}-form-item-message`,
    ...m
  };
}, u = f({}), N = i(({ className: e, ...o }, r) => {
  const t = I();
  return /* @__PURE__ */ s(u.Provider, { value: { id: t }, children: /* @__PURE__ */ s("div", { ref: r, className: d("space-y-1", e), ...o }) });
});
N.displayName = "FormItem";
const b = i((e, o) => {
  const { formItemId: r } = a();
  return /* @__PURE__ */ s(y, { ref: o, htmlFor: r, ...e });
});
b.displayName = "FormLabel";
const h = i(
  ({ ...e }, o) => {
    const { error: r, formDescriptionId: t, formItemId: m, formMessageId: n } = a();
    return /* @__PURE__ */ s(
      p,
      {
        ref: o,
        id: m,
        "aria-describedby": r ? `${t} ${n}` : `${t}`,
        "aria-invalid": !!r,
        ...e
      }
    );
  }
);
h.displayName = "FormControl";
const v = i(
  ({ className: e, ...o }, r) => {
    const { error: t, formDescriptionId: m } = a();
    return t ? null : /* @__PURE__ */ s("p", { ref: r, id: m, className: d("text-xs text-neutral-500", e), ...o });
  }
);
v.displayName = "FormDescription";
const $ = i(
  ({ children: e, className: o, ...r }, t) => {
    const { error: m, formMessageId: n } = a(), c = m ? String(m == null ? void 0 : m.message) : e;
    return c ? /* @__PURE__ */ s("p", { ref: t, id: n, className: d("text-xs text-danger-foreground", o), ...r, children: c }) : null;
  }
);
$.displayName = "FormMessage";
export {
  j as Form,
  h as FormControl,
  v as FormDescription,
  E as FormField,
  N as FormItem,
  b as FormLabel,
  $ as FormMessage,
  a as useFormField
};
