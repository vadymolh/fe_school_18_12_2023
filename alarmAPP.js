const selectAlarm = document.querySelectorAll("select");

const currentTime = document.querySelector("#current-time");
const btnAlarm = document.querySelector("#btn-alarm")

let halfDay = "PM"


setInterval(()=>{
    let timeClock = new Date(),
        hour = timeClock.getHours(),
        min = timeClock.getMinutes(),
        s = timeClock.getSeconds();

        hour =  hour < 10 ? "0" + hour  : hour ;
        min =  min < 10 ? "0" + min  : min ;
        s = s<10 ? "0"+ s : s;
    currentTime.innerText = `${hour}:${min}:${s} ${halfDay}`

});


// generate options
for (let i=0; i<=12; i++){

    let option = document.createElement("option", {value:i, 
    });
    option.textContent =  i<10 ? "0"+i : i;
    selectAlarm[0].firstElementChild.insertAdjacentElement("beforebegin", option)

}


for (let i=0; i<=59; i+=5){

    let option = document.createElement("option", {value:i, 
    });
    option.textContent =  i<10 ? "0"+i : i;
    selectAlarm[1].firstElementChild.insertAdjacentElement("beforebegin", option)

}