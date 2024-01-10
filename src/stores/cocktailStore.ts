import { defineStore } from 'pinia'
import axios from 'axios'
import type { Cocktail, CocktailAPIResponse, CocktailState } from '@/types'
import { cocktailCast } from '@/utility/cocktailCast'

export const useCocktailStore = defineStore('cocktailStore', {
  state: (): CocktailState => ({
    cocktails: ['margarita', 'mojito', 'a1', 'kir'],
    savedCocktails: {},
    currentCocktail: null,
    isLoading: false,
    error: null
  }),
  actions: {
    async fetchCocktail(cocktailCode: string) {
      this.isLoading = true
      this.error = null
      try {
        if (this.savedCocktails[cocktailCode]) {
          this.currentCocktail = this.savedCocktails[cocktailCode]
          return
        }

        const response = await axios.get<CocktailAPIResponse>(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`
        )
        if (response.data && response.data.drinks && response.data.drinks.length > 0) {
          const cocktail: Cocktail = cocktailCast(response.data.drinks[0])
          this.savedCocktails[cocktailCode] = cocktail
          this.currentCocktail = cocktail
        } else {
          this.error = 'Cocktail not found'
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          this.error = error.message
        } else {
          this.error = 'An error occurred while fetching the cocktail'
        }
      } finally {
        this.isLoading = false
      }
    }
  }
})
