/*----- constants -----*/
let board = [
	[0, 0, 0, 0, 0, 0, 0],  // Column 0
	[0, 0, 0, 0, 0, 0, 0],  // Column 1
	[0, 0, 0, 0, 0, 0, 0],  // Column 2
	[0, 0, 0, 0, 0, 0, 0],  // Column 3
	[0, 0, 0, 0, 0, 0, 0],  // Column 4
	[0, 0, 0, 0, 0, 0, 0],  // Column 5

];
console.log(board, typeof (board), "This is my game board")

/*----- app's state (variables) -----*/
let player1;
let player2;
let player1Checkers;
let player2Checkers;
let turns = true;
let victory;
let tie;
let winner;
let loser;
// if turns = 42 then it is a tie
// that turns is also a number
// player1 is even turns player2 is odd turns

/*----- cached element references -----*/
const gameBoard = document.querySelector("#board");
// const cell = document.querySelectorAll("cell")
// const resetBtn = document.querySelector('#reset');
// const startBtn = document.querySelector('#start');

// console.log(cell)

/*----- event listeners -----*/
//Syntax: element.addEventListener(event, function, UseCapture)
// board is indecating all click function
gameBoard.addEventListener('click', function (e) {
	console.log(e.target.tagName)

	let idx = e.target.id
	console.log(idx)
	let y = Number(idx[1])
	// console.log(x)
	let x = Number(idx[3])
	console.log(y)
	// board[x][y] = 'red'
	console.log(board)
	let i = e.target
	if (e.target.tagName === 'DIV' && turns) {
		e.target.style.backgroundColor = 'red';
		board[x][y] = 'red'
	} else if (e.target.tagName === 'DIV') {
		e.target.style.backgroundColor = 'blue';
		board[x][y] = 'blue'
	}
	turns = !turns
});

/*----- functions -----*/
// determine if players wins, lose, or tie
// come up wit all possible combinations for win
// let winningArray = [
//     
//     ]

function checkWin(){
    for (let i = 0; i < winCondition.length; i++){
        for (let j = 0; j < 1; j++){
            if (document.getElementById(`${winCondition[i][j]}`).style.backgroundColor != ''){
                let a = document.getElementById(`${winCondition[i][j]}`).style.backgroundColor
                let b = document.getElementById(`${winCondition[i][j + 1]}`).style.backgroundColor
                let c = document.getElementById(`${winCondition[i][j + 2]}`).style.backgroundColor
                let d = document.getElementById(`${winCondition[i][j + 3]}`).style.backgroundColor

                if (a == b && b == c && c == d){
                    results.innerHTML = 'Player wins'
                }
            }
        }
    }
}