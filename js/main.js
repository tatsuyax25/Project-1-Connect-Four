/*----- constants -----*/
let gameBoard = [
	[0, 1, 2, 3, 4, 5, 6], // row one
	[7, 8, 9, 10, 11, 12, 13], // row two
	[14, 15, 16, 17, 18, 19, 20], // row three
	[21, 22, 23, 24, 25, 26, 27], // row four
	[28, 29, 30, 31, 32, 33, 34], // row five
	[35, 36, 37, 38, 39, 40, 41] // row six
];
console.log(gameBoard, typeof(gameBoard), "This is my game board")

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
const board = document.querySelector(".game-board");
const cell = document.querySelectorAll("cell")
const reset = document.querySelector('#reset');
const start = document.querySelector('#start');

// console.log(cell)

/*----- event listeners -----*/
//Syntax: element.addEventListener(event, function, UseCapture)
// board is indecating all click function
board.addEventListener('click', function(e) {
	console.log(e.target.id)

	let idx = Number(e.target.id)
	let x = Math.floor(idx/7)
	console.log(x)
	let y = Math.floor(idx/7)
	console.log(y)
	gameBoard[x][y] = 'red'
	console.log(gameBoard)

	if (e.target.idx === 'DIV' && player1) {
	e.target.style.backgroundColor = 'red';

	} else if (e.target.idx === 'DIV' && player2) {
	e.target.style.backgroundColor = 'blue';

	}
	turns++
});

function render() {
	
}


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
