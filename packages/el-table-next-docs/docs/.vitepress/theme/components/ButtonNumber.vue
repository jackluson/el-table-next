
<template>
  <div class="box-vue">
    <el-button type="info" @click="plus">You clicked me {{ number }} times</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const number = ref(2);
const plus = () => {
  number.value++
}
</script>

