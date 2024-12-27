import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { Icon } from '@phosphor-icons/react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Alert: ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>>;

export declare const AlertAction: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare const AlertDescription: ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & RefAttributes<HTMLParagraphElement>>;

export declare interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    icon?: Icon;
    hideClose?: boolean;
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
}

export declare const AlertTitle: ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & RefAttributes<HTMLParagraphElement>>;

declare const alertVariants: (props?: ({
    variant?: "danger" | "info" | "success" | "warning" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
