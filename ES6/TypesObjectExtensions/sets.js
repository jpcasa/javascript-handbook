let perks = new Set();

perks.add('Car');
perks.add('Vacation');
perks.add('Car');
perks.add('Jet');

// prints 2 because all of the items of the set have to be unique
console.log(perks.size);

console.log(perks.has('Jet')); // true
console.log(perks.has('Cool Hat')); // false

console.log(...perks.keys()); // Car Vacation Jet
console.log(...perks.values()); // Car Vacation Jet
console.log(...perks.entries()); // [ 'Car', 'Car' ] [ 'Vacation', 'Vacation' ] [ 'Jet', 'Jet' ]

perks = new Set([
  {id: 1},
  {id: 1}
]);

// 2 because object literals are unique
console.log(perks.size);
