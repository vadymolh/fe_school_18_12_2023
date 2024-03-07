let canvas = document.getElementById("myCanvas");


let ctx = canvas.getContext("2d");


// PATH
    // ctx.beginPath();  // 
    // ctx.moveTo(x,y);  // переміщує кисть в координату
    // ctx.lineTo(x,y);  // рисує лінію до x, y з попередньої коорд.
    // ctx.lineTo(x,y);
    
    // ctx.moveTo(x,y);
    // ctx.lineTo(x,y);

    // ctx.stroke()     // показує результат малювання
    // ctx.closePath();

//

let flag = false;
let mouseCoords = {x:0, y:0};
const rect = canvas.getBoundingClientRect()

canvas.addEventListener("mousedown", function(e){
    console.log(e);
    mouseCoords.x = e.clientX - rect.left;
    mouseCoords.y = e.clientY - rect.top;
    flag = true;

    ctx.beginPath();  // 
      
    ctx.lineTo(mouseCoords.x, mouseCoords.y);  // рисує лінію до x, y з попередньої коорд.
    ctx.stroke();
});


canvas.addEventListener("mousemove", function(e){
    if (flag){
        console.log(e);
        mouseCoords.x = e.clientX - rect.left;
        mouseCoords.y = e.clientY - rect.top;
        flag = true;

      
        ctx.lineTo(mouseCoords.x, mouseCoords.y);  // рисує лінію до x, y з попередньої коорд.
        ctx.stroke();
    }
});


canvas.addEventListener("mouseup", function(e){
    mouseCoords.x = e.clientX - rect.left;
    mouseCoords.y = e.clientY - rect.top;
    flag = false;

    ctx.lineTo(mouseCoords.x, mouseCoords.y); 
    ctx.stroke();
    ctx.closePath();  
      
    
    
});