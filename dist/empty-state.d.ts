import { ClassAttributes } from 'react';
import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { Icon } from '@phosphor-icons/react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const EmptyState: ForwardRefExoticComponent<Omit<ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
variant?: "default" | "dashed" | null | undefined;
} & ClassProp) | undefined) => string> & {
as?: React.ElementType;
}, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const EmptyStateButton: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare const EmptyStateDescription: ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & RefAttributes<HTMLParagraphElement>>;

export declare const EmptyStateIcon: {
    ({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & {
        children: React.ReactElement<Icon>;
    }): JSX_2.Element;
    displayName: string;
};

export declare const EmptyStateTitle: ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & RefAttributes<HTMLParagraphElement>>;

export declare const emptyStateVariants: (props?: ({
    variant?: "default" | "dashed" | null | undefined;
} & ClassProp) | undefined) => string;

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
