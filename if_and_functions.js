// JS is  Weak typing
let a1 = "1";
let a2 = 1;

console.log(typeof (a1-a2));
console.log(a1-a2);          //0
console.log(a2 + a1);        //11



// Boolean typing
// undefined ----> false
// -0, 0, NaN ----> false
// "", ''     ----> false

// Objects, {} ------> true


let name_ = "";
let _Name_ = "N";

// if (name_ === _Name_) {
//     alert("Names are equal!");
// } else if (name_== "") {
//     alert("Name is empty!")
// } else {
//     alert("they are not equal!");
// }


// Тернарний оператор (умова) ?  якщо true : якщо false

//name_ != _Name_ ? alert("Names are NOT equal!") : alert("Names are equal!")


let username = (name_) ? name_ : "Anonimous";

console.log(username);



// Hул оператор ??
let a = undefined, 
    b = "Viktor"; 

console.log(a ?? b ?? "Guest");


let x = 10, y = 150;

if (x>=150 || y >=150) {
    console.log("x or y >= 150")
}



//Switch operator

let color = 'greenny';

switch (color) {
    case 'blue': 
        console.log("Color is blue");
        break;
    case 'green':
        console.log("Color is green");
        break;
    case 'red':
        console.log("Color is green");
        break;
    default:
        console.log("Color is not standart");     

}


// ------------------------ Fuctions --------------------------
/*
    1. Function Declaration 
    function identifierName(arg1, arg2, arg3=0,...){

        return expression;
    }

*/
printTable();    // Виклик до оголошення проходить 

function printTable(a="None", b="None"){
    console.log(`${a}     |     ${b}`);
}



/*
    2. Function Expression
    function (arg1, arg2, arg3=0,...){

        return expression;
    }

*/


const doble = function (num){
    let res = num*2
    return res;
}

console.log(doble(9));


/*
    3. Стрілкові ф-ї (лямбда ф-ї)

    (arg1, arg2, arg3=0,...) => expression;


    (arg1, arg2, arg3=0,...) => {
        expression;
        expression;
        return res;
    }
*/

let user1 ={name_: "Mike"},
    user2 = {name_: "Neo"}; 

// Контекст функції
function greatings() {
    console.log(this);
    console.log("Greatings, ", this.name_)
}


console.log("Виклики ф-й декларацій:");
greatings();
greatings.call(user1);
greatings.call(user2);

//-----------Відсутність свого контексту у лямбда ф-й
let arrowGreat = () =>{
    console.log(this);
    console.log("Greatings, ", this.name_)
}

console.log("Виклики лямбда ф-й:");
arrowGreat();
arrowGreat.call(user1);


// Callback ф-я

const twoCalls = (a, b, callback) => {
    let new_a = doble(a);
    let new_b = doble(b);
    callback(new_a, new_b);
}

twoCalls(10, 4, printTable);


// Рекурсія
function getAge() {
    let age = +prompt("Enter your age:");
    if (typeof age === "number" && age>=0 && age<120){
        return age;
    } else {
        console.log("Unreal Age! reEnter!");
        return getAge();
    }
}

console.log(getAge());
