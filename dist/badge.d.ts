import { ClassProp } from 'class-variance-authority/types';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { VariantProps } from 'class-variance-authority';

export declare function Badge({ children, className, size, variant, ...props }: BadgeProps): JSX_2.Element;

export declare interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: ({
    variant?: "danger" | "emerald" | "pizazz" | "violet" | "picton" | "gray" | "accent" | "white" | "info" | "success" | "warning" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
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
