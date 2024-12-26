import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const validateTime = (time: string) => {
  if (time.length !== 4 || !/^\d{4}$/.test(time)) {
    throw new Error('Invalid time string format. Expected "HHmm".');
  }

  const hours = parseInt(time.substring(0, 2), 10);
  const minutes = parseInt(time.substring(2, 4), 10);

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    throw new Error("Invalid time value. Hours must be between 00-23 and minutes between 00-59.");
  }
};

const getOptions = (startTime: string, endTime: string, interval: number) => {
  const parseTime = (time: string) => {
    const hours = parseInt(time.substring(0, 2), 10);
    const minutes = parseInt(time.substring(2, 4), 10);

    // Convert to minutes since midnight
    return hours * 60 + minutes;
  };

  const formatTime = (timeinMinutes: number) => {
    const hours = Math.floor(timeinMinutes / 60);
    const minutes = timeinMinutes % 60;

    const period = hours >= 12 ? "PM" : "AM";
    // Convert 0 to 12 for 12 AM and 12 PM
    const hoursIn12 = hours % 12 || 12;

    const label = `${hoursIn12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}${period.toLowerCase()}`;
    const value: TimePickerValue = {
      hours,
      minutes,
      hoursAndMinutes: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`,
    };

    return {
      label,
      value,
    };
  };

  // Get start and end time in minutes
  const startMinutes = parseTime(startTime);
  const endMinutes = parseTime(endTime);

  if (startMinutes > endMinutes) {
    throw new Error("endTime must be after startTime");
  }

  return Array.from({ length: Math.floor((endMinutes - startMinutes) / interval) + 1 }, (_, index) => {
    const option = startMinutes + index * interval;

    return formatTime(option);
  });
};

export interface TimePickerValue {
  hours: number;
  minutes: number;
  hoursAndMinutes: string;
}

export interface TimePickerProps {
  /** Format: `HHmm` */
  startTime: string;
  /** Format: `HHmm` */
  endTime: string;
  interval: number;
  onSelect: (time: TimePickerValue) => void;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  notFoundMessage?: string;
}

const TimePicker = ({
  className,
  defaultValue,
  endTime,
  interval,
  notFoundMessage = "Time not found",
  onSelect,
  placeholder = "Select time",
  searchPlaceholder = "Search time...",
  startTime,
}: TimePickerProps) => {
  validateTime(startTime);
  validateTime(endTime);

  if (interval <= 0 || !Number.isInteger(interval)) {
    throw new Error("Invalid interval. Interval must be an integer and more than 0");
  }

  const times = getOptions(startTime, endTime, interval);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn("min-w-[248px] justify-between", className)}
        >
          <span className="font-medium">
            {value && times.length > 0
              ? times.find((time) => time.value.hoursAndMinutes === value)?.label
              : placeholder}
          </span>
          <CaretDown className="ml-2 size-4 shrink-0 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] overflow-hidden p-0">
        <Command
          filter={(value, search) => {
            if (value.includes(search)) return 1;
            return 0;
          }}
        >
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{notFoundMessage}</CommandEmpty>
            <CommandGroup>
              {times.map((time) => (
                <CommandItem
                  key={time.value.hoursAndMinutes}
                  value={time.label}
                  onSelect={(currentLabel) => {
                    const time = times.find((time) => time.label === currentLabel);
                    if (time && time.value.hoursAndMinutes !== value) {
                      setValue(time.value.hoursAndMinutes);
                      onSelect(time.value);
                    }
                    setOpen(false);
                  }}
                >
                  {time.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { TimePicker };
