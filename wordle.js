let board;
let boardWidth = 256;
let boardHeight = 256;
let context;
let knight = {
    x : boardWidth,
    y : boardHeight,
    width : 16,
    height : 16
}
window.onload = function(){
    board= document.getElementById("board");
    board.height = boardHeight * 2;
    board.width = boardWidth * 2;
    context = board.getContext("2d");
    knightImg = new Image();
    knightImg.src = "./knight.png";
    requestAnimationFrame(update);
}
function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(knightImg, knight.x, knight.y, knight.width * 2, knight.height * 2);
}