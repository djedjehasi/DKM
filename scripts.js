// get waht i need 

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('#hamburger');
const topLine = document.querySelector('#line_t');
const middleLine = document.querySelector('#line_m');
const buttomLine = document.querySelector('#line_b');

// what to do?

hamburger.addEventListener('click', ()=> {
    header.classList.toggle('shadow-md')
    nav.classList.toggle('opacity-100');
    //nav.classList.toggle('top-20');
    topLine.classList.toggle('rotate-45');
    topLine.classList.toggle('translate-y-2.5');
    middleLine.classList.toggle('opacity-0');
    middleLine.classList.toggle('-translate-x-1');
    buttomLine.classList.toggle('-rotate-45');
    buttomLine.classList.toggle('-translate-y-2.5');
});