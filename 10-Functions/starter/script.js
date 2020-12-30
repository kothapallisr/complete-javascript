'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👏');
};

document.body.addEventListener('click', high5);
// functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey!');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hi!')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello!')('Jonas');

// call method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

lufthansa.book(245, 'John Cooper');
lufthansa.book(366, 'Jonas Schmedtmann');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 633, 'Mary Cooper');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air line',
  iataCode: 'LX',
  bookings: [],
};
const flightData = [456, 'George Cooper'];
const flightData2 = [367, 'Mini Cooper'];
book.call(swiss, ...flightData);
console.log(swiss);

// apply method
book.apply(swiss, flightData2);
console.log(swiss);

// bind method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
bookLH(366, 'Jane Cooper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log('THIS', this);
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.11, 300));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.12);
console.log(addVAT2(200));

// IIFE: Immediately Invoked Function Expression
(function () {
  console.log('This function will never run again!');
})();
(() => console.log('This function will ALSO never run again!'))();

// closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
