let apiKey = "2905fa71465991b9694d3b1e8f56eaa1";

let btn = document.querySelector(".submit");
let cityName = "Dnipro";

function cityChange(city){
    cityName = city;
    run(cityName);
}



if (btn) {
    btn.addEventListener("click", () =>{
        let city = document.querySelector("#city-name").value;
        cityChange(city);
    } );
}


function run(city){
    $.ajax({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
        dataType: "json"

    }).done(function(data){
        let feel = data.main.feels_like - 273;
        let name = data.name;
        let temp = data.main.temp - 273;
        let icon = data.weather[0].icon;

        temp = Math.floor(temp);
        feel = Math.floor(feel)

        console.log(feel, name, temp, icon)
        HTMLrender(feel, name, temp, icon);
        
    }).fail(()=>{console.log("bad request")})
}


function HTMLrender(feel, name, temp, icon){
    $('#feel').html(`Відчувається: ${feel} C`);
    $('#name').html(name);
    $('#temp').html(`Реальна: ${temp} C`);
    $('#weather-icon').attr("src", `https://openweathermap.org/img/wn/${icon}@2x.png`)
}


run(cityName);