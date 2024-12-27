import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { useReactTable as g, getCoreRowModel as h, flexRender as n } from "@tanstack/react-table";
import { Table as b, TableHeader as u, TableRow as d, TableHead as p, TableBody as T, TableCell as c } from "./table.js";
function C({ columns: r, data: i, emptyText: s = "No results." }) {
  var a;
  const o = g({
    data: i,
    columns: r,
    getCoreRowModel: h()
  });
  return /* @__PURE__ */ m(b, { children: [
    /* @__PURE__ */ l(u, { children: o.getHeaderGroups().map((t) => /* @__PURE__ */ l(d, { className: "rounded-t-md", children: t.headers.map((e) => /* @__PURE__ */ l(p, { children: e.isPlaceholder ? null : n(e.column.columnDef.header, e.getContext()) }, e.id)) }, t.id)) }),
    /* @__PURE__ */ l(T, { children: (a = o.getRowModel().rows) != null && a.length ? o.getRowModel().rows.map((t) => /* @__PURE__ */ l(d, { "data-state": t.getIsSelected() && "selected", children: t.getVisibleCells().map((e) => /* @__PURE__ */ l(c, { children: n(e.column.columnDef.cell, e.getContext()) }, e.id)) }, t.id)) : /* @__PURE__ */ l(d, { children: /* @__PURE__ */ l(c, { colSpan: r.length, className: "h-24 text-center", children: s }) }) })
  ] });
}
export {
  C as DataTable
};
