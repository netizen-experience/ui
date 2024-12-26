import { ClassProp } from 'class-variance-authority/types';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { VariantProps } from 'class-variance-authority';

export declare function NotificationBadge({ className, size, variant, ...props }: NotificationBadgeProps): JSX_2.Element;

export declare interface NotificationBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationBadgeVariants> {
}

export declare const notificationBadgeVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
    variant?: "default" | "dot" | null | undefined;
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
