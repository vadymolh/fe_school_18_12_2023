

let canvas = document.getElementById("myCanvas");

console.dir(canvas);

// Canvas на весь екран
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


let ctx = canvas.getContext("2d");

if (ctx){
    console.log("Canvas context ready")
}

// Rectangle x1, x2 , width, height
ctx.strokeRect(50, 50, 100, 100);
ctx.fillRect(150, 50, 100, 110);


// CLEAR CANVAS
// .clearRect(x1,y1, width, height)
ctx.clearRect(150, 50, 100,100);

// CLEAR ALL
//ctx.clearRect(0, 0, canvas.width, canvas.height);

// Style
ctx.strokeStyle = "rgb(200, 100, 200)";
ctx.lineWidth = 6;


// line join style
ctx.lineJoin = "round";     
// ctx.lineJoin = "miter";  // norm
// ctx.lineJoin = "bevel";  // скошене



// Пунктирні лінії
ctx.setLineDash([ 20, 5, 2, 5]); // [лінія, пропуск, лінія, пропуск,]

ctx.strokeRect(50, 50, 100, 100);
ctx.strokeRect(200, 200, 100, 100);


ctx.clearRect(0, 0, canvas.width, canvas.height);


// COLOR FILTER

ctx.globalAlpha = 0.3;
ctx.fillStyle = "yellow";


//ctx.fillRect(0, 0, canvas.width, canvas.height);

let img = new Image();
img.src = "photo.jpg";
img.onload = () =>{
    let pattern = ctx.createPattern(img,"repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "green";
    ctx.fillRect(50, 50, 200, 200);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}