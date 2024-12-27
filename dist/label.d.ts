import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Label: ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp | undefined) => string> & RefAttributes<HTMLLabelElement>>;

export declare const labelVariants: (props?: ClassProp | undefined) => string;

export { }
