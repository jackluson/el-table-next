# ElTableNext

> 基于 Element-plus Table 封装的易用, 一致, 友好的 Table 组件

## Why

用过 [Element UI Table ](https://element-plus.org/en-US/component/table.html)的朋友都知道用 Table 组件时需要用到`el-table-column`，它是和 html 混写在一起的, 如果很多列的话，就需要一个个写配置, 否则需要用循环, 这样的体验对开发者极为不友好。 如果是动态的`el-table-column`的话体验就更差了, 因此封装了`El-Table-Next`基于 JSON 去配置列结构, 此外 ElTableNext 还有更加友好的代码提示特点。

<details>

<summary><strong>Basic Usage</strong></summary>

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
