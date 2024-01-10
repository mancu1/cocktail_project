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

<style scoped lang="scss">
.title, .content {
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem; // для .title
  }
}

.title {
  font-size: 1rem;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
}

.content {
  font-size: 0.7rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
}
</style>