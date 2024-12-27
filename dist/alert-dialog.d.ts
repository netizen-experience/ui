import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ClassProp } from 'class-variance-authority/types';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const AlertDialog: FC<AlertDialogPrimitive.AlertDialogProps>;

export declare const AlertDialogAction: ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLButtonElement>>;

export declare const AlertDialogCancel: ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
variant?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLButtonElement>>;

export declare const AlertDialogContent: ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const AlertDialogDescription: ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & RefAttributes<HTMLParagraphElement>, "ref"> & RefAttributes<HTMLParagraphElement>>;

export declare const AlertDialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};

export declare const AlertDialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};

export declare const AlertDialogOverlay: ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const AlertDialogPortal: FC<AlertDialogPrimitive.AlertDialogPortalProps>;

export declare const AlertDialogTitle: ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & RefAttributes<HTMLHeadingElement>, "ref"> & RefAttributes<HTMLHeadingElement>>;

export declare const AlertDialogTrigger: ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & RefAttributes<HTMLButtonElement>>;

export { }
