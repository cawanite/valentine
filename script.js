const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const text = document.querySelector('.text');
const teddyBear = document.getElementById('teddyBear');

teddyBear.src = 'bear_roses.gif';

yesButton.addEventListener('click', () => {
  text.textContent = "Yay! I'll see you on friday 💖";
  teddyBear.src = 'bear_kissing.gif';
  yesButton.style.display = "none";
  noButton.style.display = "none";
});

noButton.addEventListener('click', () => {
  text.textContent = "Aww, you know you cant say no dummy😢";
  teddyBear.src = 'sad_bear.gif';
  noButton.style.display = "none";

  yesButton.style.left = "50%"; // Center horizontally
  yesButton.style.transform = "translateX(-50%)";
});