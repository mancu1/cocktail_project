<template>
  <nav>
    <ul>
      <li v-for="cocktail in cocktailsRouterLinks" :key="cocktail.name">
        <router-link :to="cocktail.path">{{ cocktail.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCocktailStore } from '@/stores/cocktailStore'

const store = useCocktailStore()

const cocktails = computed(() => store.cocktails)

// add cocktails router link objects as computed property

const cocktailsRouterLinks = computed(() => {
  return cocktails.value.map((cocktail: string) => {
    return {
      name: cocktail,
      path: '/cocktail/' + cocktail
    }
  })
})
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  font-size: 1rem;
  text-align: left;
  display: flex;
  background-color: var(--color-background-soft);
  padding: 0.7rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    height: 100vh;
    font-size: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: row;

    @media (min-width: 1024px) {
      flex-direction: column;
    }
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    text-transform: capitalize;

    &:first-of-type {
      border: 0;
    }

    &.router-link-exact-active {
      color: var(--color-text);

      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
