import { AvatarProps } from '@radix-ui/react-avatar';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { RefAttributes } from 'react';

export declare const AvatarGroup: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
overlapDirection?: "ltr" | "rtl";
} & RefAttributes<HTMLDivElement>>;

export declare const AvatarGroupItem: ForwardRefExoticComponent<Omit<Omit<AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;

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
