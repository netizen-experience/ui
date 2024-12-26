import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: (props) => {
    const [selected, setSelected] = useState<number[]>([]);
    const projects = [
      {
        name: "Economic Well-being Survey",
        type: "Recruitment",
        status: "Active",
      },
      {
        name: "Mobile Banking App Accessibility Study",
        type: "Moderated Test",
        status: "Active",
      },
      {
        name: "E-commerce Checkout Process Optimization",
        type: "Moderated Test",
        status: "Inactive",
      },
    ];

    return (
      <Table {...props}>
        <TableHeader>
          <TableRow>
            <TableHead className="flex w-12 items-center">
              <Checkbox
                checked={selected.length ? (selected.length === projects.length ? true : "indeterminate") : false}
                onCheckedChange={(checked) => {
                  if (checked) setSelected([0, 1, 2]);
                  else setSelected([]);
                }}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="w-[100px] text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((invoice, index) => (
            <TableRow key={invoice.name}>
              <TableCell className="flex">
                <Checkbox
                  checked={selected.includes(index)}
                  onCheckedChange={(checked) => {
                    if (checked) setSelected((prev) => [...prev, index]);
                    else setSelected((prev) => prev.filter((s) => s !== index));
                  }}
                />
              </TableCell>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.type}</TableCell>
              <TableCell className="text-center">{invoice.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
