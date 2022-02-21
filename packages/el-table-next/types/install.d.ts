import ElTableNext from './index';
import { createApp } from 'vue';
declare type ElTableProUse = typeof ElTableNext & {
    install: (app: ReturnType<typeof createApp>, options: Record<string, any>) => void;
};
declare const _default: ElTableProUse;
export default _default;
export { ElTableNext };
