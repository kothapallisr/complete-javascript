'use strict';
/*
document.querySelector('.score').textContent = 19;
document.querySelector('.highscore').textContent = 20;
document.querySelector('.guess').value = 24;
document.querySelector('.number').textContent = 46;
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔥 You lost the Game';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔥 You lost the Game';
    }
  }
});
