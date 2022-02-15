<template>
  <p>基础的表格展示用法。</p>
  <p>
    当<code>el-table</code>元素中注入 <code>data</code>以及<code>column</code>
    对象数组后，在
    <code>el-table-column</code>利用<code>column</code>数组的对象成员中的<code>prop</code>
    属性来对应<code>data</code>对象成员中的键名即可填入数据，用
    <code>label</code> 属性来定义表格的列名。 可以使用
    <code>width</code> 属性来定义列宽。其他属性对应<code>El-Table</code>的<a
      href="https://element-plus.gitee.io/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD"
      target="_blank"
      rel="noopener noreferrer"
      >Table-column</a
    >中的属性
  </p>
  <el-table-next stripe :column="column" :data="tableData" />
</template>
<script setup lang="ts">
const column = [
  {
    type: "index",
    width: "50px",
    label: "序号",
  },
  {
    prop: "name",
    label: "名字",
  },
  {
    prop: "date",
    label: "日期",
  },
  {
    prop: "address",
    label: "地址",
  },
];
const tableData = [
  {
    date: "2016-05-02",
    name: "佘太君",
    address: "上海市普陀区金沙江路 1516 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
];
</script>
