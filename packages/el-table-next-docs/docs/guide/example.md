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

---

## Usage

```js
import { ref } from "vue";
import { asyncComputed } from "@vueuse/core";

const name = ref("jack");

const userInfo = asyncComputed(
  async () => {
    return await mockLookUp(name.value);
  },
  null // initial state
);
```
