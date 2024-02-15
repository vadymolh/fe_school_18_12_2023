// Створення простої Куки

let form_btn = document.querySelector('#submit');
let form = document.querySelector('#form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let days = Number(document.querySelector('#expire').value);

    console.log(name, days);
    document.cookie = `name=${name};max-age=${60*60*24*days}`
});


document.cookie = "name=Rob;";
document.cookie = "id=6;";


let cookies = document.cookie.split(";");


// Дістаємо куки
for (let i=0; i<cookies.length; i++){
    let part = cookies[i].split("="),
    key = part[0],
    value = part[1];
    document.write("Ключ:", key);
    document.write(" Значення:", value, "<br><br>");
}


// Встановлення Expires куки
let expDate = new Date();
expDate.setHours(expDate.getHours()+3);

document.cookie = "username=NewDATA;Expires=" + expDate.toUTCString();

// max-age життя куки задане в секундах
document.cookie = "user=NewUser;max-age=300";



// -------------------------------LocalStorage --------------

console.group("Local Storage")
localStorage.setItem("email", "some_mail@gmail.com");


let email = localStorage.getItem("email");
console.log("My email:", email);


//localStorage.removeItem("email");
//localStorage.clear();



//  Зберігання обєктів у локал сторейдж
let user = {name: "George", age: 14, adult: false};


let userString = JSON.stringify(user);
localStorage.setItem("user", userString);


let getUser = localStorage.getItem("user");
getUser = JSON.parse(getUser);


console.log("Юзер з локального сховища", getUser);
