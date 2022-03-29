import { PropType } from 'vue';
import type ElTable from 'element-plus/lib/components/table';
import type { ElTableColumn } from 'element-plus/lib/components/table';
declare type ElTableType = InstanceType<typeof ElTable>;
declare type ElTableProps = ElTableType['$props'];
declare type UserElTableColumnProps = {
    slotName?: string;
    headerSlot?: string;
    render?: (...arg: any[]) => any;
    children?: ElTableColumnProps[];
};
export declare type ElTableColumnProps = (InstanceType<typeof ElTableColumn>['$props'] & UserElTableColumnProps)[];
export declare type ConditionalKeys<Base, Condition> = NonNullable<{
    [Key in keyof Base]: Key extends Condition ? Key : never;
}[keyof Base]>;
declare type eventKeyVal = {
    [key in keyof ElTableType]: key extends `on${infer stringA}` ? `on${stringA}` : never;
};
declare type EmitKeyMethod = ConditionalKeys<ElTableType, `on${string}`>;
declare type eventKey = NonNullable<eventKeyVal[keyof eventKeyVal]>;
declare type CamelEventKey<T extends string> = {
    [key in T]: key extends `on${infer stringA}-${infer stringB}` ? `on${stringA}${Capitalize<stringB>}` : key;
};
declare type eventJsx = CamelEventKey<CamelEventKey<EmitKeyMethod>[keyof CamelEventKey<EmitKeyMethod>]>;
declare type eventKeyName = eventJsx[keyof eventJsx];
declare type eventMethodProps = {
    [key in eventKeyName]: (...args: any[]) => any;
};
export declare const tableProps: {
    data: {
        type: PropType<Record<string, any>[]>;
        default: () => any[];
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: (Partial<{
            type: string;
            width: string | number;
            minWidth: string | number;
            sortOrders: ("ascending" | "descending")[];
            sortable: string | boolean;
            resizable: boolean;
            showTooltipWhenOverflow: boolean;
            showOverflowTooltip: boolean;
            reserveSelection: boolean;
            filterMultiple: boolean;
        }> & Omit<Readonly<{
            type?: unknown;
            label?: unknown;
            className?: unknown;
            labelClassName?: unknown;
            property?: unknown;
            prop?: unknown;
            width?: unknown;
            minWidth?: unknown;
            renderHeader?: unknown;
            sortable?: unknown;
            sortMethod?: unknown;
            sortBy?: unknown;
            resizable?: unknown;
            columnKey?: unknown;
            align?: unknown;
            headerAlign?: unknown;
            showTooltipWhenOverflow?: unknown;
            showOverflowTooltip?: unknown;
            fixed?: unknown;
            formatter?: unknown;
            selectable?: unknown;
            reserveSelection?: unknown;
            filterMethod?: unknown;
            filteredValue?: unknown;
            filters?: unknown;
            filterPlacement?: unknown;
            filterMultiple?: unknown;
            index?: unknown;
            sortOrders?: unknown;
        } & {
            type: string;
            width: string | number;
            minWidth: string | number;
            sortOrders: ("ascending" | "descending")[];
            sortable: string | boolean;
            resizable: boolean;
            showTooltipWhenOverflow: boolean;
            showOverflowTooltip: boolean;
            reserveSelection: boolean;
            filterMultiple: boolean;
        } & {
            fixed?: string | boolean;
            index?: number | ((index: number) => number);
            label?: string;
            className?: string;
            property?: string;
            filters?: import("element-plus/lib/components/table/src/table-column/defaults").Filters;
            align?: string;
            filterMethod?: import("element-plus/lib/components/table/src/table-column/defaults").FilterMethods<any>;
            labelClassName?: string;
            prop?: string;
            renderHeader?: (data: {
                column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
                $index: number;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            sortMethod?: (a: any, b: any) => number;
            sortBy?: string | string[] | ((row: any, index: number) => string);
            columnKey?: string;
            headerAlign?: string;
            formatter?: (row: any, column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            selectable?: (row: any, index: number) => boolean;
            filteredValue?: string[];
            filterPlacement?: string;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "width" | "minWidth" | "sortOrders" | "sortable" | "resizable" | "showTooltipWhenOverflow" | "showOverflowTooltip" | "reserveSelection" | "filterMultiple"> & UserElTableColumnProps) | PropType<ElTableColumnProps>;
        default: () => any[];
    };
};
declare type OmitTableProp = Required<Omit<ElTableProps, 'data' | 'class' | eventKey>>;
declare type KeyConstructor<Base extends object> = {
    [KeyProp in keyof Base]: PropType<Base[KeyProp]>;
};
declare type TableValidProps = KeyConstructor<OmitTableProp>;
export declare type MergeTableProps = TableValidProps & typeof tableProps & eventMethodProps & {
    otherProps: PropType<Record<string, any>>;
    summaryMethod: PropType<(...param: any[]) => string[]>;
};
declare const ElTableNext: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
export default ElTableNext;
export { ElTableNext };
