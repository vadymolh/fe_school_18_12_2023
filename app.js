// Console


console.group("Warning messages");
console.log("Hello I'm a script");
console.warn("Warning!!!");
console.error("Error!!!");
console.groupEnd();

// prompt confirm alert


// let answer;
// answer = window.prompt("Are you a nice persone?");  // повертає стрічку з відповіддю
// console.log(typeof answer);
// console.log(answer);


// answer = window.confirm("Підтвердіть вхід"); // повертає булеве значення true або false

// console.log(typeof answer);
// console.log(answer);


// answer = alert("Вхід в аккаунт закінчено!");





// ---------------- Оголошення змінних та констант ------------------

// let, var - змінні
// const - константи

const g = 9.8;            // посилання на Value

//g = 10; // Error! змінити не можна

// const a = [1,2,3,4];      // Reference
// a[0] = 100;
// console.log("Масив новий", a);


let x = "I am let";
var y = "I am var";


console.dir(this);
console.log(this.x);
console.log(this.y);


// Різниця між let та var
// function foo(){
//     var insideFunction = "i";
//     console.log(this);
//     if (true){
//         let a2 = "let";
//         var b2 = "var";
//         console.log(a2);
//         console.log(b2);
//         if (1){
//             console.log(a2);
//             console.log(b2);
//         }

//     }

//     console.log(b2);
//     // console.log(a2); // Error generated
//     console.log(insideFunction);

// }

// console.group("Var Let test");
// foo()

// console.groupEnd();


// правила імен
let  myVariableNew ="me";        // my_variable_new

// _continue

// Службові зарервовані слова заборонено використовувати
// await, break, case,catch, class, continue, debugger, default
// enum, switch, return

// Не починати з чисел, зі спец. знаків крім _

var h1= "Important info"
let  my1 ="me", 
     my2 = "friend",
     my3 = "friend";
  
//let my1 = 0;
// var h1 = 1;



// ------------------------- Типи даних JS --------------------------------
// Primitives   основна властивість - Imutable
    /*
        String
        Number
        BigInt
        Boolean
        Undefined
        Null
        Symbol
     */

// Objects
    /*
        Object
        Array
        Function
        Date
    */

// NaN - це властивість глобального об'Єкта
// Number.NaN



// Стрічки String
// Літерал стрічки "abc", 'abc', `abc`

// function addSurname(_name){
//     _name = _name + " Surname";
// }

// let _name = "Sergiy";   // посилаємось на конкретне значення
// let _name2 = "Sergiy";
// addSurname(_name);      // передаємо конкретне значення
// console.log(_name);

// _name = _name + "Змінено";
// let s1 = 1, s2 = 1;
// console.log("Чи рівні s1 and s2",s1===s2);


// //Оголошення стрічок
// let s = "Ron 'O' Ryan ";
// s = 'Ron \'O\' Ryan ';

// //Стрічки з виразами що обчислюються
// s = `Ron 'O' Ryan is ${2024-2005} ${_name.toUpperCase()}`

// console.log(s.length);
// console.log(s);





//-------------------------- NUMBER ----------------------------------
// Літерали  10, 9.837, .5, 0 , Number.NaN
// 
let num1 = 55,
    num2;


num1 = parseInt("2004 !Cool");
num2 = parseFloat("2.4894isnum");

console.group("Numbers");
console.log(num1);
console.log(num2);



num1 = Number("8329");
num1 = +"8329";

console.log(typeof num1);


// Math operands  (+ - * /  %   **)  бінарні (З двома операндами)
//                (+ -  ++ --)  унарні   (З одним операндом)

let x1 = 3;
let y1 = 8;
console.log("Остача: ", y1 % x1);
console.log("Степінь: ", y1 ** x1);

// Інкремент
x1++;   // x1 = x1 + 1;
x1--;   // x1 = x1 - 1;

// Префіксний 
    let res = ++y1;
    console.log("Префіксний res=", res);
    console.log("Префіксний y1=", y1    );
// Постфіксний
    res = y1++;
    console.log("Постфіксний res=", res);
    console.log("Постфіксний y1=", y1    );

console.groupEnd();

//

// Операції порівняння ==   ===  !=  !==   <   >   >=   <=
// булеві значення  true  (1)   false (0)
console.group("Порівняння ");
let k1 = 25;
let k2 = "25"

console.log( k1 == k2);
console.log( k1 === k2 );

console.log("k1 != k2", k1 != k2);
console.log("k1 !== k2", k1 !== k2 );



let obj1={}, obj2={}, obj3 = null;

console.log("Objects - ", obj1 == obj2);
console.log("Objects -", obj1 === obj2 );
console.log(typeof null);

console.groupEnd();
// -------------------------------------------



// Логічні операції 
//     &&     ||       !          в JS
//     and    or       not

// логічне і (and) логічне множення *
true && true    // 1*1  true
true && false   // 1*0  false
false && true   // 0*1  false
false && false  // 0*0  false


// логічне або (or) логічне додавання +
true || true    // 1+1  true
true || false   // 1+0  true
false || true   // 0+1  true
false || false  // 0+0  false


// let pwd = prompt("Enter new password");

// if (pwd!="" && pwd.length>=8){
//     console.log("Пароль прийнято")
// } else {
//     console.log("Не прийнято")
// }



function addSurnameObj(a){
    a._name = a._name + " Surname";
}
let a = {_name: "Sergiy"}; // посилаємось на ділянку памяті
addSurnameObj(a);          // передаємо посилання на ділянку памяті
console.log(a._name);


let mas1=[1,2],     // 0xaf038764
    mas2=[1,2],     // 0xaf458990
    mas3=[1,2];     // 0x88834700
console.log(mas1===mas2)




// ======================= Null   vs Undefined

// null має присвоюватись
let empty2 = null // null  - показує що змінна порожня
let empty1;   // undefined

console.log("Empty1 ", empty1);


if (null){

} else { alert("False")}



console.log(typeof empty1);
console.log(typeof empty2);


function isNull (val){
    return  !val &&  typeof val==="object";
}

console.log("isNull - ", isNull(empty2));