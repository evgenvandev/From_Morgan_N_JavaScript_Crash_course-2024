// Get a canvas for displaying the game
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

// The parameters of the ball
const BALL_SIZE = 5;
let ballPosition = {x: 20, y: 30};
// The speed of the ball along the X axis and along the axis Y
let xSpeed = 4;
let ySpeed = 2;

function draw() {
    // Filling canvas in black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    // Drawing the ball in white
    ctx.fillStyle = "white";
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);
}

function update() {
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}

function gameLoop() {
    draw();
    update();

    // Call this function again after a timeout
    setTimeout(gameLoop, 30);
}

gameLoop();
