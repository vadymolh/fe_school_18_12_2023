const selectAlarm = document.querySelectorAll("select");

const currentTime = document.querySelector("#current-time");
const btnAlarm = document.querySelector("#btn-alarm")

let halfDay = "PM";

// ---------------------- ALARM variables -------------------------

let isAlarm = false;
let alarmTime = null;
let ring = new Audio("./files/ring.mp3");
// ----------------------------------------------------------------

btnAlarm.addEventListener("click", setAlarm);

function setAlarm(){
    // Скасувати будильник
    if (isAlarm){
        alarmTime = null
        ring.pause();
        btnAlarm.innerText = "Встановити будильник"
        isAlarm = false;
        return;
    }
    // Встановити будильник
    let hour = selectAlarm[0].value,
        min = selectAlarm[1].value,
        half = selectAlarm[2].value;

    alarmTime = `${hour}:${min} ${half}`;
    btnAlarm.innerText = "Скасувати будильник";
    
    isAlarm = true;

}

function checkAlarm(hour, min) {
    console.log("Будильник встановлено ", alarmTime , "\n Час зараз ", `${hour}:${min} ${halfDay}`);
    if (alarmTime == `${hour}:${min} ${halfDay}`){
        console.log("Alarm!");
        ring.play();
        ring.loop = true;
    }
}

setInterval(()=>{
    let timeClock = new Date(),
        hour = timeClock.getHours(),
        min = timeClock.getMinutes(),
        s = timeClock.getSeconds();

        if (hour > 12) {
            hour -=12;
            halfDay = "PM";
        }

        hour = hour==0 ? (hour=12) : hour
        hour =  hour < 10 ? "0" + hour  : hour ;
        min =  min < 10 ? "0" + min  : min ;
        s = s<10 ? "0"+ s : s;
    currentTime.innerText = `${hour}:${min}:${s} ${halfDay}`
    checkAlarm(hour,min);

}, 1000);


// generate options
for (let i=0; i<=12; i++){

    let option = document.createElement("option", {value:i, 
    });
    option.textContent =  i<10 ? "0"+i : i;
    selectAlarm[0].firstElementChild.insertAdjacentElement("beforebegin", option)

}


for (let i=0; i<=59; i+=1){

    let option = document.createElement("option", {value:i, 
    });
    option.textContent =  i<10 ? "0"+i : i;
    selectAlarm[1].firstElementChild.insertAdjacentElement("beforebegin", option)

}