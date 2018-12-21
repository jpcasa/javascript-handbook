'use strict';

//  WITH ARRAYS
let salary = [3200, 5000, 8000];
let [ low, average, high ] = salary;
// Prints out 5000
console.log(average);

let salary2 = [3200, 5000, 8000];
let [ low2, ...remaining ] = salary2;
// Prints out [ 5000, 8000 ]
console.log(remaining);

// WITH OBJECTS
let salary3 = {
  low3: 3000,
  average3: 5000,
  high3: 7000
};
let { low3, average3, high3 } = salary3;
// Prints out 7000
console.log(high3);


let salary4 = {
  low4: 3000,
  average4: 5000,
  high4: 7000
};
let { low4: newLow, average4: newAvg, high4: newHigh } = salary4;
// Prints out 7000
console.log(newHigh);
