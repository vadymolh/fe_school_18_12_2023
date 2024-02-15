//  ...   spread оператор, означає розпаковку обєкта

let c1 = ["Leipzig", "Dnipro", "Abu Dabi"];
let c2 = ["London", "Kyiv", "Uzhgorod"];

// розпаковуємо в один масив
let c3 = [...c1, "Berlin", ...c2];
console.log(c3);

//Cat(...c1);


// rest оператор
let [dummy, city1, city2, ...cityArr] = c3;

console.log("City1: ",city1);
console.log("City2: ",city2);
console.log("City2: ", cityArr);


let [dummy2, cit1, cit2, cit3 = "Ternopil"] = c1;
console.log("Cit3: ",cit3);


// --------------------------- spread with objects
let person = {
    pname: "Vitaliy",
    age: 19
};


let worker = {
    salary : 12000,
    position: "Manager",
    age: 27,
    linked: [{name: "Bob"}, {name:"Rite"}]
}


let employee = {...person, ...worker};
console.log("Employee obj: ", employee);


// розпаковка обджекта
let {
    salary: var_salary, 
    position: var_job, 
    age: var_age} = employee;
    
console.group("Розбірка обджекта на змінні");
console.log(var_salary);
console.log(var_job);
console.log(var_age);
console.groupEnd();



// Використання у ф-ях
function calc (x, y, w){
    return x*y*w;
}


let nums = [1, 3, 5, 9, 83];
console.log("Function call:", calc(...nums));



// ... rest operator in functions
function printCity(city, ...cities){
    console.log("I love ", city, "!");
    if (cities){
        for (c of cities) {
            console.log("I love ", c, "!");
        }
    }
}

// передаємо у ф-ю багато вхідних даних
printCity(...c3);