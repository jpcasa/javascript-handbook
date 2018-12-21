'use strict';

const showCategories = (productId, ...categories) => {
  console.log(categories);
}
// Displays [ 'search', 'advertising' ]
showCategories(123, 'search', 'advertising');

// Spread Operator ...
const prices = [12, 20, 18];
const maxPrice = Math.max(...prices);
// Logs out 20
console.log(maxPrice);

const prices2 = [12, 20, 18];
const newPrices = [...prices2];
// Logs out [ 12, 20, 18 ]
console.log(newPrices);


const maxCode = Math.max(..."43210");
// Logs out 4 because it breaks down the string
console.log(maxCode);


const codeArray = ["A", ..."BCD", "E"];
// Logs out [ 'A', 'B', 'C', 'D', 'E' ]
console.log(codeArray);
