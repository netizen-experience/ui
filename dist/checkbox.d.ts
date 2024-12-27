import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import * as React_2 from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Checkbox: React_2.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "sm" | "md" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLButtonElement>>;

export { }
