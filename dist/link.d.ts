import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;

export declare interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    newTab?: boolean;
}

export declare const linkVariants: (props?: ClassProp | undefined) => string;

export { }
