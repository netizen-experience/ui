import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker, TimePickerProps } from "./time-picker";

const meta: Meta = {
  title: "Components/Time Picker",
  component: TimePicker,
  argTypes: {
    startTime: {
      control: "text",
    },
    endTime: {
      control: "text",
    },
    interval: {
      control: {
        type: "number",
        min: 0,
        max: 60,
        step: 5,
      },
    },
  },
  args: {
    startTime: "0900",
    endTime: "1800",
    interval: 15,
  },
};

export default meta;

export const Basic: StoryObj<TimePickerProps> = {
  args: {
    startTime: "0900",
    endTime: "1800",
    interval: 15,
    placeholder: "Select time",
    searchPlaceholder: "Search time...",
    notFoundMessage: "Time not found.",
  },
  render: ({ endTime, interval, notFoundMessage, placeholder, searchPlaceholder, startTime }) => (
    <TimePicker
      onSelect={() => {
        /* none */
      }}
      startTime={startTime}
      endTime={endTime}
      interval={interval}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      notFoundMessage={notFoundMessage}
    />
  ),
};
