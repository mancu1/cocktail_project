<script lang="ts" setup>
import { useCocktailStore } from '@/stores/cocktailStore'
import { onMounted, toRefs } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import CocktailDetail from '@/components/CocktailDetail.vue'

const route = useRoute()
const store = useCocktailStore()

onMounted(() => {
  store.fetchCocktail(route.params.cocktailCode as string)
})

onBeforeRouteUpdate((to, from, next) => {
  store.fetchCocktail(to.params.cocktailCode as string)
  next()
})

const { currentCocktail, isLoading, error } = toRefs(store)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="currentCocktail">
    <CocktailDetail :cocktail="currentCocktail" />
  </div>
  <div v-else>No cocktail selected</div>
</template>
