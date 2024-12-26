import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const IconButton: ForwardRefExoticComponent<IconButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends ButtonProps, VariantProps<typeof iconButtonVariants> {
}

export declare const iconButtonVariants: (props?: VariantProps<typeof buttonVariants>) => string;

export { }


declare namespace Focusable {
    var displayName: string;
}


declare namespace DatePicker {
    var displayName: string;
}


declare namespace Calendar {
    var displayName: string;
}
