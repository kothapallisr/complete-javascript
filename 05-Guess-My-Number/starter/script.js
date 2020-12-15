'use strict';
/*
document.querySelector('.score').textContent = 19;
document.querySelector('.highscore').textContent = 20;
document.querySelector('.guess').value = 24;
document.querySelector('.number').textContent = 46;
*/

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
