import { ClassProp } from 'class-variance-authority/types';
import { JSX } from 'react/jsx-runtime';
import { VariantProps } from 'class-variance-authority';

export declare function NotificationBadge({ className, size, variant, ...props }: NotificationBadgeProps): JSX.Element;

export declare interface NotificationBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationBadgeVariants> {
}

export declare const notificationBadgeVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
    variant?: "default" | "dot" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
