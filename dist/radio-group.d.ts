import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const RadioGroup: ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
size?: "sm" | "md" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>>;

export declare const RadioGroupItem: ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
size?: "sm" | "md" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLButtonElement>>;

export { }
