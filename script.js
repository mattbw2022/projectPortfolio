let lightbulbOn = document.getElementsByClassName('lightbulbOn');
let lightblubOn = document.getElementsByClassName('lightbulbOff');
let headerName = document.getElementsByTagName('h1');
let header = document.getElementsByTagName('header');

function up() {
    lightblubOn.style.bottom = '-5.5em';
    lightblubOn.style.display = 'flex';
}

headerName.onmouseover = up();