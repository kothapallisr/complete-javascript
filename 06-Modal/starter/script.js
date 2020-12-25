'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModel = document.querySelector('.close-modal');
let btnShowModel = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

console.log(btnShowModel);
for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener('click', openModal);
}
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
