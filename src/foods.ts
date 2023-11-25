//@ts-check
"use strict";
import { Food } from "../types.ts";
/**
 * Calculate price per 100g.
 * 
 * @param {number} price - Price in cents.
 * @param {number} quantity - Quantity in grams.
 * @returns {number} price per 100g
 */
const calcPrice = (price: number, quantity: number): number => (100 * price) / quantity


export const spinach: Food = {
  name: "spinach",
  unit: "gram",
  nutritionPer100g: {
    calories: 25,
    protein: 3.2,
    fat: 0.2,
    carbs: 0.6,
    sugar: 0.1,
    fiber: 0.7,
  },
  conversionFactors: {
    cup: 10 / 3,
    gram: 100,
  },
  pricePer100g: calcPrice(219, 1000)
};
export const broccoliFlorets: Food = {
  name: "Broccoli Florets",
  unit: "gram",
  nutritionPer100g: {
    calories: 40,
    protein: 4.3,
    fat: 0.6,
    carbs: 3.2,
    sugar: 1.9,
    fiber: 0, // No fiber information provided
  },
  conversionFactors: {
    gram: 100,
  },
  pricePer100g: calcPrice(219, 1000),
};

export const cauliflower: Food = {
  name: "Cauliflower",
  unit: "gram",
  nutritionPer100g: {
    calories: 22,
    protein: 1.9,
    fat: 0.2,
    carbs: 2.1,
    sugar: 0, // No sugar information provided
    fiber: 0, // No fiber information provided
  },
  conversionFactors: {
    gram: 100,
  },
  pricePer100g: calcPrice(219, 1000),
};
export const celery: Food = {
  name: "Celery",
  unit: "gram",
  nutritionPer100g: {
    calories: 6,
    protein: 0.28,
    carbs: 1.19,
    fat: 0.07,
    fiber: 0.6,
    sugar: 0,
  },
  pricePer100g: 0,
};

export const chickenBreast: Food = {
  name: "Chicken Breast",
  unit: "piece",
  nutritionPer100g: {
    calories: 165,
    protein: 31,
    fat: 3.6,
    carbs: 0,
    sugar: 0,
  },
  pricePer100g: calcPrice(600, 600), // Assuming the price is 1 unit of currency
  conversionFactors: {
    piece: 1, // The base unit, so the conversion factor is 1
  },
};

export const naturjoghurt: Food = {
  name: "Naturjoghurt",
  unit: "gram",
  nutritionPer100g: {
    calories: 56,
    protein: 5.5,
    fat: 1.5,
    carbs: 5,
    sugar: 5,
  },
  pricePer100g: calcPrice(179, 1000),
  conversionFactors: {
    cup: 10 / 3,
    gram: 100,
  },
};

export const speisequark: Food = {
  name: "Speisequark",
  unit: "gram",
  nutritionPer100g: {
    calories: 68,
    protein: 11.8,
    fat: 0.3,
    carbs: 4,
    sugar: 4,
  },
  pricePer100g: calcPrice(270, 1000),
  conversionFactors: {
    cup: 10 / 3,
    gram: 100,
  },
};

export const cashews: Food = {
  name: "Cashews",
  unit: "gram",
  nutritionPer100g: {
    calories: 610,
    protein: 21,
    fat: 50,
    carbs: 15,
    sugar: 6.5,
  },
  pricePer100g: calcPrice(229, 200),
  conversionFactors: {
    cup: 10 / 3,
    gram: 100,
  },
};

export const walnuts: Food = {
  name: "Walnuts",
  unit: "gram",
  nutritionPer100g: {
    calories: 733,
    protein: 16.1,
    fat: 70.6,
    carbs: 6.5,
    sugar: 2.7,
  },
  pricePer100g: calcPrice(259, 200),
  conversionFactors: {
    cup: 10 / 3,
    gram: 100,
  },
};

