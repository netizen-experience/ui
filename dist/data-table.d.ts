import { ColumnDef } from '@tanstack/react-table';
import { JSX } from 'react/jsx-runtime';

export declare function DataTable<TData, TValue>({ columns, data, emptyText }: DataTableProps<TData, TValue>): JSX.Element;

declare interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    emptyText?: React.ReactNode;
}

export { }
