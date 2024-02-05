let first = document.querySelector(".first");
let container = document.querySelector(".container");


let printTag = function(event) {
    event.stopPropagation();
    console.log("CurrentTarget: \n", event.currentTarget);
    console.log("Target: \n", event.target);
    console.dir(event.target);
    

    if (event.target.classList.contains("content") ||
    event.target.classList.contains("inner")){  // true false чи є такий клас у переліку
        if (event.target.classList.contains("content")){
            event.target.classList.remove("blue"); // видаляє клас 
        } else {
            event.target.classList.toggle("blue"); // видаляє клас якщо такий присутній і додає якщо такого немає у списку 
        }
    }

};


container.addEventListener("click", printTag);
first.addEventListener("click", (e)=> {
    first.classList.toggle("blue");
    console.log("Propagated");
}, );



// addEventListener(event, handler, [options]);
// addEventListener(event, handler, true); ==> { capture: true}


// { once: true }  false по замовчуванню, виконує один раз подію
// { capture: false} true вмикає-вимикає фазу занурення
// { passive: false} true - вимикає можливість блокування вспливання