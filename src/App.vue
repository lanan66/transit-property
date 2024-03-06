<script setup>
import autofit from 'autofit.js'
onMounted(()=> {
  autofit.init({
    designWidth: 1920,
    designHeight: 1080,
    renderDom: "#app",
    resize: true
  })
}) 
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
