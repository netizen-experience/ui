import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Avatar: ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;

export declare const AvatarFallback: ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & RefAttributes<HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;

export declare const AvatarImage: ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & RefAttributes<HTMLImageElement>, "ref"> & RefAttributes<HTMLImageElement>>;

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
