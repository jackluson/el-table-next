<template>
  <el-table-next :column="column" :data="filterTableData" style="width: 100%">
    <template #header>
      <el-input v-model="search" size="small" placeholder="Type to search" />
    </template>
    <template #default="scope">
      <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >Edit</el-button
      >
      <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
        >Delete</el-button
      >
    </template>
  </el-table-next>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

interface User {
  date: string;
  name: string;
  address: string;
}

const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const column = [
  {
    prop: "date",
    label: "日期",
    width: 180,
    slotName: "date",
  },
  {
    prop: "name",
    width: 180,
    label: "名字",
    slotName: "name",
  },
  {
    align: "right",
    slotName: "default",
    headerSlot: "header",
  },
];

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "John",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Morgan",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Jessy",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
