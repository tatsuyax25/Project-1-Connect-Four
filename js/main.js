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

// defind a var which is the board to index
function checkRow(rowIdx) {

	rowArray = board[rowIdx]
	console.log(rowArray)
	for (let colIdx = 0; colIdx < rowArray.length; colIdx++) {

		console.log(colIdx, 'do things')
		//check to the right for a winner
		checkRight(colIdx, rowIdx)
		//check down for a winner
		checkDown(colIdx, rowIdx)

	}
}

function checkDown(colIdx, rowIdx) {
	// if colidx is greater than 4 exit out of the function
	// otherwise if colidx lester than 4
	// if colidx if all four color are 'red' than 1 player wins
	// if all four color are 'blue' then player 2 wins
	// otherwise no one wins
	let a = document.getElementById(`c${colIdx}r${rowIdx}`).style.backgroundColor
	let b = document.getElementById(`c${colIdx}r${(rowIdx + 1)}`).style.backgroundColor
	let c = document.getElementById(`c${colIdx}r${(rowIdx + 2)}`).style.backgroundColor
	let d = document.getElementById(`c${colIdx}r${(rowIdx + 3)}`).style.backgroundColor

	console.log(`c${colIdx}r${(rowIdx + 1)}`)
	console.log(a)
	console.log(b)
	console.log(c)
	console.log(d)
}


function checkRight(colIdx, rowIdx) {

	let a = document.getElementById(`c${colIdx}r${rowIdx}`).style.backgroundColor
	let b = document.getElementById(`c${(colIdx + 1)}r${(rowIdx)}`).style.backgroundColor
	let c = document.getElementById(`c${(colIdx + 2)}r${(rowIdx)}`).style.backgroundColor
	let d = document.getElementById(`c${(colIdx + 3)}r${(rowIdx)}`).style.backgroundColor

	console.log(`c${colIdx}r${(rowIdx + 1)}`)
	console.log(a)
	console.log(b)
	console.log(c)
	console.log(d)

}
// If a === b === c === d they are all the same color
// if they are all the same color then declare a winner
// const redChecker = 'Player 1';
// const blueChecker = 'Player 2';
// // const tie = 'Tie'
// function getWinner(a, b, c, d) {
// 	if (a === b === c === d) {
// 		console.log("Player 1 WINS!");

// 	} else if (a === b === c === d) {
// 		console.log("Player 2 WINS!");

// 	} else {
// 		console.log("Tie");
// 	}
// }

// function findWinner() {
// 	alert(redChecker);
// 	console.log("Player 1 WINS!");
// }

// function findWinne() {
// 	alert(blueChecker);
// 	console.log("Player 2 WINS!");
// }

// function findTie() {
// 	alert(tie);
// 	console.log("Draw");
// }





