// Three ways to create objects
let obj = {};

obj.param = 'new value';
obj['otherParam'] = 'other value';
obj['lastParam'] = 'last value';

const key = 'lastParam';

console.log(obj.param);
console.log(obj['otherParam']);
console.log(obj[key]);

let nextObj = Object.create(Object.prototype);

let lastObj = new Object();
