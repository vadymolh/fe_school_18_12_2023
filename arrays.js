// Оголошення масивів
let animals = new Array("dog", "eagle", "monkey", "fish"); // через конструктор 
let arr = [1, 2, "Name1", "Name2", true, [], []];  // через літерал 


console.log(arr); 
arr[2] = "Mike";
console.log(arr[2]);


// особливість
// arr[101] = "new elem";
// console.log(arr); 


// console.log(arr.length);



// перевірка на масив
console.log("перевірка", Array.isArray(arr));

console.log(arr.toString());


// ================== REDUCE -----------------------------------------
// arr.reduce(function(acumulator, item, index, array), intialAccumulator)

let nums = [9, 6, 4, 2, 7, 10];

let result = 0;

// 1. acc=1, x=9
// 2. acc=9, x=6
// 3. acc=51, x=4
// 4. acc 204, x=2

// щоб перемножити елементи
result = nums.reduce((acc, x, index)=>{
    if (index==4){return acc;}    // виключили знсчення 7 з індексом 4
    return acc*x;
} , 1)



// ======================== MAP=========================
// arr.map(function(item, index, array)) - повертає новий масив

let resultArray = animals.map((one_animal) => one_animal.length);

console.log("Довжина імен тваринок:", resultArray);



// ======================== FILTER ========================
// arr.filter(function(item, index, array, thisArg)) 

console.log("Фільтр менше 5:", resultArray.filter((num)=> num<=4 ));

console.log( "Фільтр розлого:",
resultArray.filter(function(num){
    if (num<=4){
        return true;
    } else {
        return false;
    }

})
);


// Наповнення та вилучення елементів

let addArray = [1,2,3,4,5,6,7,8];
console.log(addArray);
addArray.push("End item");     // додаємо в кінець
console.log(addArray);

addArray.unshift("Start item");     // додаємо на початок
console.log(addArray);



console.log(addArray.pop());     //  вилучаємо з  кінеця
console.log(addArray);


console.log(addArray.shift());     //  вилучаємо з  початку
console.log(addArray);


console.log(addArray.reverse());

delete addArray[7];
console.log(addArray);


//  Позбавитись вкладених масивів
let arr3 = [1,3,4, ["a", "b", "c"]];
console.log(arr3.flat(Infinity));


// SPLIT
let s = "Lutsk, Nizhun, Zhutomyr, Dnipro";

let arr4 = s.split(", ");
console.log(arr4);


// Перебір масиву циклом
for (item of arr4){
    console.log(item);
    document.write(`<h2>${item}</h2>`)
}

// continue break
for(let i=0; i<arr4.length; i++){
    if (arr4[i]=="Zhutomyr"){
        continue;
    }
    console.log(arr4[i]);
}

console.clear();
console.log(addArray);


// ------------------- foreach ----------------------
// arr.foreach(function(item, index, array){}) 

addArray.forEach((num)=>{
    if (num<10 && num>3){
        console.log(num);
    }
});


// ---------------- .sort(function(a, b){}) -----------------


console.log(arr4);
arr4.sort(function(a, b){
    //якщо а менше b то повертаємо -1
    // якщо а ,більше b то повертаємо +1

    if (a.length > b.length){
        return 1;
    }

    if (a.length < b.length){
        return -1;
    }
});

console.log(arr4);