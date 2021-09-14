/*----- constants -----*/
let gameBoard = [
	[0, 1, 2, 3, 4, 5, 6] // row one
	[7, 8, 9, 10, 11, 12, 13] // row two
	[14, 15, 16, 17, 18, 19, 20] // row three
	[21, 22, 23, 24, 25, 26, 27] // row four
	[28, 29, 30, 31, 32, 33, 34] // row five
	[35, 36, 37, 38, 39, 40, 41] // row six
]
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

/*----- event listeners -----*/

/*----- functions -----*/