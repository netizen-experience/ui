import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const TimePicker: ({ className, defaultValue, endTime, interval, notFoundMessage, onSelect, placeholder, searchPlaceholder, startTime, }: TimePickerProps) => JSX_2.Element;

export declare interface TimePickerProps {
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

export declare interface TimePickerValue {
    hours: number;
    minutes: number;
    hoursAndMinutes: string;
}

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
