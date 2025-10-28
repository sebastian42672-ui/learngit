console.log(window, {document});
let heading = document.querySelector(`h1`)
console.log({heading});
heading.innertext = `Hello DOM!`;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, event => {
    console.log(event);
    heading .innertext = 'color';
    heading.style.color = getRandomColor();
});
setInterval() => {
        document.body.style.background = getRandomColor();
}, 10_000);

let input = document.querySelector('input');

input.addEventListener('change', event => {
    console.log(event);
    heading.innertext = input.value.split('').reverse().join('');
});