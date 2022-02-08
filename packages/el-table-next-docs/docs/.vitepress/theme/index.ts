import { VPTheme } from '@vue/theme';
import ElementPlus from 'element-plus';
import DemoContainer from './components/DemoContainer.vue';
import ElTableNext from '../../../../el-table-next/index';
// import ElTableNext from 'el-table-next';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import './styles/code.css';
import './styles/demo.css';
import './styles/utils.css';
import 'virtual:windi-utilities.css';
import './styles/overrides.css';
import 'element-plus/dist/index.css';
import './styles/element-plus.css';
const theme: any = {
  ...VPTheme,
  enhanceApp(ctx: any) {
    VPTheme.enhanceApp?.(ctx);
    const { app, router } = ctx;
    app.use(ElementPlus);
    // app.use(ElTableNext)
    app.component('ElTableNext', ElTableNext);
    app.component('DemoContainer', DemoContainer);
    if (typeof window !== 'undefined') {
      router.go(`${location.pathname}`);
    }
  },
};

export default theme;
