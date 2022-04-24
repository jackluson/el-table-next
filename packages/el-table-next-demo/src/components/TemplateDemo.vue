<template>
  <div>
    <h2>Template Demo</h2>
    <el-table-next :data="tableData" :column="column" :otherProps="{}" @cell-click="() => { }"
      :header-row-style="testFn">
      <template #empty>Empty slot content</template>
      <template #default="props">
        <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p>
      </template>
      <template #header>Header</template>
      <template #append>Append slot content</template>
    </el-table-next>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import type { ElTableColumnProps } from "el-table-next";

export default defineComponent({
  name: "TemplateDemo",
  setup() {
    const searchVal = ref("");
    const emptyData = [];
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-06",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
      {
        date: "2016-05-07",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
    ];
    const column: ElTableColumnProps[] = [
      {
        label: "日期",
        prop: "date",
      },
      // {
      //   type: "expand",
      //   slotName: "default",
      // },
      // {
      //   label: "快递信息",
      //   children: [
      //     {
      //       label: "名称",
      //       prop: "name",
      //     },
      //     {
      //       label: "地址",
      //       prop: "state",
      //       // children: [
      //       //   {
      //       //     label: '州',
      //       //     prop: 'state',
      //       //   },
      //       //    {
      //       //     label: 'city',
      //       //     prop: 'city',
      //       //   }
      //       // ]
      //     },
      //   ],
      // },
      {
        label: "操作项",
        fixed: "right",
        render() {
          return (
            <el-button
              onClick={() => {
                console.log(searchVal.value);
              }}
            >
              按钮
            </el-button>
          );
        },
        headerSlot: "header",
        // renderHeader(){
        //   return <el-input vModel={searchVal.value} size="mini" placeholder="Type to search" />
        // }
      },
    ];
    return {
      column,
      tableData,
    };
  },
  methods: {
    handleEdit(index: any, row: any) {
      console.log(index, row);
    },
    handleDelete(index: any, row: any) {
      console.log(index, row);
    },
    testFn(scope: any) {
      console.log("🚀 ~ file: ELTableProDemo.vue ~ line 161 ~ testFn ~ scope", scope);
      return {
        color: "red",
      };
    },
    log(...args: any[]) {
      console.log(args);
    },
  },
});
</script>
