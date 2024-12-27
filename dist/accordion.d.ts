import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Accordion: ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const AccordionItem: ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const AccordionTrigger: ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export { }
