/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Sumit Saha (Learn with Sumit)
 * Date: 11/09/19
 *
 */

// Dependencies
import { readFileSync } from 'fs';

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = readFileSync('../lib/quotes/quotes.txt', 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};

// Export the library
export default quotes;
