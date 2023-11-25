import { DISHES } from "./src/dishes";
import { FOODS } from "./src/foods";

type NutritionFacts = {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber?: number | undefined;
    salt?: number | undefined;
    saturatedFat?: number | undefined;
    sugar: number;
    omega3?: number | undefined;
}

export type Food = {
    name: string;
    unit: string;
    nutritionPer100g: NutritionFacts;
    conversionFactors?: any;
    pricePer100g: number;
    store?: string | undefined;
    brand?: string | undefined;
    link?: string | undefined;
    comment?: string | undefined;
    description?: string | undefined;
    preparation?: string | undefined;
}

export type Result = {
    name?: string;
    contains: string;
    totalNutritionFacts: Record<string, number>;
    ingredientsContribution: Array<{ food: string, priceInCents: number, percentage: number }>;
    totalPrice: number;
}

export type Unit = "gram" | "cup"
export type Aliment = keyof typeof FOODS;
export type NutritionElement = keyof NutritionFacts;

export type Dish = {
    ingredients: Array<{
        food: Aliment;
        amount: number;
        unit: Unit;
    }>;
    name: string;
}

export type DishName = keyof typeof DISHES;