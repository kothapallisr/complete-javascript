'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModel = document.querySelector('.close-modal');
let btnShowModel = document.querySelectorAll('.show-modal');
console.log(btnShowModel);
for (let i = 0; i < btnShowModel.length; i++) {
  console.log(btnShowModel[i].textContent);
}
