import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { Icon } from '@phosphor-icons/react';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';

export declare const DropdownMenu: FC<DropdownMenuPrimitive.DropdownMenuProps>;

export declare const DropdownMenuCheckboxItem: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuContent: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuGroup: ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuItem: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & RefAttributes<HTMLDivElement>, "ref"> & {
inset?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuItemIcon: {
    ({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & {
        children: React.ReactElement<Icon>;
    }): JSX.Element;
    displayName: string;
};

export declare const DropdownMenuLabel: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & RefAttributes<HTMLDivElement>, "ref"> & {
inset?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuPortal: FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;

export declare const DropdownMenuRadioGroup: ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuRadioItem: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuSeparator: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX.Element;
    displayName: string;
};

export declare const DropdownMenuSub: FC<DropdownMenuPrimitive.DropdownMenuSubProps>;

export declare const DropdownMenuSubContent: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuSubTrigger: ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & RefAttributes<HTMLDivElement>, "ref"> & {
inset?: boolean;
} & RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuTrigger: ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & RefAttributes<HTMLButtonElement>>;

export { }
