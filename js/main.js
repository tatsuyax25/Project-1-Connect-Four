/*----- constants -----*/
let board = [
    [0, 0, 0, 0, 0, 0],  // Column 0
    [0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0],  // Column 6
  ];
console.log(board, typeof(board), "This is my game board")

/*----- app's state (variables) -----*/
let player1;
let player2;
let player1Checkers;
let player2Checkers;
let turns = 0;
let victory;
let tie;
let winner;
let loser;
// if turns = 42 then it is a tie
// that turns is also a number
// player1 is even turns player2 is odd turns

/*----- cached element references -----*/
const gameboard = document.querySelector("#board");
// const cell = document.querySelectorAll("cell")
const resetBtn = document.querySelector('#reset');
const startBtn = document.querySelector('#start');

// console.log(cell)

/*----- event listeners -----*/
//Syntax: element.addEventListener(event, function, UseCapture)
// board is indecating all click function
gameboard.addEventListener('click', function(e) {
	console.log(e.target.tagName)

	let idx = Number(e.target.id)
	console.log(idx)
	let x = Math.floor(idx/7)
	console.log(x)
	let y = Math.floor(idx/7)
	console.log(y)
	// board[x][y] = 'red'
	console.log(board)

	if (e.target.tagName === 'DIV' && player1) {
	e.target.style.backgroundColor = 'red';

	} else if (e.target.tagName === 'DIV' || !player2) {
	e.target.style.backgroundColor = 'blue';

	}
	turns++
});


startBtn.addEventListener('click', function() {

})



/*----- functions -----*/
// Player turns
// function playersTurn() {
// 	return player = 
// };

// counter % 2 returns true or false
// player 1 turn true? If false player 2 turn
// define function that check if its player 1 or not 

// player1Checkers, player2Checkers
// function getColor (players) {
// 	const colors = ["red", "blue"];
// 	const index = players.length % colors.length

// 	return colors [index];
// }

// console.log(getColor(player1Checkers));
// console.log(getColor(player2Checkers));
