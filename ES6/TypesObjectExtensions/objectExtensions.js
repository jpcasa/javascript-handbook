let a =  {
  x: 1
};

let b =  {
  x: 3,
  y: 2
};

let c =  {
  z: 1
};

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);
console.log(a.y); // Logs out 2

let target = {};
Object.assign(target, a, b); // Doesn't take properties set in setPrototypeOf
console.log(target); // logs out { x: 3, y: 2 }

let amount = NaN;
console.log(Object.is(amount, amount)); // fixes the === bug
