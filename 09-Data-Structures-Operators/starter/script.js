'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,
};

let [s1, s2] = restaurant.starterMenu;
let [m1, m2] = restaurant.mainMenu;
console.log(s1, s2);
[m1, m2] = [m2, m1];
console.log(m1, m2);
const {
  openingHours: { thu: th, fri: fr },
} = restaurant;
console.log(th, fr);

let a = 5;
let b = 6;
console.log(a, b);
({ open, close } = restaurant.openingHours.thu);
console.log(open, close);

// spread operator ...
console.log(...restaurant.mainMenu);
//const menu = { ...restaurant.starterMenu, ...restaurant.mainMenu };
const roll = [1, 3, 5, 6, 7, 8, 9];
console.log(roll);
console.log(...roll);

// rest pattern and parameters
let [n1, n2, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(n1, n2, arr);

// use ANY data type, return ANY data type, short-circuiting

// --- OR ---
console.log(23 || 'Jonas');
console.log('' || 'Jonas');
console.log(undefined || null);
console.log(23 || '');

// --- AND ---
console.log(23 && 'Jonas');
console.log('' && 'Jonas');
console.log(undefined && null);
console.log(23 && null);

restaurant.numGuests = 0;
let guests = restaurant.visitors || 10;
console.log(guests);
guests && console.log(`Total guests: ${guests}`);

// Nullish Coalescing operator ??
let guestCorrect = restaurant.numGuests ?? 10;
console.log(`Total guests: ${guestCorrect}`);

// for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let item of menu) {
  console.log(item);
}
console.log('--- Restaurant Menu ---');
for (let [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
