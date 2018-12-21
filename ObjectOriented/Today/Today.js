class SimpleDate {
  static setDefaultDate(year, month, day) {
    // A static property can be referred to without mentioning an instance
    // Instead, it's defined on the class
    SimpleDate._defaultDate = new SimpleDate(year, month, day);
  }

  constructor(year, month, day) {
    // If constructing without arguments,
    // then initialize "this" date by copying the static default date
    if (arguments.length === 0) {
      this._year = SimpleDate._defaultDate._year;
      this._month = SimpleDate._defaultDate._month;
      this._day = SimpleDate._defaultDate._day;

      return;
    }

    // Check that (year, month, day) is a valid date
    // ...

    // If it is, use it to initialize "this" date
    this._year = year;
    this._month = month;
    this._day = day;
  }

  addDays(nDays) {
    // Increase "this" date by n days
    this._day += nDays;
  }

  getDay() {
    return this._day;
  }
}

SimpleDate.setDefaultDate(1991, 11, 18);
const defaultDate = new SimpleDate();

console.log(defaultDate.getDay());

defaultDate.addDays(5);
console.log(defaultDate.getDay());
