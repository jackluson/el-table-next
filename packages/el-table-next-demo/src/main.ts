import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import ElTableNext from 'el-table-next';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
app.use(ElTableNext);
app.mount('#app');
