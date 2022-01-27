# Example

# el-table-next

<script>
  console.log("in");
</script>

<script setup>
import HelloWorld from './HelloWorld.vue'
import ElTableProDemo from './ELTableProDemo.vue'
import BasicTable from './basic-table.vue'
// import ElTableProDemoTsx from '../../el-table-next-demo/src/components/ELTableProDemo'
</script>

<HelloWorld msg="哈哈士"/>
<!-- 
<ElTableProDemo/>
<BasicTable/> -->
<!-- <ElTableProDemoTsx/> -->

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
