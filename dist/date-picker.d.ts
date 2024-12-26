import { DayPicker } from 'react-day-picker';
import { JSX as JSX_2 } from 'react/jsx-runtime';

declare type CalendarProps = React.ComponentProps<typeof DayPicker>;

export declare function DatePicker({ disabled, disabledDays, value, ...props }: DatePickerProps): JSX_2.Element;

export declare namespace DatePicker {
    var displayName: string;
}

export declare type DatePickerProps = Exclude<CalendarProps, "disabled"> & {
    disabledDays?: CalendarProps["disabled"];
    disabled?: boolean;
    value?: string;
};

export { }


declare namespace Focusable {
    var displayName: string;
}


declare namespace DatePicker {
    var displayName: string;
}


declare namespace Calendar {
    var displayName: string;
}
