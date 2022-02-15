/*
 * @Date: 2021-12-06 18:40:41
 * @LastEditTime: 2022-02-15 18:18:26
 * @Description:
 */
import ElTableNext from './index';
import { createApp } from 'vue';

type ElTableProUse = typeof ElTableNext & {
  install: (
    app: ReturnType<typeof createApp>,
    options: Record<string, any>
  ) => void;
};

function install(app: ReturnType<typeof createApp>, options = {}) {
  app.component('el-table-next', ElTableNext);
}

(ElTableNext as ElTableProUse).install = install;

export default ElTableNext as ElTableProUse;

export { ElTableNext };
