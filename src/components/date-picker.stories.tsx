import type { Meta, StoryObj } from "@storybook/react";
import { format } from "date-fns";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DatePicker } from "./date-picker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Date Picker",
  component: DatePicker,
  argTypes: {
    mode: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
    disabledDays: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Single: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>();
    return (
      <div className="max-w-xs">
        <DatePicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          value={selected ? format(selected, "dd/MM/yyyy") : "Select date"}
        />
      </div>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date[]>([]);
    const selectedDays =
      selected.length === 0
        ? null
        : selected.length <= 2
          ? selected.map((day) => format(day, "dd/MM/yyyy")).join(", ")
          : `${selected.length} days selected`;
    return (
      <div className="max-w-xs">
        <DatePicker
          mode="multiple"
          selected={selected}
          onSelect={(days) => days && setSelected(days)}
          value={selectedDays ?? "Select multiple dates"}
        />
      </div>
    );
  },
};

export const Range: Story = {
  render: () => {
    const [selected, setSelected] = useState<DateRange>();
    return (
      <div className="max-w-xs">
        <DatePicker
          mode="range"
          selected={selected}
          onSelect={setSelected}
          value={
            selected?.from && selected?.to
              ? `${format(selected.from, "dd/MM/yyyy")} - ${format(selected.to, "dd/MM/yyyy")}`
              : "Select range"
          }
        />
      </div>
    );
  },
};

export const MultipleMonths: Story = {
  render: () => {
    const [selected, setSelected] = useState<DateRange>();
    return (
      <div className="max-w-xs">
        <DatePicker
          mode="range"
          numberOfMonths={2}
          selected={selected}
          onSelect={setSelected}
          value={
            selected?.from && selected?.to
              ? `${format(selected.from, "dd/MM/yyyy")} - ${format(selected.to, "dd/MM/yyyy")}`
              : "Select range"
          }
        />
      </div>
    );
  },
};
