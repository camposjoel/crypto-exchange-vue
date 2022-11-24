<script setup>
const props = defineProps(['size'])
</script>

<template>
  <div id="spinner" :style="{ width: `${props.size}px`, height: `${props.size}px` }"></div>
</template>

<style scoped>
#spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: rgb(76, 187, 54);

  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>