export const mixedNuts: Food = {
  name: "Mixed Nuts",
  unit: "gram",
  nutritionPer100g: {
    calories: 646,
    protein: 19.8,
    fat: 58.3,
    carbs: 4.2,
    sugar: 4.2,
  },
  pricePer100g: calcPrice(289, 200),
  conversionFactors: {
    cup: 10 / 3,
    gram: 100,
  },
};

const tofu: Food = {
  name: "Tofu Natur",
  unit: "gram",
  nutritionPer100g: {
    calories: 122,
    protein: 12,
    fat: 7.1,
    carbs: 0.5,
    sugar: 0,
    fiber: 1.9,
  },
  pricePer100g: calcPrice(219, 400),
};

const oliveOilExtra: Food = {
  name: "Olive Oil Extra Virgin",
  unit: "gram",
  nutritionPer100g: {
    calories: 884,
    protein: 0,
    fat: 100,
    saturatedFat: 13.8,
    carbs: 0,
    sugar: 0,
    fiber: 0,
    salt: 0,
  },
  pricePer100g: calcPrice(1199, 916),
};


export const eggs: Food = {
  name: "Eggs",
  unit: "piece",
  nutritionPer100g: {
    calories: 143,
    protein: 13,
    fat: 10,
    carbs: 1.1,
    sugar: 1.1,
  },
  pricePer100g: 0,
};
export const spagehtti: Food = {
  name: "Spaghetti ",
  unit: "gram",
  nutritionPer100g: {
    calories: 358,
    protein: 12,
    fat: 1.5,
    saturatedFat: 0.3,
    carbs: 73,
    sugar: 1.6,
    salt: 0.02,
  },
  pricePer100g: calcPrice(99, 500),
  brand: "Rewe Ja!",
  store: "Rewe",
};
export const thunfischfilets: Food = {
  name: "Thunfischfilets in eigenem Saft",
  unit: "gram",
  nutritionPer100g: {
    calories: 101,
    protein: 23,
    fat: 0.8,
    saturatedFat: 0.3,
    carbs: 0.5,
    sugar: 0.5,
    salt: 0.75,
  },
  pricePer100g: calcPrice(149, 150),
  brand: "Rewe Ja!",
  store: "Rewe",
};
export const jungeErbsen: Food = {
  name: "Junge Erbsen",
  unit: "gram",
  nutritionPer100g: {
    calories: 59,
    protein: 5.4,
    fat: 0,
    saturatedFat: 0,
    carbs: 6.8,
    sugar: 3.5,
    salt: 0.06,
  },
  pricePer100g: calcPrice(219, 1000),
  brand: "Rewe Ja!",
  store: "Rewe",
};
export const leinsamenRossamnn: Food = {
  name: "Leinsamen Rossman",
  unit: "gram",
  nutritionPer100g: {
    calories: 543,
    protein: 23,
    carbs: 4.4,
    fat: 44,
    saturatedFat: 4.4,
    fiber: 21,
    sugar: 1,
    salt: 0.11,
    omega3: 23
  },
  pricePer100g: calcPrice(199, 400),
  brand: "enerBio",
  store: "Rossmann",
};
export const hanfsamenRossamn: Food = {
  name: "Hanfsamen Rossman",
  unit: "gram",
  nutritionPer100g: {
    calories: 646,
    protein: 31,
    carbs: 2,
    fat: 56,
    saturatedFat: 6.2,
    fiber: 8.4,
    sugar: 2,
    salt: 0.03,
    omega3: 7.8
  },
  pricePer100g: calcPrice(329, 200),
  brand: "Rossmann Bio",
  store: "enerBio",
};
export const flaxseeds: Food = {
  name: "Flaxseed",
  unit: "tablespoon",
  nutritionPer100g: {
    calories: 55,
    protein: 1.9,
    carbs: 3,
    fat: 2.8,
    fiber: 4.3,
    sugar: 0.0, // to revise
  },
  pricePer100g: 0,
};


