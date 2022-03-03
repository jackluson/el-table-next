# 示例

## 基础使用

只需配置`data`以及`column`后，`data`是数据源，`column`配置数组，用
`label` 属性来定义表格的列名。 可以使用
`width` 属性来定义列宽。其他属性对应`El-Table`的[Table-column](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-attributes)中的属性

<BasicTable/>

## Render 方式使用

`render方式`即是提供一个 render 渲染函数，给 render 函数传入 scope 参数(包含这一行数据、配置信息等信息），根据自己需求来渲染，如果 render 返回值是 html 类型，`script`的`lang`属性应该是`tsx`或者`jsx`
<BasicRenderTable/>

## Slot 方式使用

`slot方式`即是在`el-table-next`中提供插槽，然后在`column`配置中指定运用插槽的名字，可以同时运用多个不同插槽
<BasicSlotTable/>

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe` 属性可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。
<StripeTable/>

## 带边框表格

默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。
<BorderTable/>

## 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

可以通过指定 Table 组件的 `row-class-name `属性来为 Table 中的某一行添加 class， 表明该行处于某种状态。
<StatusTable/>

## 固定表头

纵向内容过多时，可选择固定表头。

只要在 `el-table-next` 元素中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。
<FixedHeaderTable/>

## 固定列

横向内容过多时，可选择固定列。

固定列需要使用 `fixed` 属性，它接受 Boolean 值 如果为 `true`, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。
<FixedColumnTable/>

## 固定列和表头

横纵内容过多时，可选择固定列和表头。

固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。
<FixedHeaderColumnTable/>

## 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

通过设置 `max-height` 属性为 Table 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条

<FixedHeaderWithFluidTable/>

## 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

只需要在 `column`的某一项配置 children 数组属性，然后再配置`column`就可以实现多级表头。
<GroupHeaderTable/>

## 单选

选择单行数据时使用色块表示。

Table 组件提供了单选的支持， 只需要配置 `highlight-current-row` 属性即可实现单选。 之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow`，`oldCurrentRow`。 如果需要显示索引，可以增加一列 `el-table-column`，设置 `type` 属性为 `index` 即可显示从 1 开始的索引号。
<SingleSelectTable/>

## 多选

你也可以选择多行。

实现多选非常简单: 手动添加一个 `el-table-column`，设 type 属性为 selection 即可； 除了多个选项，此示例还使用 `show-overflow-tooltip`：默认， 如果内容过长，它会分成多行。 若需要单行显示可以使用 `show-overflow-tooltip` 属性，它接受一个 `Boolean，` 为 `true` 时多余的内容会在 `hover` 时以 `tooltip` 的形式显示出来。
<MultiSelectTable/>

## 排序

对表格进行排序，可快速查找或对比数据。

在列中设置 `sortable` 属性即可实现以该列为基准的排序， 接受一个 `Boolean`，默认为 `false`。 可以通过 `Table` 的 `default-sort` 属性设置默认的排序列和排序顺序。 可以使用 `sort-method` 或者 `sort-by` 使用自定义的排序规则。 如果需要后端排序，需将 `sortable` 设置为 `custom`，同时在 `Table` 上监听 sort-change 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。 在本例中，我们还使用了 `formatter` 属性，它用于格式化指定列的值， 接受一个 `Function`，会传入两个参数：`row` 和 `column`， 可以根据自己的需求进行处理。
<SortTable/>

## 筛选

对表格进行筛选，可快速查找到自己想看的数据。

在列中设置 `filters` 和 `filter-method` 属性即可开启该列的筛选， `filters` 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示， 会传入三个参数：`value`, `row` 和 `column`。
<FilterTable/>

## 自定义列模板

自定义列的显示内容，可组合其他组件使用。

通过 `slot` 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。
<CustomColumnTable/>

## 自定义表头

表头支持自定义。

通过设置 [slot](https://v3.vuejs.org/guide/component-slots.html) 来自定义表头。
<CustomHeaderTable/>

## 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

通过设置 type="expand" 和 slot 可以开启展开行功能， el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 slot 相同。
<ExpandableRowTable/>

## 树形数据与懒加载

支持树类型的数据的显示。 当 row 中包含 `children` 字段时，被视为树形数据。 渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。 设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。 通过指定 row 中的 `hasChildren` 字段来指定哪些行是包含子节点。 `children` 与 `hasChildren` 都可以通过 `tree-props` 配置。
<TreeAndLazyTable/>

## 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。

将 `show-summary` 设置为`true`就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。
<SummaryTable/>

## 合并行或列

多行或多列共用一个数据时，可以合并行或列。

通过给 table 传入`span-method`方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行 `row`、当前列 `column`、当前行号 `rowIndex`、当前列号 `columnIndex` 四个属性。 该函数可以返回一个包含两个元素的数组，第一个元素代表 `rowspan`，第二个元素代表 `colspan`。 也可以返回一个键名为 `rowspan` 和 `colspan` 的对象。
<RowColumnSpanTable/>

## 自定义索引

自定义 `type=index` 列的行号。

通过给 `type=index` 的列传入 index 属性，可以自定义索引。 该属性传入数字时，将作为索引的起始值。 也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。
<CustomIndexTable/>

## Table Layout

The [table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) property sets the algorithm used to lay out table cells, rows, and columns.
<LayoutTable/>
