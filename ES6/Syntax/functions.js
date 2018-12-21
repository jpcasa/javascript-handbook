'use strict';

// Arrow Functions
const getPrice = () => 5.99;
console.log(getPrice());

const getPrice2 = count => count * 4;
console.log(getPrice2(2));

// With Return
const getPrice3 = (count, tax) => {
  let price = count * 4;
  price *= (1 + tax);
  return price;
}
console.log(getPrice3(2, 0.7));

// Returns the context of the code we're running
const invoice = {
  number: 123,
  process: () => console.log(this)
}
// Logs {}
invoice.process();


// Returns the context of the code we're running
const invoice2 = {
  number: 123,
  process: function() {
    return () => console.log(this.number)
  }
}
invoice2.process()();
