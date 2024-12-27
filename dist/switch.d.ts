import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { VariantProps } from 'class-variance-authority';

export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLButtonElement>>;

export declare interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, VariantProps<typeof switchVariants> {
}

declare const switchVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
