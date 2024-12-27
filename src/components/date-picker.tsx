"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./button";
import { Calendar, CalendarProps } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export type DatePickerProps = Exclude<CalendarProps, "disabled"> & {
  disabledDays?: CalendarProps["disabled"];
  disabled?: boolean;
  value?: string;
};

function DatePicker({ disabled, disabledDays, value, ...props }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" className="w-full justify-between" disabled={disabled}>
          <span className="font-medium">{value}</span>
          <CaretDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-6 shadow-sm">
        <Calendar autoFocus disabled={disabledDays} {...props} />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
