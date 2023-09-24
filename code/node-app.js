/*
 * Title : Basic Node App
 * Description : Understanding the basic of node js
 * Author : Kishor Paroi
 * Date : 2023/09/24
 * Time : 21:23:26
 */

// Dependencies
import { getRandomNumber } from '../node_modules/math';
import { allQuotes as _allQuotes } from '../node_modules/quotes';

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints a random quote
app.printAQuote = function printAQuote() {
    // Get all the quotes
    const allQuotes = _allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
