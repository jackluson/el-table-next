import { defineComponent, ref } from 'vue';
// import ElTableNext from '../../../el-table-next/index'
import ElTableNext from 'el-table-next';
// import ElTableNext from './ElTableNext';

export default defineComponent({
  name: 'ElTableProDemo',
  components: {
    ElTableNext,
  },
  setup() {
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
        <ElTableNext
          data={tableData}
          column={column}
          stripe={true}
          onSelect={() => {
            console.log();
          }}
          onCellDblclick={() => {
            console.log('jijij');
          }}
          className={'123123'}
          cellClassName={'cellname'}
          onCellContextmenu={() => {
            console.log('右键');
          }}
        />
      );
    };
  },
});
