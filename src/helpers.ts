import { Dish, Result, NutritionElement } from "../types.ts";
import { FOODS } from "./foods.ts";

/**
 * Calculate the nutritional and financial information for a dish.
 * 
 * @param {Dish} dish - The dish to calculate information for.
 * @returns {Result} - The calculated result containing nutritional and financial details.
 */
export const calculate = ({ ingredients, name }: Dish): Result => {
  // The baseline amount for calculations.
  const baselineAmount = 100;

  // Initialize the result object.
  const result = ingredients?.reduce((acc, { food, amount, unit }) => {
    // Calculate the ratio based on the baseline amount.
    const amountRatio = amount / baselineAmount;

    // Append the ingredient details to the "contains" property.
    acc.contains += `${amount} ${unit} ${food}, `;

    // Calculate the nutritional information.
    for (const key in FOODS[food]?.nutritionPer100g) {
      if (!acc.totalNutritionFacts[key]) {
        acc.totalNutritionFacts[key] = FOODS[food].nutritionPer100g[key as NutritionElement]! * amountRatio;
      } else {
        acc.totalNutritionFacts[key] += FOODS[food].nutritionPer100g[key as NutritionElement]! * amountRatio;
      }
    }

    // Calculate the total price based on ingredient cost.
    acc.totalPrice += FOODS[food].pricePer100g ? (FOODS[food].pricePer100g * amountRatio) / 100 : 0;

    // Store ingredient contribution details.
    const priceInCents = FOODS[food].pricePer100g ? Math.round(FOODS[food].pricePer100g * amountRatio) : 0;
    acc.ingredientsContribution.push({
      food,
      priceInCents,
      percentage: 0,
    });

    return acc;
  }, { contains: "", totalNutritionFacts: {}, totalPrice: 0, ingredientsContribution: [] } as Result);

  // Round the total price to two decimal places.
  result.totalPrice = parseFloat(result.totalPrice.toFixed(2));

  // Round the nutritional facts to whole numbers.
  for (const key in result.totalNutritionFacts) {
    result.totalNutritionFacts[key] = Math.round(result.totalNutritionFacts[key]);
  }

  // Update the ingredientsContribution array with percentages.
  result.ingredientsContribution.forEach((ingredient) => {
    ingredient.percentage = Math.round((ingredient.priceInCents / (result.totalPrice * 100)) * 100)
  });

  // Sort ingredientsContribution by priceInCents from most to least.
  result.ingredientsContribution.sort((a, b) => b.priceInCents - a.priceInCents);

  // Return the final result.
  return { name, ...result };
};
