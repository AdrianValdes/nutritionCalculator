//@ts-check

import { Dish } from "../types"


export const smoothieGreen: Dish = {
    ingredients: [
        { food: "spinach", amount: 100, unit: "gram" },
        { food: "celery", amount: 100, unit: "gram" },
        { food: "flaxseeds", amount: 10, unit: "gram" },
    ],
    name: "Green Smoothie",
}

export const nuttyJoguhrtBreakfast: Dish = {
    ingredients: [
        { food: "whey", amount: 25, unit: "gram" },
        { food: "naturjoghurt", amount: 30, unit: "gram" },
        { food: "speisequark", amount: 30, unit: "gram" },
        { food: "mixedNuts", amount: 20, unit: "gram" },
        { food: "creatine", amount: 2.5, unit: "gram" },
        { food: "leinsamenRossamnn", amount: 10, unit: "gram" },
        { food: "chiasamenRossamnn", amount: 10, unit: "gram" },
        { food: "maca", amount: 3, unit: "gram" },
    ],
    name: "Nutty Joguhrt Breajfast",
}
export const nuttyJoguhrtSnack: Dish = {
    ingredients: [
        { food: "wheyIsolate", amount: 25, unit: "gram" },
        { food: "naturjoghurt", amount: 30, unit: "gram" },
        { food: "speisequark", amount: 30, unit: "gram" },
        { food: "mixedNuts", amount: 20, unit: "gram" },
    ],
    name: "Nutty Joguhrt",
}

export const kakao: Dish = {
    ingredients: [
        { food: "kakao", amount: 30, unit: "gram" }
    ],
    name: "Kakao",

}
export const oliveOilExtraSpoon: Dish = {
    ingredients: [
        { food: "oliveOilExtra", amount: 14, unit: "gram" }
    ],
    name: "Olive Oil Extra Spoon",

}
export const lentilsTofu: Dish = {
    ingredients: [
        { food: "bergLinsen", amount: 75, unit: "gram" },
        { food: "tofu", amount: 200, unit: "gram" },
        { food: "spinach", amount: 150, unit: "gram" },
        { food: "broccoliFlorets", amount: 200, unit: "gram" },
        { food: "cauliflower", amount: 125, unit: "gram" },
    ],
    name: "Lentils Tofu",
}
export const lentilsChicken: Dish = {
    ingredients: [
        { food: "bergLinsen", amount: 75, unit: "gram" },
        { food: "chickenBreast", amount: 150, unit: "gram" },
        { food: "spinach", amount: 150, unit: "gram" },
        { food: "broccoliFlorets", amount: 200, unit: "gram" },
        { food: "cauliflower", amount: 125, unit: "gram" },
    ],
    name: "Lentils Chicken",
}
export const spagehttiThunfisch: Dish = {
    ingredients: [
        { food: "spagehtti", amount: 75, unit: "gram" },
        { food: "thunfischfilets", amount: 150, unit: "gram" },
        { food: "jungeErbsen", amount: 150, unit: "gram" },
        { food: "cauliflower", amount: 125, unit: "gram" },
    ],
    name: "Spaghetti Thunfisch",
}



export const DISHES = {
    smoothieGreen,
    nuttyJoguhrtBreakfast,
    kakao,
    nuttyJoguhrtSnack,
    lentilsTofu,
    lentilsChicken,
    oliveOilExtraSpoon
}

const dishNames = Object.keys(DISHES);
console.log("list of dishes", dishNames);