class Restaurant {
  constructor(name, city) {
    console.log(`${name} in ${city}`);
  }
}

let r = Reflect.construct(Restaurant, ['Subway', 'MUY']);
