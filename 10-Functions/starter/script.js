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
