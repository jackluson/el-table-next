import { defineComponent, ref } from 'vue';
import ElTableNext from 'el-table-next';

export default defineComponent({
  name: 'TsxDemo',
  setup() {
    const tableLayout = ref<'fixed' | 'auto'>('fixed');
    const tableData = [
      {
        date: '2016-05-09',
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
    ];
    const column = [
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '名称',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
      {
        label: '操作项',
        render() {
          return (
            <el-button
              onClick={() => {
                console.log('ji');
              }}
            >
              哈啥
            </el-button>
          );
        },
      },
    ];
    return () => {
      return (
        <div>
          <h2>Tsx render Demo</h2>
          <el-radio-group vModel={tableLayout.value}>
            <el-radio-button label='fixed'></el-radio-button>
            <el-radio-button label='auto'></el-radio-button>
          </el-radio-group>
          <ElTableNext
            data={tableData}
            column={column}
            // stripe={true}
            onSelect={() => {
              console.log();
            }}
            onCellDblclick={() => {
              console.log('jijij');
            }}
            cellClassName={'cellname'}
            onCellContextmenu={() => {
              console.log('右键df');
            }}
            tableLayout={tableLayout.value}
          />
        </div>
      );
    };
  },
});
