/*
 * @Date: 2021-12-06 18:40:41
 * @LastEditTime: 2022-01-05 20:43:03
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

function install(
  app: ReturnType<typeof createApp>,
  options: Record<string, any> = {}
) {
  app.component('el-table-next', ElTableNext);
}

(ElTableNext as ElTableProUse).install = install;

export default ElTableNext as ElTableProUse;
