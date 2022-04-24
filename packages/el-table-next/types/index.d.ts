import * as vue from 'vue';
import { PropType, createApp } from 'vue';
import * as element_plus_lib_components_table_src_table_column_defaults from 'element-plus/lib/components/table/src/table-column/defaults';
import * as element_plus_lib_components_table_src_table_defaults from 'element-plus/lib/components/table/src/table/defaults';
import ElTable, { ElTableColumn } from 'element-plus/lib/components/table';

declare type ElTableType = InstanceType<typeof ElTable>;
declare type ElTableProps = ElTableType['$props'];
declare type UserElTableColumnProps = {
    slotName?: string;
    headerSlot?: string;
    render?: (...arg: any[]) => any;
    children?: ElTableColumnProps[];
};
declare type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'] & UserElTableColumnProps;
declare type ConditionalKeys<Base, Condition> = NonNullable<{
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
declare const tableProps: {
    data: {
        type: PropType<Record<string, any>[]>;
        default: () => never[];
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: PropType<ElTableColumnProps[]>;
        default: () => never[];
    };
};
declare type OmitTableProp = Required<Omit<ElTableProps, 'data' | 'class' | eventKey>>;
declare type KeyConstructor<Base extends object> = {
    [KeyProp in keyof Base]: PropType<Base[KeyProp]>;
};
declare type TableValidProps = KeyConstructor<OmitTableProp>;
declare type MergeTableProps = typeof tableProps & eventMethodProps & {
    otherProps: PropType<Record<string, any>>;
    summaryMethod: PropType<(...param: any[]) => string[]>;
} & TableValidProps;
declare const ElTableNext: vue.DefineComponent<{
    data: {
        type: PropType<Record<string, any>[]>;
        default: () => never[];
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    column: {
        type: PropType<ElTableColumnProps[]>;
        default: () => never[];
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
    summaryMethod: PropType<(...param: any[]) => string[]> & PropType<element_plus_lib_components_table_src_table_defaults.SummaryMethod<any>>;
    size: PropType<string>;
    width: PropType<string | number>;
    height: PropType<string | number>;
    maxHeight: PropType<string | number>;
    fit: PropType<boolean>;
    stripe: PropType<boolean>;
    border: PropType<boolean>;
    rowKey: PropType<string | ((row: any) => string)>;
    showHeader: PropType<boolean>;
    showSummary: PropType<boolean>;
    sumText: PropType<string>;
    rowClassName: PropType<element_plus_lib_components_table_src_table_defaults.ColumnCls<any>>;
    rowStyle: PropType<element_plus_lib_components_table_src_table_defaults.ColumnStyle<any>>;
    cellClassName: PropType<string | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => string)>;
    cellStyle: PropType<vue.CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => vue.CSSProperties)>;
    headerRowClassName: PropType<element_plus_lib_components_table_src_table_defaults.ColumnCls<any>>;
    headerRowStyle: PropType<element_plus_lib_components_table_src_table_defaults.ColumnStyle<any>>;
    headerCellClassName: PropType<string | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => string)>;
    headerCellStyle: PropType<vue.CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => vue.CSSProperties)>;
    highlightCurrentRow: PropType<boolean>;
    currentRowKey: PropType<string | number>;
    emptyText: PropType<string>;
    expandRowKeys: PropType<any[]>;
    defaultExpandAll: PropType<boolean>;
    defaultSort: PropType<element_plus_lib_components_table_src_table_defaults.Sort>;
    tooltipEffect: PropType<string>;
    spanMethod: PropType<(data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    }>;
    selectOnIndeterminate: PropType<boolean>;
    indent: PropType<number>;
    treeProps: PropType<{
        hasChildren?: string | undefined;
        children?: string | undefined;
    }>;
    lazy: PropType<boolean>;
    load: PropType<(row: any, treeNode: element_plus_lib_components_table_src_table_defaults.TreeNode, resolve: (data: any[]) => void) => void>;
    style: PropType<vue.CSSProperties>;
    className: PropType<string>;
    tableLayout: PropType<"fixed" | "auto">;
    scrollbarAlwaysOn: PropType<boolean>;
    key: PropType<string | number | symbol>;
    ref: PropType<string | vue.Ref<any> | ((ref: object | null, refs: Record<string, any>) => void)>;
    ref_for: PropType<boolean>;
    ref_key: PropType<string>;
    onVnodeBeforeMount: PropType<((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeMounted: PropType<((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeBeforeUpdate: PropType<((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeUpdated: PropType<((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeBeforeUnmount: PropType<((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
    onVnodeUnmounted: PropType<((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[]>;
}, () => JSX.Element, unknown, {}, {
    injectTablePrimaryMethods(): void;
}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<{
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
    summaryMethod?: unknown;
    size?: unknown;
    width?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    fit?: unknown;
    stripe?: unknown;
    border?: unknown;
    rowKey?: unknown;
    showHeader?: unknown;
    showSummary?: unknown;
    sumText?: unknown;
    rowClassName?: unknown;
    rowStyle?: unknown;
    cellClassName?: unknown;
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
    defaultSort?: unknown;
    tooltipEffect?: unknown;
    spanMethod?: unknown;
    selectOnIndeterminate?: unknown;
    indent?: unknown;
    treeProps?: unknown;
    lazy?: unknown;
    load?: unknown;
    style?: unknown;
    className?: unknown;
    tableLayout?: unknown;
    scrollbarAlwaysOn?: unknown;
    key?: unknown;
    ref?: unknown;
    ref_for?: unknown;
    ref_key?: unknown;
    onVnodeBeforeMount?: unknown;
    onVnodeMounted?: unknown;
    onVnodeBeforeUpdate?: unknown;
    onVnodeUpdated?: unknown;
    onVnodeBeforeUnmount?: unknown;
    onVnodeUnmounted?: unknown;
} & {
    data: Record<string, any>[];
    align: string;
    column: ElTableColumnProps[];
} & {
    size?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    fit?: boolean | undefined;
    stripe?: boolean | undefined;
    border?: boolean | undefined;
    rowKey?: string | ((row: any) => string) | undefined;
    showHeader?: boolean | undefined;
    showSummary?: boolean | undefined;
    sumText?: string | undefined;
    summaryMethod?: element_plus_lib_components_table_src_table_defaults.SummaryMethod<any> | ((...param: any[]) => string[]) | undefined;
    rowClassName?: element_plus_lib_components_table_src_table_defaults.ColumnCls<any> | undefined;
    rowStyle?: element_plus_lib_components_table_src_table_defaults.ColumnStyle<any> | undefined;
    cellClassName?: string | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => string) | undefined;
    cellStyle?: vue.CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => vue.CSSProperties) | undefined;
    headerRowClassName?: element_plus_lib_components_table_src_table_defaults.ColumnCls<any> | undefined;
    headerRowStyle?: element_plus_lib_components_table_src_table_defaults.ColumnStyle<any> | undefined;
    headerCellClassName?: string | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => string) | undefined;
    headerCellStyle?: vue.CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => vue.CSSProperties) | undefined;
    highlightCurrentRow?: boolean | undefined;
    currentRowKey?: string | number | undefined;
    emptyText?: string | undefined;
    expandRowKeys?: any[] | undefined;
    defaultExpandAll?: boolean | undefined;
    defaultSort?: element_plus_lib_components_table_src_table_defaults.Sort | undefined;
    tooltipEffect?: string | undefined;
    spanMethod?: ((data: {
        row: any;
        rowIndex: number;
        column: element_plus_lib_components_table_src_table_column_defaults.TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    }) | undefined;
    selectOnIndeterminate?: boolean | undefined;
    indent?: number | undefined;
    treeProps?: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    lazy?: boolean | undefined;
    load?: ((row: any, treeNode: element_plus_lib_components_table_src_table_defaults.TreeNode, resolve: (data: any[]) => void) => void) | undefined;
    style?: vue.CSSProperties | undefined;
    className?: string | undefined;
    tableLayout?: "fixed" | "auto" | undefined;
    scrollbarAlwaysOn?: boolean | undefined;
    onSelect?: any;
    key?: string | number | symbol | undefined;
    ref?: (string | vue.Ref<any> | ((ref: object | null, refs: Record<string, any>) => void)) | undefined;
    ref_for?: boolean | undefined;
    ref_key?: string | undefined;
    onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
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
    otherProps?: Record<string, any> | undefined;
}>, {
    data: Record<string, any>[];
    align: string;
    column: ElTableColumnProps[];
}>;
declare type ElTableNext = typeof ElTableNext & {
    install: (app: ReturnType<typeof createApp>, options: Record<string, any>) => void;
};
declare const _default: ElTableNext;

export { ConditionalKeys, ElTableColumnProps, ElTableNext, MergeTableProps, _default as default, tableProps };
