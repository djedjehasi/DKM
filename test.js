
// arrow buttons:
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

//slides:
const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
const slide3 = document.querySelector('#slide3');
const slide4 = document.querySelector('#slide4');
const slide5 = document.querySelector('#slide5');
//array
const slide = [slide1, slide2, slide3, slide4, slide5];
let c = 0;
let n = 1;


function slideRight() {
    if (n < 5){
    slide[c].classList.toggle('w-0');
    slide[c].classList.toggle('w-[100%]');
    slide[n].classList.toggle('w-[100%]');
    slide[n].classList.toggle('w-0');

    c ++;
    n++;
    } else {
        c = 0;
        n = 1;
        slide[4].classList.toggle('w-[100%]');
        slide[4].classList.toggle('w-0')
        slide[0].classList.toggle('w-[100%]');
        slide[0].classList.toggle('w-0')
    }
}


function slideLeft (){

    slide[c].classList.toggle('w-0');
    slide[c].classList.toggle('w-[100%]');
    slide[n].classList.toggle('w-[100%]');
    slide[n].classList.toggle('w-0');

    
    
};



rightArrow.addEventListener('click', ()=> {
    slideRight();
});

leftArrow.addEventListener('click' , ()=>{
    slideLeft ();
});

