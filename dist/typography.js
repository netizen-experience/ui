import { jsx as n } from "react/jsx-runtime";
import { cva as a } from "class-variance-authority";
import { cn as r } from "./utils.js";
const i = a("scroll-m-20 text-balance", {
  variants: {
    level: {
      1: "text-3xl font-extrabold tracking-tight",
      2: "text-2xl font-semibold tracking-tight",
      3: "text-xl font-semibold tracking-tight",
      4: "text-lg font-semibold tracking-tight"
    }
  }
});
function u({ className: e, level: t, ...o }) {
  const m = `h${t}`;
  return /* @__PURE__ */ n(m, { className: r(i({ level: t }), e), ...o });
}
function d({ className: e, ...t }) {
  return /* @__PURE__ */ n("p", { className: r("text-pretty [&:not(:first-child)]:mt-4", e), ...t });
}
function x({ className: e, ...t }) {
  return /* @__PURE__ */ n("blockquote", { className: r("mt-6 border-l-2 pl-6 italic", e), ...t });
}
function f({ className: e, ...t }) {
  return /* @__PURE__ */ n("ul", { className: r("my-6 ml-6 list-disc [&>li]:mt-2", e), ...t });
}
function p({ className: e, ...t }) {
  return /* @__PURE__ */ n("ol", { className: r("my-6 ml-6 list-decimal [&>li]:mt-2", e), ...t });
}
function g({ className: e, ...t }) {
  return /* @__PURE__ */ n("code", { className: r("rounded-md bg-muted px-[0.3rem] py-[0.1rem] font-mono text-sm", e), ...t });
}
function b({ className: e, ...t }) {
  return /* @__PURE__ */ n("kbd", { className: r("rounded-md border bg-neutral-100 px-1 text-xs", e), ...t });
}
function N({ className: e, ...t }) {
  return /* @__PURE__ */ n("p", { className: r("text-pretty text-xl text-muted-foreground", e), ...t });
}
function h({ className: e, ...t }) {
  return /* @__PURE__ */ n("p", { className: r("text-pretty text-lg font-semibold", e), ...t });
}
function y({ className: e, ...t }) {
  return /* @__PURE__ */ n("p", { className: r("text-pretty text-sm font-medium", e), ...t });
}
function k({ className: e, ...t }) {
  return /* @__PURE__ */ n("p", { className: r("text-pretty text-sm text-muted-foreground", e), ...t });
}
export {
  x as Blockquote,
  u as Heading,
  g as InlineCode,
  b as Kbd,
  h as Large,
  N as Lead,
  f as List,
  k as Muted,
  p as NumberedList,
  d as Paragraph,
  y as Small,
  i as headingVariants
};
