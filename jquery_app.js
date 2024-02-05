// $- скорочене посилання на всю бібліотеку
// $() - створює jQuery object

// Чекаємо завантаження DOM
$(document).ready(
    function () {
        console.log("Document READY");
    }
);

// Скорочений запис Чекаємо завантаження DOM
$(function () {
    console.log("Document READY");
});


// Зміна атрибутів тегів
// Getter
console.log($("h1").css("color") );

//Setter
$("h1").css("color", "blue");
$("a").attr("target", "_blank");

$("span").css({
    color: "red",
    background: "orange",
});


console.log("jQuery h1 object: ", $("h1"));
console.log(document.querySelector("h1"));



// Selectors
$(document).ready(
    function(){
    $("ul#list li:first").css("color", "blue");
    $("ul#list li:last").css("color", "orange");
    $("ul#list li:even").css("background", "yellow");
    $("ul#list li:odd").css("background", "purple");

    $("ul#list li:nth-child(3)").css("color", "green");
}
    
);


// Додавати нові елементи
$(".newtext").html("<h2>Generated POST!</h2>");
$(".newtext h2").text("Generated POST!TEST");


// append prepend
$("ul").append("<li>Generated last</li>"); // додаємо вкінець
$("ul").prepend("<li>Generated Перший</li>"); // додаємо на початок


// before after
$("ul").before("<h2>List of toDo:</h2>");
$("ul").after("<h2>The End of toDos:</h2>");



// Ф-ї для маніпуляцій з classList
let par2 = $("#par2");
par2.addClass("par2-newcolor");     //додати новий клас
par2.removeClass("par2-newcolor")   //видалити новий клас

// ----------------- Events in jQuery ------------------------


$(":submit").click(function(e){
    e.preventDefault();
    console.log("Submit");
    par2.toggleClass("par2-newcolor");
})

//$("ul").empty();
$("ul").detach();// видаляє елемент



$("body").on("mousemove", function(e){
    $(".coords").html("Координати X:" + e.clientX + " Y:" + e.clientY);
});



// Dynamic Events
// $(staticAncestor).on(eventName, dynamicChild, callback)
$("ul").on("click", "li", function(e){
    console.log(e.target);
});


$("ul").append("<li>Generated last</li>"); 
$("ul").append("<li>Generated last</li>"); 


//$("ul").off("click");