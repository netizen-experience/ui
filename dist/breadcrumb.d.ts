import { AnchorHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LiHTMLAttributes } from 'react';
import { OlHTMLAttributes } from 'react';
import { RefAttributes } from 'react';

export declare const Breadcrumb: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
separator?: React.ReactNode;
} & RefAttributes<HTMLElement>>;

export declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): JSX_2.Element;
    displayName: string;
};

export declare const BreadcrumbItem: ForwardRefExoticComponent<Omit<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & RefAttributes<HTMLLIElement>>;

export declare const BreadcrumbLink: ForwardRefExoticComponent<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
asChild?: boolean;
} & RefAttributes<HTMLAnchorElement>>;

export declare const BreadcrumbList: ForwardRefExoticComponent<Omit<DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & RefAttributes<HTMLOListElement>>;

export declare const BreadcrumbPage: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & RefAttributes<HTMLSpanElement>>;

export declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"li">): JSX_2.Element;
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
