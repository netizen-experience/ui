import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { RefAttributes } from 'react';

export declare const HoverCard: FC<HoverCardPrimitive.HoverCardProps>;

export declare const HoverCardContent: ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const HoverCardTrigger: ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & RefAttributes<HTMLAnchorElement>>;

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
