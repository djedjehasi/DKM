
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
const slides = [slide1, slide2, slide3, slide4, slide5];
let currntSlide = 0;
let nextSlide = 0;

function checkSlide(){
    for (i = 0; i < slides.length; i++ ){
        let y = slides[i].classList.contains('w-[100%]');
        if (slides[i].classList.contains('w-[100%]')){
            return slides[i]

        }
    }
}

function slideRight() {
    let  x = checkSlide();
    console.log (x);
    if(x[0] < slides.length){
        currntSlide = x[0];
        nextSlide = x[1];

        x[0].toggle('w-0');
        x[0].toggle('w-[100%]');
        x[1].toggle('w-[100%]');
        x[1].toggle('w-0');
        

    } else {
        currntSlide = slides[0];
        nextSlide = slides[1];
        currntSlide.classList.toggle('w-0');
        currntSlide.classList.toggle('w-[100%]');
        nextSlide.classList.toggle('w-[100%]');
        nextSlide.classList.toggle('w-0');
    }

    
}


rightArrow.addEventListener('click', ()=> {
    slideRight();
});

leftArrow.addEventListener('click' , ()=>{
    slideLeft ();
});
