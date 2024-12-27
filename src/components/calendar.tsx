import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { type ChevronProps, DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { iconButtonVariants } from "./icon-button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Chevron(props: ChevronProps) {
  return props.orientation === "left" ? <CaretLeft size={24} /> : <CaretRight size={24} />;
}

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 relative",
        month: "space-y-4 max-sm:[&&]:first-of-type:mt-0 sm:[&&]:first-of-type:ml-0",
        month_caption: "flex justify-center h-6 relative items-center",
        caption_label: "text-sm font-bold",
        nav: "absolute w-full z-10",
        button_previous: cn(iconButtonVariants({ variant: "ghost", size: "sm" }), "absolute left-0 size-6 p-0"),
        button_next: cn(iconButtonVariants({ variant: "ghost", size: "sm" }), "absolute right-0 size-6 p-0"),
        month_grid: "w-full border-separate border-spacing-x-0 border-spacing-y-1",
        weekday: "size-8 p-0 text-sm font-normal",
        day: "text-center size-8 p-0 text-sm select-none group/day",
        day_button: cn(iconButtonVariants({ variant: "ghost", size: "sm" }), "font-normal"),
        selected:
          "bg-primary text-primary-foreground rounded-lg [&>button]:bg-primary hover:[&>button]:bg-primary-hover active:[&>button]:bg-primary-active",
        today: "text-primary font-bold [&>button]:font-bold",
        outside: "text-muted-foreground opacity-50",
        disabled: "text-muted-foreground opacity-50 hover:bg-transparent",
        range_middle:
          "aria-selected:bg-primary-background aria-selected:text-primary rounded-none [&>button]:bg-primary-background hover:[&>button]:bg-primary-background active:[&>button]:bg-primary-background first:rounded-l-lg last:rounded-r-lg",
        range_start: "rounded-none rounded-l-lg last:rounded-lg aria-selected:bg-primary-background",
        range_end: "rounded-none rounded-r-lg first:rounded-lg aria-selected:bg-primary-background",
        hidden: "invisible",
        ...classNames,
      }}
      components={{ Chevron }}
      formatters={{ formatWeekdayName: (date) => ["S", "M", "T", "W", "T", "F", "S"][date.getDay()] }}
      {...props}
    />
  );
}

export { Calendar };

// @TODO: better props with generics based on `mode`
// @TODO: add 4px gap between each cells (currently using 14px font size as workaround to avoid looking to cramped)
// @TODO: add left/right rounded corners to range start/end
