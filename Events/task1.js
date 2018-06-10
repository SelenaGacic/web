var div = document.querySelector('div');
var button = document.querySelector('button');

button.addEventListener('click', changeMe);

function changeMe() {
    div.classList.toggle("divic2");

}