'use strict';

// Default Parameters for Function
const getProduct = (productId = 1000) => console.log(productId);
// Prints out 1000
getProduct();

const getTotal = (price, tax = price * 0.07) => console.log(price + tax);
// Prints out 5.35
getTotal(5);

const generateBaseTax = () => 0.07;
const getTotal2 = (price, tax = price * generateBaseTax()) => {
  console.log(price + tax);
}
getTotal2(5);
