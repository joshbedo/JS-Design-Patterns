/**
 * Constructor Pattern
 */
class Car {
  constructor(opts) {
    this.model = opts.model;
    this.year = opts.year;
    this.miles = opts.miles;
  }

  toString() {
    return `${this.model} has driven ${this.miles} miles`;
  }
}

var civic = new Car({
  model: 'Honda Civic',
  year: 2001,
  miles: 50000
});

console.group('constructor');
console.log('constructor', civic);
console.log('toString()', civic.toString());
console.groupEnd('constructor');
