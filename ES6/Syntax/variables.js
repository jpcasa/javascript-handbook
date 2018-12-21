'use strict';

// CONSTANTS
const CONST = 100;
if (CONST > 0) {
  const CONST = 10;
}

// It will print out 100 because the scope in a closure is
// only scoped to the block.
console.log(CONST);


// Example #1
let productId = 12;
{
  let productId = 2000;
}
// It will print out 12
console.log(productId);


// Example #2
function updateProductId() {
  productId2 = 18;
}
let productId2 = 15;
updateProductId();

// It will print out 18
console.log(productId2);


// Example 3
let productId3 = 42;
for (let productId3 = 0; productId3 < 10; productId3++) {
}

// It will print out 42
console.log(productId3);
