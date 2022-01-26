import { PropType } from 'vue';
import type ElTable from 'element-plus/lib/components/table';
declare type ElTableType = InstanceType<typeof ElTable>;
declare type ElTableProps = ElTableType['$props'];
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
        type: PropType<Record<string, any>[]>;
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
};
declare const _default: import("vue").DefineComponent<{
    key: PropType<string | number | symbol>;
    height: PropType<string | number>;
    width: PropType<string | number>;
    border: PropType<boolean>;
    maxHeight: PropType<string | number>;
    style: PropType<import("vue").CSSProperties>;
    load: PropType<(row: any, treeNode: import("element-plus/lib/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void>;
    className: PropType<string>;
    size: PropType<string>;
    lazy: PropType<boolean>;
    defaultSort: PropType<import("element-plus/lib/components/table/src/table/defaults").Sort>;
    fit: PropType<boolean>;
    cellClassName: PropType<string | ((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)>;
    ref: PropType<string | import("vue").Ref<any> | ((ref: object, refs: Record<string, any>) => void)>;
    stripe: PropType<boolean>;
    rowKey: PropType<string | ((row: any) => string)>;
    showHeader: PropType<boolean>;
    showSummary: PropType<boolean>;
    sumText: PropType<string>;
    summaryMethod: PropType<import("element-plus/lib/components/table/src/table/defaults").SummaryMethod<any>>;
    rowClassName: PropType<import("element-plus/lib/components/table/src/table/defaults").ColumnCls<any>>;
    rowStyle: PropType<import("element-plus/lib/components/table/src/table/defaults").ColumnStyle<any>>;
    cellStyle: PropType<import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)>;
    headerRowClassName: PropType<import("element-plus/lib/components/table/src/table/defaults").ColumnCls<any>>;
    headerRowStyle: PropType<import("element-plus/lib/components/table/src/table/defaults").ColumnStyle<any>>;
    headerCellClassName: PropType<string | ((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)>;
    headerCellStyle: PropType<import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)>;
    highlightCurrentRow: PropType<boolean>;
    currentRowKey: PropType<string | number>;
    emptyText: PropType<string>;
    expandRowKeys: PropType<any[]>;
    defaultExpandAll: PropType<boolean>;
    tooltipEffect: PropType<string>;
    spanMethod: PropType<(data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    }>;
    selectOnIndeterminate: PropType<boolean>;
    indent: PropType<number>;
    treeProps: PropType<{
        hasChildren?: string;
        children?: string;
    }>;
    ref_for: PropType<boolean>;
    ref_key: PropType<string>;
    onVnodeBeforeMount: PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeMounted: PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeBeforeUpdate: PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeUpdated: PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeBeforeUnmount: PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeUnmounted: PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    data: {
        type: PropType<Record<string, any>[]>;
        default: () => any[];
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: PropType<Record<string, any>[]>;
        default: () => any[];
    };
    onSelect: (...args: any[]) => any;
    onExpandChange: (...args: any[]) => any;
    onCurrentChange: (...args: any[]) => any;
    onSelectAll: (...args: any[]) => any;
    onSelectionChange: (...args: any[]) => any;
    onCellContextmenu: (...args: any[]) => any;
    onCellClick: (...args: any[]) => any;
    onCellDblclick: (...args: any[]) => any;
    onRowClick: (...args: any[]) => any;
    onRowContextmenu: (...args: any[]) => any;
    onRowDblclick: (...args: any[]) => any;
    onHeaderClick: (...args: any[]) => any;
    onHeaderContextmenu: (...args: any[]) => any;
    onSortChange: (...args: any[]) => any;
    onFilterChange: (...args: any[]) => any;
    onHeaderDragend: (...args: any[]) => any;
    onCellMouseEnter: (...args: any[]) => any;
    onCellMouseLeave: (...args: any[]) => any;
    otherProps: PropType<Record<string, any>>;
}, () => JSX.Element, unknown, {}, {
    injectTablePrimaryMethods(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    key?: unknown;
    height?: unknown;
    width?: unknown;
    border?: unknown;
    maxHeight?: unknown;
    style?: unknown;
    load?: unknown;
    className?: unknown;
    size?: unknown;
    lazy?: unknown;
    defaultSort?: unknown;
    fit?: unknown;
    cellClassName?: unknown;
    ref?: unknown;
    stripe?: unknown;
    rowKey?: unknown;
    showHeader?: unknown;
    showSummary?: unknown;
    sumText?: unknown;
    summaryMethod?: unknown;
    rowClassName?: unknown;
    rowStyle?: unknown;
    cellStyle?: unknown;
    headerRowClassName?: unknown;
    headerRowStyle?: unknown;
    headerCellClassName?: unknown;
    headerCellStyle?: unknown;
    highlightCurrentRow?: unknown;
    currentRowKey?: unknown;
    emptyText?: unknown;
    expandRowKeys?: unknown;
    defaultExpandAll?: unknown;
    tooltipEffect?: unknown;
    spanMethod?: unknown;
    selectOnIndeterminate?: unknown;
    indent?: unknown;
    treeProps?: unknown;
    ref_for?: unknown;
    ref_key?: unknown;
    onVnodeBeforeMount?: unknown;
    onVnodeMounted?: unknown;
    onVnodeBeforeUpdate?: unknown;
    onVnodeUpdated?: unknown;
    onVnodeBeforeUnmount?: unknown;
    onVnodeUnmounted?: unknown;
    data?: unknown;
    align?: unknown;
    column?: unknown;
    onSelect?: unknown;
    onExpandChange?: unknown;
    onCurrentChange?: unknown;
    onSelectAll?: unknown;
    onSelectionChange?: unknown;
    onCellContextmenu?: unknown;
    onCellClick?: unknown;
    onCellDblclick?: unknown;
    onRowClick?: unknown;
    onRowContextmenu?: unknown;
    onRowDblclick?: unknown;
    onHeaderClick?: unknown;
    onHeaderContextmenu?: unknown;
    onSortChange?: unknown;
    onFilterChange?: unknown;
    onHeaderDragend?: unknown;
    onCellMouseEnter?: unknown;
    onCellMouseLeave?: unknown;
    otherProps?: unknown;
} & {
    data: Record<string, any>[];
    column: Record<string, any>[];
    align: string;
} & {
    key?: string | number | symbol;
    height?: string | number;
    width?: string | number;
    border?: boolean;
    maxHeight?: string | number;
    style?: unknown;
    load?: (row: any, treeNode: import("element-plus/lib/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void;
    className?: string;
    size?: string;
    lazy?: boolean;
    onSelect?: any;
    defaultSort?: import("element-plus/lib/components/table/src/table/defaults").Sort;
    fit?: boolean;
    cellClassName?: string | ((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string);
    ref?: string | import("vue").Ref<any> | ((ref: object, refs: Record<string, any>) => void);
    stripe?: boolean;
    rowKey?: string | ((row: any) => string);
    showHeader?: boolean;
    showSummary?: boolean;
    sumText?: string;
    summaryMethod?: import("element-plus/lib/components/table/src/table/defaults").SummaryMethod<any>;
    rowClassName?: import("element-plus/lib/components/table/src/table/defaults").ColumnCls<any>;
    rowStyle?: unknown;
    cellStyle?: unknown;
    headerRowClassName?: import("element-plus/lib/components/table/src/table/defaults").ColumnCls<any>;
    headerRowStyle?: unknown;
    headerCellClassName?: string | ((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string);
    headerCellStyle?: unknown;
    highlightCurrentRow?: boolean;
    currentRowKey?: string | number;
    emptyText?: string;
    expandRowKeys?: any[];
    defaultExpandAll?: boolean;
    tooltipEffect?: string;
    spanMethod?: (data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/lib/components/table/src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    };
    selectOnIndeterminate?: boolean;
    indent?: number;
    treeProps?: unknown;
    ref_for?: boolean;
    ref_key?: string;
    onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[];
    onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[];
    onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[];
    onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[];
    onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[];
    onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[];
    onExpandChange?: any;
    onCurrentChange?: any;
    onSelectAll?: any;
    onSelectionChange?: any;
    onCellContextmenu?: any;
    onCellClick?: any;
    onCellDblclick?: any;
    onRowClick?: any;
    onRowContextmenu?: any;
    onRowDblclick?: any;
    onHeaderClick?: any;
    onHeaderContextmenu?: any;
    onSortChange?: any;
    onFilterChange?: any;
    onHeaderDragend?: any;
    onCellMouseEnter?: any;
    onCellMouseLeave?: any;
    otherProps?: unknown;
}>, {
    data: Record<string, any>[];
    column: Record<string, any>[];
    align: string;
}>;
export default _default;
