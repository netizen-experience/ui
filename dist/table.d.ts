import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { RefAttributes } from 'react';
import { TdHTMLAttributes } from 'react';
import { ThHTMLAttributes } from 'react';

export declare const Table: ForwardRefExoticComponent<HTMLAttributes<HTMLTableElement> & {
wrapperClassName?: string;
} & RefAttributes<HTMLTableElement>>;

export declare const TableBody: ForwardRefExoticComponent<HTMLAttributes<HTMLTableSectionElement> & RefAttributes<HTMLTableSectionElement>>;

export declare const TableCaption: ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>>;

export declare const TableCell: ForwardRefExoticComponent<TdHTMLAttributes<HTMLTableDataCellElement> & RefAttributes<HTMLTableDataCellElement>>;

export declare const TableFooter: ForwardRefExoticComponent<HTMLAttributes<HTMLTableSectionElement> & RefAttributes<HTMLTableSectionElement>>;

export declare const TableHead: ForwardRefExoticComponent<ThHTMLAttributes<HTMLTableHeaderCellElement> & RefAttributes<HTMLTableHeaderCellElement>>;

export declare const TableHeader: ForwardRefExoticComponent<HTMLAttributes<HTMLTableSectionElement> & RefAttributes<HTMLTableSectionElement>>;

export declare const TableRow: ForwardRefExoticComponent<HTMLAttributes<HTMLTableRowElement> & RefAttributes<HTMLTableRowElement>>;

export { }
