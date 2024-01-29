<template>
  <div @click="add">
    首页{{ a }}
  </div>
</template>

<script setup>
// import { ref,onMounted } from 'vue'
var a = ref(1);
function add() {
  console.log(11);
  a.value++
}

</script>

<style scoped>

</style>