import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
