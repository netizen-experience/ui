import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const ButtonGroup: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>>;

export declare const ButtonGroupIconItem: ForwardRefExoticComponent<Omit<Omit<IconButtonProps & RefAttributes<HTMLButtonElement>, "ref">, "size"> & RefAttributes<HTMLButtonElement>>;

export declare const ButtonGroupItem: ForwardRefExoticComponent<Omit<Omit<ButtonProps & RefAttributes<HTMLButtonElement>, "ref">, "size"> & RefAttributes<HTMLButtonElement>>;

declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface IconButtonProps extends ButtonProps, VariantProps<typeof iconButtonVariants> {
}

declare const iconButtonVariants: (props?: VariantProps<typeof buttonVariants>) => string;

export { }
