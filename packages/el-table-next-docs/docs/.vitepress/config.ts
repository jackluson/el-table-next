import base from '@vue/theme/config';
import highlight from './plugins/highlight';

const themeConfig = async () => {
  const config = await base();
  config.markdown.highlight = await highlight();
  return config;
};

const config = {
  extends: themeConfig,
  title: 'el-table-next',
};

export default config;
