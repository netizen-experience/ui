import { ClassProp } from 'class-variance-authority/types';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function Blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>): JSX_2.Element;

export declare function Heading({ className, level, ...props }: HeadingProps): JSX_2.Element;

export declare interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4;
}

export declare const headingVariants: (props?: ({
    level?: 1 | 2 | 3 | 4 | null | undefined;
} & ClassProp) | undefined) => string;

export declare function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>): JSX_2.Element;

export declare function Kbd({ className, ...props }: React.HTMLAttributes<HTMLElement>): JSX_2.Element;

export declare function Large({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

export declare function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

export declare function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>): JSX_2.Element;

export declare function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

export declare function NumberedList({ className, ...props }: React.HTMLAttributes<HTMLOListElement>): JSX_2.Element;

export declare function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

export declare function Small({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

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