export const banana: Food = {
  name: "Banana",
  unit: "1",
  nutritionPer100g: {
    calories: 105,
    protein: 1.29,
    carbs: 26.95,
    fat: 0.39,
    fiber: 3.1,
    sugar: 14.43, // to revise
  },
  pricePer100g: 0,
};
export const whey: Food = {
  name: "Whey Protein",
  unit: "gram",
  nutritionPer100g: {
    calories: 412,
    protein: 82,
    carbs: 4,
    fat: 7.5,
    saturatedFat: 5,
    sugar: 4,
    salt: 0.5,
    fiber: 0,
  },
  pricePer100g: calcPrice(8481, 5000)
};

export const wheyIsolate: Food = {
  name: "Whey Protein Isolate",
  unit: "gram",
  nutritionPer100g: {
    calories: 373,
    protein: 90,
    carbs: 2.5,
    fat: 0.3,
    sugar: 0.2,
    fiber: 0,
  },
  pricePer100g: calcPrice(7700, 2500)
};
const soyIsolate: Food = {
  name: "Protein Soy Isolate",
  unit: "gram",
  nutritionPer100g: {
    calories: 360,
    protein: 90,
    carbs: 1.8,
    fat: 1.5,
    saturatedFat: 0.5,
    sugar: 0.5,
    fiber: 0,
    salt: 0.5,
  },
  pricePer100g: calcPrice(29.14, 2500)
};
export const creatine: Food = {
  name: "Creatine Monohydrate",
  unit: "gram",
  nutritionPer100g: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    sugar: 0,
    fiber: 0,
  },
  pricePer100g: calcPrice(3299, 500)
};

export const kakao: Food = {
  name: "Cacao",
  unit: "gram",
  nutritionPer100g: {
    calories: 358,
    protein: 19.8,
    carbs: 8.8,
    fat: 20.7,
    sugar: 0.5,
    fiber: 27.9,
  },
  brand: "Cacao Cebe",
  store: "Rewe",
  pricePer100g: calcPrice(199, 250)
};
// export const  peeIsolate = {};
// export const  oatFlakes = {};
// export const  berries = {};
// export const  apple = {};

export const greenPeas: Food = {
  name: "Green peas",
  unit: "100g",
  nutritionPer100g: {
    calories: 301,
    protein: 21,
    carbs: 39,
    fat: 1.9,
    sugar: 2.4,
    fiber: 23,
  },
  store: "Kaufland",
  brand: "K-Classic",
  description: "ganze und ungeschälte Erbsen",
  preparation: "Put in water for 12 hours, then cook for 40-45 minutes",
  pricePer100g: 0
};

export const belugaLentils: Food = {
  name: "Beluga lentils",
  unit: "100g",
  nutritionPer100g: {
    calories: 340,
    protein: 24,
    carbs: 51,
    fat: 1.4,
    sugar: 0.7,
    fiber: 15,
  },
  pricePer100g: 0,
  store: "Kaufland",
  brand: "K-Classic",
  preparation: "Cook for 20-30 minutes",
};

export const bergLinsen: Food = {
  name: "Berg lentils",
  unit: "100g",
  nutritionPer100g: {
    calories: 344,
    protein: 25,
    carbs: 53,
    fat: 1.1,
    sugar: 0.0,
    fiber: 15,
  },
  pricePer100g: calcPrice(165, 500),
  store: "Rewe",
  brand: "Rewe Bio",
  preparation: "Cook for 25-30 minutes",
};
export const roteLinsen: Food = {
  name: "Rote lentils",
  unit: "100g",
  nutritionPer100g: {
    calories: 341,
    protein: 25.5,
    carbs: 50,
    fat: 1.5,
    sugar: 0.0,
    fiber: 15,
  },
  pricePer100g: calcPrice(165, 500),
  store: "Rewe",
  brand: "Rewe Bio",
  preparation: "Cook for 5-10 minutes",
};

