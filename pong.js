let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

let playerwidth = 10;
let playerheight = 50;

let player = {
    x : 30,
    y : boardHeight/2,
    width : playerwidth,
    height : playerheight
}
let ballWidth = 10;
let ballHeight = 10;
let ball = {
    x : boardWidth/2,
    y : boardHeight/2,
    width : ballWidth,
    height : ballHeight,
    velocityX : 1,
    velocityY : 2
}

window.onload = function(){
    board= document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
    
    document.addEventListener("keydown", movePlayer);
    requestAnimationFrame(update);
}
function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);
    context.fillStyle = "white";
    context.fillRect(player.x, player.y, player.width, player.height);

    context.fillStyle = "white";
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    context.fillRect(ball.x, ball.y, ballWidth, ballHeight);

    if(ball.y <= 0 || ball.y + ball.height >= boardHeight)
    {
        ball.velocityY *= -1;
    }
    if(ball.x <= 0 || ball.x + ball.width >= boardWidth)
    {
        if(ball.x <= 0)
        {
            Respawn();
            return;
        }
        ball.velocityX *= -1;
    }
    if(DetectCollision(player, ball))
    {
        ball.velocityX *= -1;
        if(ball.y > player.y + 50 || ball.y - 10 < player.y)
        {
            ball.velocityY *= -1;
        }
    }
}
function movePlayer(e){
    if(e.code == "KeyW" && player.y != 0)
    {
        player.y -= 5;
    }else if(e.code == "KeyS")
    {
        if(player.y == 450)
        {
            return;
        }
        player.y += 5;
    }
}
function Respawn(){
    player.y = boardHeight/2;
    ball.x = boardWidth/2;
    ball.y= boardHeight/2;
}
function DetectCollision(a, b) {
    return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}