//-------------------- Syncronous code
let callback = function(name){
    console.log(`Я колбек ф-я ${name}`);
    //setTimeout(callback, 3000, "Name");
}


console.log("Action 1");
console.log("Action 2");
console.log("Action 3");




// --------------------- Async code -------------------
document.addEventListener("click", ()=>{
    console.log("Just a click!");
    clearTimeout(idTimer);               // метод для скасування таймера
    clearInterval(idInterval);
})




// Таймер виконання setTimeout()
// виконує 1 раз функцію або колбек
// setTimeout(func|code, [delay], [arg1], [arg2])

var idTimer = setTimeout(callback, 3000, "Name");

// виконує функцію або колбек через встановлений delay
// setTimeout(func|code, [delay], [arg1], [arg2])
var idInterval = setInterval(callback, 1000, "Name");




// Домашка
let current = new Date();

let time = 5 // хвилин таймер
let timerDate = new Date(current);
timerDate.setMinutes(timerDate.getMinutes() + time);


let riznytsa = timerDate.getTime() - current.getTime();
console.log(riznytsa);

setInterval(()=>{
    current = new Date();
    let riznytsa = timerDate.getTime() - current.getTime();
    console.log(riznytsa/1000);
}, 1000);
$("div#progress").css("width", "40%");