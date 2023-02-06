let matrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
let gameOver = false;
// Create a table
var parent = document.createElement("DIV");
parent.className = "container";
var table = document.createElement("TABLE");
var curUser = true;
for (var i = 0; i < 3; i++) {
  var tr = document.createElement("TR");
  tr.id = "" + i;

  for (var j = 0; j < 3; j++) {
    var td = document.createElement("TD");
    td.className = "cells";
    td.id = "" + i + "" + j;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

parent.appendChild(table)
document.body.appendChild(parent);

function finishGame(i){
    console.log(i+"wins")
    if(i == 0)
         document.getElementById("print-result").innerHTML = "Player 2 Wins...";
    else   document.getElementById("print-result").innerHTML = "Player 1 Wins...";
    gameOver = true;
}
function checkWin() {
  //for row
  for (let i = 0; i < 3; i++) {
    if (
      matrix[i][0] != -1 &&
      matrix[i][0] === matrix[i][1] &&
      matrix[i][1] === matrix[i][2]
    ) {
      finishGame(matrix[i][0]);
    }
  }
  //for col
  for (let i = 0; i < 3; i++) {
    if (
      matrix[0][i] != -1 &&
      matrix[0][i] === matrix[1][i] &&
      matrix[1][i] === matrix[2][i]
    ) {
      finishGame(matrix[i][0]);
    }
  }

  // check for diagonals
  if (
    matrix[0][0] ===  matrix[1][1] &&
    matrix[1][1] ===  matrix[2][2] &&
    matrix[0][0] !== -1
  ) {
    finishGame(matrix[0][0]);
     
  }

  if (
    matrix[0][2] ===  matrix[1][1] &&
    matrix[1][1] ===  matrix[2][0] &&
    matrix[0][2] !== -1
  ) {
    finishGame(matrix[0][0]);
     
  }
}

document.querySelectorAll(".cells").forEach((el) => {
  el.addEventListener("click", (event) => {
    const idName = event.target.id;
     if(gameOver) return;
    let temp = document.getElementById(idName);
     let rowIndex = idName.charAt(0) - '0';
      let colIndex = idName.charAt(1) - "0";
    if (temp.innerHTML.length) return;
    if (curUser) {
      temp.innerHTML = "X";
      curUser = !curUser;
     
      matrix[rowIndex][colIndex] = 1;
    } else {
      temp.innerHTML = "O";
      curUser = !curUser;
      matrix[rowIndex][colIndex] = 0;
    }
    checkWin();
  });
});

function resetMatrix(){
    gameOver = false;
    document.getElementById("print-result").innerHTML = "";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            matrix[i][j] = -1;
            document.getElementById(i+""+j).innerHTML = "";
        }
    }

}