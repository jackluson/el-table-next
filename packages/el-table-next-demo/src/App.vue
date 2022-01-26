<script setup lang="ts">
import ElTableProDemo from './components/ElTableProDemo'
import ElTableProDemoVue from './components/ELTableProDemo.vue'
defineExpose({
  name: 'APP'
})
</script>
<template>
  <ElTableProDemo />
  <ElTableProDemoVue />
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
