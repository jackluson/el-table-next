<script setup lang="ts">
import TemplateDemo from "./components/TemplateDemo.vue";
import TsxDemo from "./components/TsxDemo";
defineExpose({
  name: "APP",
});
</script>
<template>
  <h1>ElTableNext Demo</h1>
  <TemplateDemo />
  <TsxDemo />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
