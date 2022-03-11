import { defineComponent, PropType } from 'vue';
import type ElTable from 'element-plus/lib/components/table';
import type { ElTableColumn } from 'element-plus/lib/components/table';

type ElTableType = InstanceType<typeof ElTable>;
type ElTableProps = ElTableType['$props'];

type UserElTableColumnProps = {
  slotName?: string;
  headerSlot?: string;
  render?: (...arg: any[]) => any;
  children?: ElTableColumnProps[];
};
export type ElTableColumnProps = (InstanceType<typeof ElTableColumn>['$props'] &
  UserElTableColumnProps)[];

export type ConditionalKeys<Base, Condition> = NonNullable<
  // Wrap in `NonNullable` to strip away the `undefined` type from the produced union.
  {
    // Map through all the keys of the given base type.
    [Key in keyof Base]: Key extends Condition // Pick only keys with types extending the given `Condition` type.
      ? // Retain this key since the condition passes.
        Key
      : // Discard this key since the condition fails.
        never;

    // Convert the produced object into a union type of the keys which passed the conditional test.
  }[keyof Base]
>;

type eventKeyVal = {
  [key in keyof ElTableType]: key extends `on${infer stringA}`
    ? `on${stringA}`
    : never;
};
type EmitKeyMethod = ConditionalKeys<ElTableType, `on${string}`>;
type eventKey = NonNullable<eventKeyVal[keyof eventKeyVal]>;
type CamelEventKey<T extends string> = {
  [key in T]: key extends `on${infer stringA}-${infer stringB}`
    ? `on${stringA}${Capitalize<stringB>}`
    : key;
};
type eventJsx = CamelEventKey<
  CamelEventKey<EmitKeyMethod>[keyof CamelEventKey<EmitKeyMethod>]
>;
type eventKeyName = eventJsx[keyof eventJsx];

type eventMethodProps = {
  [key in eventKeyName]: (...args: any[]) => any;
};

export const tableProps = {
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
  align: {
    type: String,
    default: 'center',
  },
  column: {
    type: Array as PropType<ElTableColumnProps> | ElTableColumnProps[number],
    default: () => [],
  },
};
type OmitTableProp = Required<Omit<ElTableProps, 'data' | 'class' | eventKey>>;

type KeyConstructor<Base extends object> = {
  [KeyProp in keyof Base]: PropType<Base[KeyProp]>;
};
type TableValidProps = KeyConstructor<OmitTableProp>;

export type MergeTableProps = TableValidProps &
  typeof tableProps &
  eventMethodProps & {
    otherProps: PropType<Record<string, any>>;
    summaryMethod: PropType<(...param: any[]) => string[]>;
  };

const ElTableNext = defineComponent({
  name: 'ElTableNext',
  // @ts-ignore
  props: {
    ...(tableProps as MergeTableProps),
  },
  setup(props, { attrs, slots }) {
    // const elTableRef = ref<ElTableType>();
    return () => {
      // @ts-ignore

      const { data, column, align } = props;

      const renderColumn = (columnDict: Record<string, any>, index: number) => {
        const { render, slotName, headerSlot, children, ...restAtts } =
          columnDict;
        const vSlots: {
          default?: (scope: Record<string, any>) => any;
          header?: (scope: Record<string, any>) => any;
        } = {};
        if (typeof render === 'function') {
          vSlots.default = (scope) => {
            if (restAtts.prop) {
              return render(scope.row[restAtts.prop], scope);
            }
            return render(scope);
          };
        }

        if (slotName && typeof slots[slotName] === 'function') {
          vSlots.default = (scope) =>
            (slots[slotName] as (scope: any) => {})(scope);
        }

        if (headerSlot && slots[headerSlot]) {
          vSlots.header = (scope) =>
            (slots[headerSlot] as (scope: any) => {})(scope);
        }

        if (children?.length > 0) {
          vSlots.default = (scope) => {
            return children.map(renderColumn);
          };
        }
        return (
          <el-table-column
            key={index}
            align={align}
            {...restAtts}
            v-slots={vSlots}
          />
        );
      };
      const columnsSlots = column.map(renderColumn);
      return (
        <div>
          <el-table
            data={data}
            ref='elTableRef'
            {...attrs}
            v-slots={{
              append: () => {
                return slots.append && slots.append();
              },
              empty: () => {
                return slots.empty && slots.empty();
              },
            }}
          >
            {columnsSlots}
          </el-table>
        </div>
      );
    };
  },
  mounted() {
    // @ts-ignore
    this.injectTablePrimaryMethods();
  },
  methods: {
    // 将$refs.yoTable上的属性映射到this上, 防止父组件访问Table链过长
    // https://element-plus.org/zh-CN/component/table.html#table-方法
    injectTablePrimaryMethods() {
      const _self = this as any;
      const elTableRef = _self['$refs']['elTableRef'];
      const tableMethodNameList = [
        'clearSelection',
        'toggleRowSelection',
        'toggleAllSelection',
        'toggleRowExpansion',
        'setCurrentRow',
        'clearSort',
        'clearFilter',
        'doLayout',
        'sort',
      ];
      for (const methodName of tableMethodNameList) {
        if (_self[methodName]) {
          console.warn(`the ${methodName} method is exist!, please rename it `);
        } else {
          _self[methodName] = elTableRef?.[methodName as keyof ElTableType];
        }
      }
    },
  },
});
export default ElTableNext;
export { ElTableNext };
