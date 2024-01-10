<script setup lang="ts">
import type { Cocktail } from '@/types'
import CocktailContentDetailRow from '@/components/CocktailContentDetailRow.vue'

defineProps<{
  cocktail: Cocktail
}>()
</script>

<template>
  <div class="cocktail-detail" v-if="cocktail">
    <img v-lazy="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="cocktail-image" />
    <section class="cocktail-detail--content">
      <h2>{{ cocktail.strDrink }}</h2>
      <CocktailContentDetailRow title="Category:" :content="cocktail.strCategory" />
      <CocktailContentDetailRow title="Type:" :content="cocktail.strAlcoholic" />
      <CocktailContentDetailRow title="Glass:" :content="cocktail.strGlass" />
      <CocktailContentDetailRow title="Instructions:" :content="cocktail.strInstructions" />
      <hr />
      <h3>Ingredients:</h3>
      <ul>
        <li v-for="part in cocktail.parts" :key="part.ingredient">
          {{ part.measures }} {{ part.ingredient }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.cocktail-detail {
  margin: 0 auto;
  padding: 20px;
}

.cocktail-image {
  max-width: 350px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

hr {
  border: 0;
  height: 1px;
  background-color: var(--color-border);
  margin: 1rem 0;
}

h2 {
  font-size: 2rem;
  color: var(--accent-color);
  margin-top: 0;
}

ul {
  list-style-type: circle;
  padding: 0 1.5rem;
}
ul li::marker {
  color: var(--accent-color);
  font-size: 0.8rem;
}

ul li {
  background-color: var(--color-background-soft);
  font-size: 0.8rem;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 4px;
}

@media (min-width: 720px) {
  h2 {
    font-size: 4rem;
  }

  .cocktail-detail {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    grid-template-areas: 'content image';
  }

  .cocktail-detail--content {
    grid-area: content;
  }

  .cocktail-image {
    max-width: 100%;
    grid-area: image;
  }
  ul li::marker {
    font-size: 1.2rem;
  }

  ul li {
    font-size: 1.2rem;
  }
}
</style>
