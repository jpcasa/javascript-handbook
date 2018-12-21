class Perks extends Array {
  sum() {
    let total = 0;
    // this refers to the array
    this.map(v => total += v);
    return total;
  }
}

let a = Perks.from([5, 10, 15]);

console.log(a);
console.log(a.sum()); // 30
