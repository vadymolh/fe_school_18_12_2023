function hello(a, b) {
    console.log("Це this зараз: ", this);
}


const employee1 = {
    // властивості обєкта
    name_: "Oleg",
    age: 29,
    job: "Software Dev",
    salary: 2000,

    // методи обєкта
    sayName: function() {
        console.log(`Мене звати ${this.name_}`)
    },
    changeJob: function (newJob, salary){
        this.job = newJob;
        this.salary = salary;
    },
    sayHello: hello,
};

const employee2 = {
    // властивості обєкта
    name_: "Oksana",
    age: 23,
    job: "UI Designer",
    salary: 2000,

    // методи обєкта
    sayHello: hello,
};


window.hello();
console.dir(hello);

employee1.sayHello();
console.log(employee1.toString());


//employee2.sayHello();



// Метод   func_name.bind(thisArg, arg1, arg2,...) - створює нову ф-ю
//з переданим контекстом

hello.bind(employee2)();


// Method call(thisArg, arg1, arg2,...) - виклик ф-ї з заданим контекстом
employee1.changeJob.call(employee2, "Web Dev", 1900);
console.log(employee2);


// Method apply(thisArg, [масив аргументів]) - виклик ф-ї з заданим контекстом
employee1.changeJob.apply(employee2, ["UIX Designer", 2900]);
console.log(employee2)