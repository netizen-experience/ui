import { ButtonHTMLAttributes } from 'react';
import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { Icon } from '@phosphor-icons/react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Chip: ForwardRefExoticComponent<ChipProps & RefAttributes<HTMLDivElement>>;

export declare const ChipAction: ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
children: React.ReactElement<Icon>;
} & RefAttributes<HTMLButtonElement>>;

export declare interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
    selected?: boolean;
    disabled?: boolean;
}

export declare const chipVariants: (props?: ({
    variant?: "input" | "emerald" | "pizazz" | "violet" | "picton" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

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
