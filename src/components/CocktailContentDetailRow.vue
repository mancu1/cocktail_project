<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
  </div>
</template>

<style scoped>
.title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.content {
  font-size: 0.7rem;
  margin-bottom: 1rem;
}
@media (min-width: 1024px) {
  .title {
    font-size: 1.5rem;
  }
  .content {
    font-size: 1rem;
  }
}
</style>
