import { Action } from 'sonner';
import { ExternalToast } from 'sonner';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { ToastClassnames } from 'sonner';
import { Toaster as Toaster_2 } from 'sonner';
import { ToastT } from 'sonner';
import { ToastToDismiss } from 'sonner';

export { ExternalToast }

export declare const toast: ((message: ReactNode | (() => React.ReactNode), data?: ExternalToast) => string | number) & {
    success: (message: (ReactNode | (() => React.ReactNode)) | React.ReactNode, data?: ExternalToast) => string | number;
    info: (message: (ReactNode | (() => React.ReactNode)) | React.ReactNode, data?: ExternalToast) => string | number;
    warning: (message: (ReactNode | (() => React.ReactNode)) | React.ReactNode, data?: ExternalToast) => string | number;
    error: (message: (ReactNode | (() => React.ReactNode)) | React.ReactNode, data?: ExternalToast) => string | number;
    custom: (jsx: (id: number | string) => React.ReactElement, data?: ExternalToast) => string | number;
    message: (message: (ReactNode | (() => React.ReactNode)) | React.ReactNode, data?: ExternalToast) => string | number;
    promise: <ToastData>(promise: Promise<ToastData> | (() => Promise<ToastData>), data?: {
        className?: string | undefined;
        id?: (number | string) | undefined;
        style?: React.CSSProperties | undefined;
        action?: Action | React.ReactNode;
        onDismiss?: ((toast: ToastT) => void) | undefined;
        invert?: boolean | undefined;
        position?: ("top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center") | undefined;
        richColors?: boolean | undefined;
        duration?: number | undefined;
        closeButton?: boolean | undefined;
        unstyled?: boolean | undefined;
        icon?: React.ReactNode;
        dismissible?: boolean | undefined;
        cancel?: Action | React.ReactNode;
        onAutoClose?: ((toast: ToastT) => void) | undefined;
        cancelButtonStyle?: React.CSSProperties | undefined;
        actionButtonStyle?: React.CSSProperties | undefined;
        classNames?: ToastClassnames | undefined;
        descriptionClassName?: string | undefined;
    } & {
        loading?: string | React.ReactNode;
        success?: ReactNode | ((data: ToastData) => React.ReactNode | string | Promise<React.ReactNode | string>);
        error?: ReactNode | ((data: any) => React.ReactNode | string | Promise<React.ReactNode | string>);
        description?: ReactNode | ((data: any) => React.ReactNode | string | Promise<React.ReactNode | string>);
        finally?: () => void | Promise<void>;
    }) => (string & {
        unwrap: () => Promise<ToastData>;
    }) | (number & {
        unwrap: () => Promise<ToastData>;
    }) | {
        unwrap: () => Promise<ToastData>;
    };
    dismiss: (id?: number | string) => string | number;
    loading: (message: (ReactNode | (() => React.ReactNode)) | React.ReactNode, data?: ExternalToast) => string | number;
} & {
    getHistory: () => (ToastT | ToastToDismiss)[];
};

export declare const Toaster: ({ ...props }: ToasterProps) => JSX_2.Element;

declare type ToasterProps = React.ComponentProps<typeof Toaster_2>;

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
