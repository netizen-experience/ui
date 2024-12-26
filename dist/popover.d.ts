import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { RefAttributes } from 'react';

export declare const Popover: FC<PopoverPrimitive.PopoverProps>;

export declare const PopoverClose: ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & RefAttributes<HTMLButtonElement>>;

export declare const PopoverContent: ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const PopoverTrigger: ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & RefAttributes<HTMLButtonElement>>;

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
