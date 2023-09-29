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
}
function movePlayer(e){
    if(e.code == "KeyW")
    {
        player.y -= 5;
    }else if(e.code == "KeyS")
    {
        player.y += 5;
    }
}