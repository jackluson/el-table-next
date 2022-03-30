# ElTableNext

> 基于 Element-plus Table 封装的易用, 一致, 友好的 Table 组件

## Why

用过 [Element UI Table ](https://element-plus.org/en-US/component/table.html)的朋友都感受到 Table 组件配置列需要用到`el-table-column`写在 html 中, 如果是动态的`el-table-column`的话就更加不友好了, 因此封装了`El-Table-Next`基于 JSON 去配置列结构, 此外还有更加友好的代码提示。

<details>

<summary><strong>Example</strong></summary>

```vue
<template>
  <el-table-next :column="column" :data="tableData" />
</template>
<script setup lang="ts">
import type { ElTableColumnProps } from 'el-table-next';
/* 引入ElTableColumnProps定义column可获得类型提示 */
const column: ElTableColumnProps[] = [
  {
    type: 'index',
    width: '60px',
    label: '序号',
  },
  {
    prop: 'name',
    label: '名字',
  },
  {
    prop: 'date',
    label: '日期',
  },
  {
    prop: 'address',
    label: '地址',
  },
];
const tableData = [
  {
    date: '2016-05-02',
    name: '佘太君',
    address: '上海市普陀区金沙江路 1516 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2016-05-01',
    name: '王小帅',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2016-05-03',
    name: '王小呆',
    address: '上海市普陀区金沙江路 1516 弄',
  },
];
</script>
```

</details>

<details>
<summary> <strong> More Friendly Code IntelliSense</strong> </summary>

1. ![](./packages/el-table-next-docs/docs/.vitepress/img/snippets.png)
2. ![](./packages/el-table-next-docs/docs/.vitepress/img/snippets2.png)
</details>

## Installation

```shell
$ npm install el-table-next --save
```

```shell
$ yarn add el-table-next
```

## Documentation

See: [https://jackluson.github.io/el-table-next/](https://jackluson.github.io/el-table-next/)
