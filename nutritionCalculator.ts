//@ts-check
"use strict";

import { calculate } from "./src/helpers.ts";
import { DISHES } from "./src/dishes.ts";
import { DishName } from "./types.ts";

// Get the dish name from the command line arguments
const dishName = process.argv[2] as DishName;

// Check if the dish name is provided
// /**
//  * Check if the dish name is provided
//  * @param {string | undefined} dishName - The provided dish name
//  * @returns {boolean} - True if the dish name is provided and exists, false otherwise
//  */
// function isDishNameValid(dishName: string | undefined): boolean {
//     return !!dishName && DISHES?.[dishName] !== undefined;
// }
// @ts-ignore
if (!dishName) return console.error("Please provide a valid dish name. You provided none.");

if (!DISHES?.[dishName]) {
    // If the dish name is not found, suggest similar dish names
    const suggestedDishes = suggestDishes(dishName);

    if (suggestedDishes.length > 0) console.error(`Dish not found. Did you mean one of these: ${suggestedDishes.join(', ')}?`)

    process.exit(1);
}

// Calculate and log the result
// @ts-ignore
console.log(calculate(DISHES?.[dishName]));

/**
 * Function to suggest similar dish names
 * 
 * @param {string} input - The input dish name
 * @returns {string[]} - An array of suggested dish names
 */
function suggestDishes(input: string): string[] {
    const dishNames = Object.keys(DISHES);
    const lowerInput = input?.toLowerCase();

    // Filter dishes based on partial matches
    const suggestions = dishNames.filter(dish => dish.toLowerCase().includes(lowerInput));

    // If no suggestions based on partial matches, try a different approach
    if (suggestions.length === 0) {
        // Check for similarity based on Levenshtein distance or any other similarity metric
        const similarityThreshold = 0.6; // Adjust as needed
        const similarDishes = dishNames.filter(dish => calculateSimilarity(lowerInput, dish.toLowerCase()) > similarityThreshold);

        // Return the similar dishes if any
        return similarDishes;
    }

    return suggestions;
}

/**
 * Calculate Levenshtein distance between two strings.
 * 
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {number} - Levenshtein distance
 */
function calculateLevenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];

    // Initialize the matrix with distances
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the matrix with distances
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1, // Deletion
                matrix[i][j - 1] + 1, // Insertion
                matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    // Return the Levenshtein distance
    return matrix[b.length][a.length];
}

/**
 * Calculate similarity score between two strings using Levenshtein distance.
 * 
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Similarity score (0 to 1)
 */
function calculateSimilarity(str1: string, str2: string): number {
    const distance = calculateLevenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);

    // Calculate similarity as a ratio of the distance to the maximum length
    return 1 - distance / maxLength;
}

// Example usage
// const similarityScore = calculateSimilarity("nuttyJoguhrtSnack", "nuttyJoguhrt");
// console.log(`Similarity Score: ${similarityScore}`);
