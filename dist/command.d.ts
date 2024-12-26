import { DetailedHTMLProps } from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';

export declare const Command: ForwardRefExoticComponent<Omit<{
children?: React.ReactNode;
} & Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & {
label?: string;
shouldFilter?: boolean;
filter?: (value: string, search: string, keywords?: string[]) => number;
defaultValue?: string;
value?: string;
onValueChange?: (value: string) => void;
loop?: boolean;
disablePointerSelection?: boolean;
vimBindings?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandDialog: {
    ({ children, ...props }: CommandDialogProps): JSX_2.Element;
    displayName: string;
};

declare type CommandDialogProps = DialogProps;

export declare const CommandEmpty: ForwardRefExoticComponent<Omit<{
children?: React.ReactNode;
} & Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandGroup: ForwardRefExoticComponent<Omit<{
children?: React.ReactNode;
} & Omit<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild">, "heading" | "value"> & {
heading?: React.ReactNode;
value?: string;
forceMount?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandInput: ForwardRefExoticComponent<Omit<Omit<Pick<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<HTMLInputElement>> & {
ref?: React.Ref<HTMLInputElement>;
} & {
asChild?: boolean;
}, "key" | "asChild" | keyof InputHTMLAttributes<HTMLInputElement>>, "onChange" | "type" | "value"> & {
value?: string;
onValueChange?: (search: string) => void;
} & RefAttributes<HTMLInputElement>, "ref"> & RefAttributes<HTMLInputElement>>;

export declare const CommandItem: ForwardRefExoticComponent<Omit<{
children?: React.ReactNode;
} & Omit<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild">, "onSelect" | "disabled" | "value"> & {
disabled?: boolean;
onSelect?: (value: string) => void;
value?: string;
keywords?: string[];
forceMount?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandList: ForwardRefExoticComponent<Omit<{
children?: React.ReactNode;
} & Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & {
label?: string;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandLoading: ForwardRefExoticComponent<Omit<{
children?: React.ReactNode;
} & Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & {
progress?: number;
label?: string;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandSeparator: ForwardRefExoticComponent<Omit<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
ref?: React.Ref<HTMLDivElement>;
} & {
asChild?: boolean;
}, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & {
alwaysRender?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;
    displayName: string;
};

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
