import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { VariantProps } from 'class-variance-authority';

export declare const ToggleGroup: ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
variant?: "default" | "outline" | null | undefined;
size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string>) & RefAttributes<HTMLDivElement>>;

export declare const ToggleGroupItem: ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
variant?: "default" | "outline" | null | undefined;
size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLButtonElement>>;

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