export const chickpeas: Food = {
  name: "Chickpeas",
  unit: "100g",
  nutritionPer100g: {
    calories: 347,
    protein: 18,
    carbs: 49,
    fat: 6.1,
    sugar: 2.2,
    fiber: 12,
  },
  store: "Kaufland",
  brand: "K-Classic",
  pricePer100g: 0,
  preparation: "Put in water for 12 hours, then cook for 35-40 minutes",
};

export const halvedYellowPeas: Food = {
  name: "Halved yellow peas",
  unit: "100g",
  nutritionPer100g: {
    calories: 326,
    protein: 19,
    carbs: 55,
    fat: 1.2,
    sugar: 4.8,
    fiber: 10,
  },
  store: "Kaufland",
  brand: "K-Classic",
  pricePer100g: 0,
  preparation: "Cook for 30-40 minutes",
  description: "halbe gelbe Schälerbsen",
};

export const halvedGreenPeas: Food = {
  name: "Halved green peas",
  unit: "100g",
  nutritionPer100g: {
    calories: 324,
    protein: 22,
    carbs: 50,
    fat: 1.5,
    sugar: 4.5,
    fiber: 11,
  },
  store: "Kaufland",
  brand: "K-Classic",
  pricePer100g: 0,
  preparation: "Cook for 30-40 minutes",
  description: "halbe gelbe Schälerbsen",
};

export const quinoa: Food = {
  name: "Quinoa",
  unit: "100g",
  nutritionPer100g: {
    calories: 390,
    protein: 12,
    carbs: 67,
    fat: 6.6,
    sugar: 2.8,
    fiber: 5.5,
  },
  store: "DM",
  brand: "DM Bio",
  preparation: "Cook for 15-20 minutes",
  description: "tricolore",
  pricePer100g: calcPrice(199, 400),
};
export const quinoaRewe: Food = {
  name: "Quinoa",
  unit: "100g",
  nutritionPer100g: {
    calories: 370,
    protein: 12,
    carbs: 64,
    fat: 5.8,
    sugar: 3.5,
    fiber: 5.5,
  },
  pricePer100g: 500 / 1.99,
  store: "Rewe",
  brand: "Rewe Bio",
  preparation: "Cook for 15-20 minutes",
  description: "tricolore",
};

export const chiasamenRossamnn: Food = {
  name: "Chia samen",
  unit: "grams",
  nutritionPer100g: {
    calories: 461,
    fiber: 31,
    protein: 22,
    sugar: 0,
    fat: 34,
    saturatedFat: 4.2,
    carbs: 0,
    salt: 0.03,
    omega3: 19.3,
  },
  pricePer100g: calcPrice(289, 300),
  store: "Rossmann",
  brand: "enerBio",
};
export const maca: Food = {
  name: "Maca",
  unit: "grams",
  nutritionPer100g: {
    calories: 372,
    fiber: 7,
    protein: 14,
    sugar: 32,
    fat: 2,
    saturatedFat: 0,
    carbs: 71,
    salt: 0.05,
  },
  pricePer100g: calcPrice(1480, 1000),
  store: "Amazon",
  brand: "Nature Diet",
};

export const FOODS = {
  spinach,
  celery,
  flaxseeds,
  banana,
  wheyIsolate,
  //   peeIsolate,
  //   oatFlakes,
  //   berries,
  //   apple,
  maca,
  chiasamenRossamnn,
  leinsamenRossamnn,
  hanfsamenRossamn,
  jungeErbsen,
  spagehtti,
  greenPeas,
  belugaLentils,
  chickpeas,
  halvedYellowPeas,
  halvedGreenPeas,
  quinoa,
  cauliflower,
  broccoliFlorets,
  naturjoghurt,
  speisequark,
  walnuts,
  cashews,
  mixedNuts,
  chickenBreast,
  eggs,
  tofu,
  soyIsolate,
  whey,
  bergLinsen,
  roteLinsen,
  creatine,
  kakao,
  oliveOilExtra,
  thunfischfilets
};
