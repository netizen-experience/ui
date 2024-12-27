import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export declare const ScrollArea: ForwardRefExoticComponent<ScrollAreaProps & RefAttributes<HTMLDivElement>>;

declare interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
    viewportRef?: React.RefObject<HTMLDivElement>;
}

export declare const ScrollBar: ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export { }
