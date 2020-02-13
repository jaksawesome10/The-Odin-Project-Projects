
var game = new GameBoard(
  [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]
);

drawBoard();

function GameBoard(board){
  this.board = board;
}

function drawBoard(){
  var boardDOM = document.getElementById("gameboard");
  for(var i = 0; i < game.board.length; i++){
    var row = document.createElement("div");
    row.className = "row " + i;
    boardDOM.appendChild(row);
    for(var j = 0; j < game.board[i].length; j++){
      var tile = document.createElement("div");
      tile.className = "tile " + j;
      tile.onclick = function(){
        console.log(row.className + "\n" + tile.className);
        //takeSpot(tile);
      }
      row.appendChild(tile);
    }
  }
}

function render(){
  for(var i = 0; i < GameBoard.board.length; i++){
    for(var j = 0; j < GameBoard.board[i].length; j++){

    }
  }
}

function takeSpot(x, y){

}
