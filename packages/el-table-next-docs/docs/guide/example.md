# 示例

## 基础使用

只需配置`data`以及`column`后，`data`是数据源，`column`配置数组，用
`label` 属性来定义表格的列名。 可以使用
`width` 属性来定义列宽。其他属性对应`El-Table`的[Table-column](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-attributes)中的属性

<BasicTable/>

## Render 方式使用

`render方式`即是提供一个 render 渲染函数，给 render 函数传入 scope 参数(包含这一行数据、配置信息等信息），根据自己需求来渲染，如果 render 返回值是 html 类型，`script`的`lang`属性应该是`tsx`或者`jsx`
<BasicRenderTable/>

## Slot 方式

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

```js
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
};
```

---

## Usage

```js
import { ref } from 'vue';
import { asyncComputed } from '@vueuse/core';

const name = ref('jack');

const userInfo = asyncComputed(
  async () => {
    return await mockLookUp(name.value);
  },
  null // initial state
);
```
