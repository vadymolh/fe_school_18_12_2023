let today = new Date();
//today = Date.now();

console.log(today.toDateString());


let date2 = new Date(2000, 12, 31);
console.log(date2);

// Методи getters
console.log(today.getUTCHours());
console.log(today.getUTCMinutes());


// Методи setters
console.group("DATE Setters")
console.log(today.setUTCHours(3));
console.log(today.setUTCMinutes(56));

console.log(today.getUTCHours());
console.log(today.getUTCMinutes());
console.groupEnd();


// Формат має відповідати: YYYY-MM-DDTHH:mm:ss.sssZ

let s = "2012-01-26T12:50:50.499";

let dateFromString = Date.parse(s);
console.log(dateFromString);


// Додати години до дати 
today.setUTCHours(today.getUTCHours()+25);
console.log(today.toLocaleTimeString());