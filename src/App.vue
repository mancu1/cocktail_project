<script setup lang="ts">
import { RouterView } from 'vue-router'
import CocktailMenu from '@/components/CocktailMenu.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <CocktailMenu />
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;

  @media (min-width: 1024px) {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
}
</style>
