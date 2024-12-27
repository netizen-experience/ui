import { ClassProp } from 'class-variance-authority/types';
import { JSX } from 'react/jsx-runtime';

export declare function Blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>): JSX.Element;

export declare function Heading({ className, level, ...props }: HeadingProps): JSX.Element;

export declare interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4;
}

export declare const headingVariants: (props?: ({
    level?: 1 | 2 | 3 | 4 | null | undefined;
} & ClassProp) | undefined) => string;

export declare function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>): JSX.Element;

export declare function Kbd({ className, ...props }: React.HTMLAttributes<HTMLElement>): JSX.Element;

export declare function Large({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export declare function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export declare function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>): JSX.Element;

export declare function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export declare function NumberedList({ className, ...props }: React.HTMLAttributes<HTMLOListElement>): JSX.Element;

export declare function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export declare function Small({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;

export { }
