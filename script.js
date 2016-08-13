var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var ballRadius = 10;
var ballColor = "#0095DD";

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // ****** Ball ******
    drawBall();

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ballColor = randomColor();
    }

    if (y + dy < ballRadius) {
        dy = -dy;
        ballColor = randomColor();
    } else if (y + dy > canvas.height-ballRadius) {
        alert("GAME OVER");
        document.location.reload();
    }
    
    x += dx;
    y += dy;

    // ****** Paddle ******
    drawPaddle();

    if (rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7; 
    }
}

function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    } else if (e.keyCode === 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false;
    } else if (e.keyCode === 37) {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10); // call draw() every 10 milliseconds forever