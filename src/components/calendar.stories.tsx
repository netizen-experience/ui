import type { Meta, StoryObj } from "@storybook/react";
import { add } from "date-fns";
import { DayPickerMultipleProps, DayPickerRangeProps, DayPickerSingleProps } from "react-day-picker";
import { Calendar } from "./calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
};

export default meta;

export const Basic: StoryObj<typeof Calendar> = {
  render: (props) => (
    <div className="w-max">
      <Calendar {...props} />
    </div>
  ),
};

/*
 * Storybook will return UNIX timestamp for date controls, hence it is necessary
 * to perform conversion into the Date object
 * Ref: https://storybook.js.org/docs/react/essentials/controls#annotation
 */
export const SingleSelection: StoryObj<Omit<DayPickerSingleProps, "selected"> & { selected: number }> = {
  argTypes: {
    selected: { control: "date" },
  },
  args: {
    selected: add(Date.now(), { days: 2 }).getTime(),
  },
  render: ({ selected, ...props }) => (
    <div className="w-max">
      <Calendar {...props} mode="single" selected={new Date(selected)} />
    </div>
  ),
};

export const MultipleSelection: StoryObj<Omit<DayPickerMultipleProps, "selected"> & { selected: string[] }> = {
  argTypes: {
    selected: { control: "object" },
  },
  args: {
    selected: [
      add(Date.now(), { days: 3 }).toISOString(),
      add(Date.now(), { days: 6 }).toISOString(),
      add(Date.now(), { days: -1 }).toISOString(),
    ],
  },
  render: ({ selected, ...props }) => (
    <div className="w-max">
      <Calendar {...props} mode="multiple" selected={selected.map((date) => new Date(date))} />
    </div>
  ),
};

export const RangeSelection: StoryObj<Omit<DayPickerRangeProps, "selected"> & { from: number; to: number }> = {
  argTypes: {
    from: { control: "date" },
    to: { control: "date" },
  },
  args: {
    from: add(Date.now(), { days: 2 }).getTime(),
    to: add(Date.now(), { days: 6 }).getTime(),
  },
  render: ({ from, to, ...props }) => (
    <div className="w-max">
      <Calendar {...props} mode="range" selected={{ from: new Date(from), to: new Date(to) }} />
    </div>
  ),
};
