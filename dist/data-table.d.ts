import { ColumnDef } from '@tanstack/react-table';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function DataTable<TData, TValue>({ columns, data, emptyText }: DataTableProps<TData, TValue>): JSX_2.Element;

declare interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    emptyText?: React.ReactNode;
}

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
