import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export declare const Tooltip: FC<TooltipPrimitive.TooltipProps>;

export declare const TooltipContent: ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const TooltipPortal: FC<TooltipPrimitive.TooltipPortalProps>;

export declare const TooltipProvider: FC<TooltipPrimitive.TooltipProviderProps>;

export declare const TooltipTrigger: ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & RefAttributes<HTMLButtonElement>>;

export { }
