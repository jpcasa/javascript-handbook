let employee1 = { name: 'Jake' };
let employee2 = { name: 'Chris' };

let employees = new Map();
employees.set(employee1, 'ABC');
employees.set(employee2, '123');

console.log(employees.get(employee1));

console.log(employees.size); // Logs out 2

employees.delete(employee2);
console.log(employees.size); // Logs out 1

employees.clear();
console.log(employees.size); // Logs out 0


let arr = [
  [employee1, 'ABC'],
  [employee2, '123']
];

employees = new Map(arr);
console.log(employees.size); // Logs out 2

console.log(employees.has(employee2)); // Logs out True

let list = [...employees.values()];
console.log(list); // [ 'ABC', '123' ]

list = [...employees.entries()];
console.log(list); // [ [ { name: 'Jake' }, 'ABC' ], [ { name: 'Chris' }, '123' ] ]
console.log(list[0][1]); // ABC
