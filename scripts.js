// get waht i need 

const header = document.getElementById('header');
const menu = document.getElementById('mobile_menu');
const hamburger = document.getElementById('hamburger');
const topLine = document.querySelector('#line_t');
const middleLine = document.querySelector('#line_m');
const buttomLine = document.querySelector('#line_b');

// what to do?

hamburger.addEventListener('click', ()=> {
    header.classList.toggle('shadow-md')
    menu.classList.toggle('opacity-100');
    topLine.classList.toggle('rotate-45');
    topLine.classList.toggle('translate-y-2.5');
    middleLine.classList.toggle('opacity-0');
    middleLine.classList.toggle('-translate-x-1');
    buttomLine.classList.toggle('-rotate-45');
    buttomLine.classList.toggle('-translate-y-2.5');
});