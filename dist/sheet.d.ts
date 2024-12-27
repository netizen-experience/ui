import { ClassProp } from 'class-variance-authority/types';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { VariantProps } from 'class-variance-authority';

export declare const Sheet: FC<SheetPrimitive.DialogProps>;

export declare const SheetClose: ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & RefAttributes<HTMLButtonElement>>;

export declare const SheetContent: ForwardRefExoticComponent<SheetContentProps & RefAttributes<HTMLDivElement>>;

export declare const SheetContentBarebones: ForwardRefExoticComponent<SheetPrimitive.DialogContentProps & RefAttributes<HTMLDivElement>>;

declare interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
    hideClose?: boolean;
}

export declare const SheetDescription: ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & RefAttributes<HTMLParagraphElement>, "ref"> & RefAttributes<HTMLParagraphElement>>;

export declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};

export declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};

export declare const SheetOverlay: ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SheetPortal: FC<SheetPrimitive.DialogPortalProps>;

export declare const SheetTitle: ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & RefAttributes<HTMLHeadingElement>, "ref"> & RefAttributes<HTMLHeadingElement>>;

export declare const SheetTrigger: ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & ClassProp) | undefined) => string;

export { }
