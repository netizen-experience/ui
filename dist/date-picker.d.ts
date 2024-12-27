import { DayPicker } from 'react-day-picker';
import { JSX } from 'react/jsx-runtime';

declare type CalendarProps = React.ComponentProps<typeof DayPicker>;

export declare function DatePicker({ disabled, disabledDays, value, ...props }: DatePickerProps): JSX.Element;

export declare type DatePickerProps = Exclude<CalendarProps, "disabled"> & {
    disabledDays?: CalendarProps["disabled"];
    disabled?: boolean;
    value?: string;
};

export { }
