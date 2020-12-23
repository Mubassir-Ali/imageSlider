const slides=document.querySelector('.slide');
const images =document.querySelectorAll('.slide img');

//Button

const preBtn =document.querySelector('#preBtn');
const nextBtn =document.querySelector('#nextBtn');

let counter =1;

//Client Screen width
let size =images[0].clientWidth;

console.log(size);


slides.style.transform='translateX('+(-size*counter)+'px)';


//Button listner
nextBtn.addEventListener('click',()=>{
    if(counter>=images.length-1) return;
    slides.style.transition="transform 0.4s ease-in-out";
    counter++;    
    slides.style.transform='translateX('+(-size*counter)+'px)';
});

preBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    slides.style.transition="transform 0.4s ease-in-out";
    counter--;    
    slides.style.transform='translateX('+(-size*counter)+'px)';
});

slides.addEventListener('transitionend',()=>{
    
    if(images[counter].id==='lastClone'){
        //slides.style.transition="none";
        counter=images.length-2;
        slides.style.transform='translateX('+(-size*counter)+'px)';
    }
    if(images[counter].id==='firstClone'){
        //slides.style.transition="none";
        console.log(`total counter: ${counter}`)
        counter=images.length-counter;
        console.log(`nextbtn counter: ${counter}`)
        slides.style.transform='translateX('+(-size*counter)+'px)';
    }
})

