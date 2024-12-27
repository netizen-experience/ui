import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { VariantProps } from 'class-variance-authority';

export declare const Toggle: ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
variant?: "default" | "outline" | null | undefined;
size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLButtonElement>>;

export declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
