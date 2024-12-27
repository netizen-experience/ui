import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { Icon } from '@phosphor-icons/react';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export declare const Select: FC<SelectPrimitive.SelectProps>;

export declare const SelectContent: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SelectGroup: ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & RefAttributes<HTMLDivElement>>;

export declare const SelectItem: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SelectLabel: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SelectLeadingIcon: {
    ({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & {
        children: React.ReactElement<Icon>;
    }): JSX.Element;
    displayName: string;
};

export declare const SelectScrollDownButton: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SelectScrollUpButton: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SelectSeparator: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const SelectTrigger: ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const SelectValue: ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & RefAttributes<HTMLSpanElement>>;

export { }
