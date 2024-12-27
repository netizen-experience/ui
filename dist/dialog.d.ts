import * as DialogPrimitive from '@radix-ui/react-dialog';
import { JSX } from 'react/jsx-runtime';
import * as React_2 from 'react';

export declare const Dialog: React_2.FC<DialogPrimitive.DialogProps>;

export declare const DialogClose: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DialogContent: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogDescription: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const DialogFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};

export declare const DialogHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};

export declare const DialogOverlay: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogPortal: React_2.FC<DialogPrimitive.DialogPortalProps>;

export declare const DialogTitle: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const DialogTrigger: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export { }
