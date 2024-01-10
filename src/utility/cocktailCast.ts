import type { Cocktail, CocktailPart, RawSourceDrink } from '@/types'

// map raw source data to cocktail
export function cocktailCast(drink: RawSourceDrink): Cocktail {
  const cocktailPart: CocktailPart[] = []
  for (let i = 1; i <= 15; i++) {
    const ingredientKey: keyof RawSourceDrink = `strIngredient${i}` as keyof RawSourceDrink
    const measuresKey: keyof RawSourceDrink = `strMeasure${i}` as keyof RawSourceDrink
    const ingredient: string | null = drink[ingredientKey]
    const measures: string | null = drink[measuresKey]
    if (!(ingredient && measures)) {
      break
    }
    const part: CocktailPart = {
      ingredient,
      measures
    }
    cocktailPart.push(part)
  }
  return {
    idDrink: drink.idDrink,
    strDrink: drink.strDrink,
    strCategory: drink.strCategory,
    strAlcoholic: drink.strAlcoholic,
    strGlass: drink.strGlass,
    strInstructions: drink.strInstructions,
    strDrinkThumb: drink.strDrinkThumb,
    parts: cocktailPart
  }
}
