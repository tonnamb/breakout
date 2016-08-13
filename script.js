var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var ballRadius = 10;
var ballColor = "#0095DD";

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ballColor = randomColor();
    }

    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        ballColor = randomColor();
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10); // call draw() every 10 milliseconds forever