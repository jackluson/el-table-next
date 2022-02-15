# 示例

## 基础表格

<script setup>

import HelloWorld from './example/HelloWorld.vue'
import ElTableProDemo from './example/ELTableProDemo.vue'
import BasicTable from './example/basic-table.vue'
// import ElTableProDemoTsx from '../../el-table-next-demo/src/components/ELTableProDemo'
</script>
<BasicTable/>
<HelloWorld/>
<!--
<BasicTable/> -->
<ElTableProDemo/>

<!-- <DemoContainer/> -->
<!--
<DemoBlock>
  <template v-slot:demo>
  jisdfijfi
  </template>
  <template v-slot:description>
  jisdfij
  </template>
  <template v-slot:source>
      ::: v-pre
      ```js
      module.exports = {
        title: 'Hello VitePress',
        description: 'Just playing around.',
      };
      ```
      :::
  </template>
</DemoBlock> -->

```js
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
};
```

---

## Usage

```js
import { ref } from 'vue';
import { asyncComputed } from '@vueuse/core';

const name = ref('jack');

const userInfo = asyncComputed(
  async () => {
    return await mockLookUp(name.value);
  },
  null // initial state
);
```
