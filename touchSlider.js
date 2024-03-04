const sliderLine = document.querySelector(".slider-line");
const images = document.querySelectorAll(".slider-line img");


let btn_next = document.querySelector("#slider-next");
let btn_prev = document.querySelector("#slider-prev");

let current = 0;
let width = 960;


window.addEventListener("resize", init);
btn_next.addEventListener("click", getNext);
btn_prev.addEventListener("click", getPrev);


init();

//Чутливість свайпу, менше - чутливіше
const PRESIGION = 40;


function init (){
    // вираховуємо поточну ширину контейнера
    width = document.querySelector(".slider").offsetWidth;

    // застосовуємо ширину для кожного зображення
    images.forEach( (img)=>{
        img.style.width = `${width}px`
    });
}


// Функція анімації
function roll(){
    sliderLine.style.transform = `translate(-${current*width}px)`
}


// Right Left moves
function getNext(){
    current++;
    if (current >= images.length){
        current = 0;
    }
    roll();
}

function getPrev(){
    current--;
    if (current < 0){
        current = images.length - 1;
    }
    roll();
}




// ---------------------- TOUCH FUNCTIONALITY ---------------------------

let sliderSurface = document.querySelector(".slider");
let x1,y1,x2,y2;


sliderSurface.addEventListener("touchstart", touchStart);
sliderSurface.addEventListener("touchmove", touchMove);
sliderSurface.addEventListener("touchend", touchEnd);

function touchStart(event){
    event.preventDefault();
    
    const point = event.touches[0];
    x1 = point.clientX;
    y1 = point.clientY;
    console.log("Touch start: ", x1, "  ", y1);
}

function touchMove(event){
    event.preventDefault();
    const point = event.touches[0];
    x2 = point.clientX;
    y2 = point.clientY;
}


function touchEnd(event){
    event.preventDefault();
    console.log("Touch End: ", x2, "  ", y2);

    if (!x1 || !y1 || !x2 || !y2) return; // if (!x) //     !undefined ==> true

    let dX = Math.abs(x2-x1);
    let dY = Math.abs(y2-y1);
    
    if (dX > dY){
        if (x2-x1 > PRESIGION) {
            getPrev();
        } else if (x1-x2 > PRESIGION){
            getNext();
        }
    }

    x1 = null; x2 = null;
    y1 = null; y2 = null;
    
}