import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from 'react';
import { Icon } from '@phosphor-icons/react';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { VariantProps } from 'class-variance-authority';

export declare const Tabs: ForwardRefExoticComponent<TabsPrimitive.TabsProps & RefAttributes<HTMLDivElement>>;

export declare const TabsContent: ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const TabsList: ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
variant?: "line" | "segment" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>>;

export declare const TabsTrigger: ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & RefAttributes<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const TabsTriggerIcon: {
    ({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & {
        children: React.ReactElement<Icon>;
    }): JSX.Element;
    displayName: string;
};

export { }
