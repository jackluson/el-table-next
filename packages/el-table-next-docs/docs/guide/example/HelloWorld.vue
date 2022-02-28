<desc>
 this is desc part
</desc>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>
<script lang="ts">
export default {
  name: "HEJoe",
  data() {
    return {
      name: "jsidf",
    };
  },
};
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <p>
      Recommend setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      Se
      <code>README.md</code> for more information.
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>
a {
  color: rgb(38, 0, 255);
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  /* background-color: #eee; */
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
