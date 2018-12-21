let salaries = Array.of(9000);
console.log(salaries);

const amounts = [800, 810, 820]
salaries = Array.from(amounts, v => v + 100);
console.log(salaries);

// Start filling in pos 1 and 2 pos to stop at
salaries.fill(900, 1, 2);
console.log(salaries);

salaries = amounts
let result = salaries.find(value => value >= 750);
console.log(result); // returns first value found in the criteria

salaries = amounts
salaries.copyWithin(2, 0); // 2 = where to copy, 0 = item to copy
console.log(salaries);

let ids = ['A', 'B', 'C'];
// Prints out [ 0, 'A' ] [ 1, 'B' ] [ 2, 'C' ]
console.log(...ids.entries());
console.log(...ids.keys()); // Logs out 0 1 2
console.log(...ids.values()); // Logs out A B C
