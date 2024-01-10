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

<style scoped>
nav {
  width: 100%;
  font-size: 1rem;
  text-align: left;
  display: flex;

  background-color: var(--color-background-soft);
  padding: 0.7rem;
}

ul {
  list-style-type: none;
  padding: 0;
  flex-direction: row;
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  text-transform: capitalize;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    margin-top: 0;
    height: 100vh;
    font-size: 1.5rem;
  }
  ul {
    flex-direction: column;
  }
}
</style>
