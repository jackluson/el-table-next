<template>
  <el-table-next stripe :column="column" :data="tableData" />
</template>
<script lang="ts" setup>
const column = [
  {
    type: "index",
    width: "60px",
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
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
