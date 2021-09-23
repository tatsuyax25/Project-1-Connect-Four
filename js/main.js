/*----- constants -----*/
let board = [
	[0, 0, 0, 0, 0, 0, 0],  // Column 0
	[0, 0, 0, 0, 0, 0, 0],  // Column 1
	[0, 0, 0, 0, 0, 0, 0],  // Column 2
	[0, 0, 0, 0, 0, 0, 0],  // Column 3
	[0, 0, 0, 0, 0, 0, 0],  // Column 4
	[0, 0, 0, 0, 0, 0, 0],  // Column 5

];
// console.log(board, typeof (board), "This is my game board")

/*----- app's state (variables) -----*/
let player1;
let player2;
let player1Checkers;
let player2Checkers;
let turns = true;
let victory;
let tie;
let winner = false;
let loser;
// if turns = 42 then it is a tie
// that turns is also a number
// player1 is even turns player2 is odd turns
const player1Display = document.querySelector(".player1")
// console.log(player1Display);
const player2Display = document.querySelector(".player2")
const tieDisplay = document.querySelector(".tie")



/*----- cached element references -----*/
const gameBoard = document.querySelector("#board");
// const resetBtn = document.querySelector('button');


/*----- event listeners -----*/
//Syntax: element.addEventListener(event, function, UseCapture)
// board is indecating all click function
gameBoard.addEventListener('click', function (e) {
	// console.log(e.target.tagName)

	let idx = e.target.id
	// console.log(idx)
	let y = Number(idx[1])
	// console.log(x)
	let x = Number(idx[3])
	console.log(y, x, 'This are my cornets')
	// board[x][y] = 'red'
	let i = e.target
	if (e.target.tagName === 'DIV' && turns) {
		e.target.style.backgroundColor = 'red';
		board[x][y] = 'red'
	} else if (e.target.tagName === 'DIV') {
		e.target.style.backgroundColor = 'blue';
		board[x][y] = 'blue'
	}
	turns = !turns
	console.log("Check right")
	checkRight(y, x);
	console.log("Check down")
	checkDown(y, x);
	console.log("Check left")
	checkLeft(y, x);
	console.log("Check up")
	checkUp(y, x);
	checkRow()

});





// resetBtn.addEventListener('click', init);

/*----- functions -----*/
// determine if players wins, lose, or tie
// come up wit all possible combinations for win

// defind a var which is the board to index

// If a === b === c === d they are all the same color
// if they are all the same color then declare a winner

function checkDown(colIdx, rowIdx) {
	if (rowIdx > 2) return
	// if colidx is greater than 4 exit out of the function
	// otherwise if colidx lester than 4
	// if colidx if all four color are 'red' than 1 player wins
	// if all four color are 'blue' then player 2 wins
	// otherwise no one wins
	let a = document.getElementById(`c${colIdx}r${rowIdx}`).style.backgroundColor
	let b = document.getElementById(`c${colIdx}r${(rowIdx + 1)}`).style.backgroundColor || "black"
	let c = document.getElementById(`c${colIdx}r${(rowIdx + 2)}`).style.backgroundColor || "black"
	let d = document.getElementById(`c${colIdx}r${(rowIdx + 3)}`).style.backgroundColor || "black"

	console.log(a, b, c, d)



	if (b != null && c != null && d != null) {
		checkTrue(a, b, c, d)
	}
}


function checkRight(colIdx, rowIdx) {
	if (colIdx > 3) return 
	let a = document.getElementById(`c${colIdx}r${rowIdx}`).style.backgroundColor
	let b
	let c
	let d 
	if (document.getElementById(`c${(colIdx + 1)}r${(rowIdx)}`).style.backgroundColor) {
		b = document.getElementById(`c${(colIdx + 1)}r${(rowIdx)}`).style.backgroundColor
	}
	if (document.getElementById(`c${(colIdx + 2)}r${(rowIdx)}`).style.backgroundColor) {
		c = document.getElementById(`c${(colIdx + 2)}r${(rowIdx)}`).style.backgroundColor
	}

	if (document.getElementById(`c${(colIdx + 3)}r${(rowIdx)}`).style.backgroundColor) {
		d = document.getElementById(`c${(colIdx + 3)}r${(rowIdx)}`).style.backgroundColor
	}
	console.log(a, b, c, d)

	if (b != null && c != null && d != null) {
		checkTrue(a, b, c, d)
	}



}
// If a === b === c === d they are all the same color
// if they are all the same color then declare a winner

function checkUp(colIdx, rowIdx) {
	if(rowIdx < 3) return
	let a = document.getElementById(`c${colIdx}r${rowIdx}`).style.backgroundColor
	let b = document.getElementById(`c${(colIdx)}r${(rowIdx - 1)}`).style.backgroundColor || "black"
	let c = document.getElementById(`c${(colIdx)}r${(rowIdx - 2)}`).style.backgroundColor || "black"
	let d = document.getElementById(`c${(colIdx)}r${(rowIdx - 3)}`).style.backgroundColor || "black"

	console.log(a, b, c, d)

	

	if (b != null && c != null && d != null) {
		checkTrue(a, b, c, d)
	}

}

function checkLeft(colIdx, rowIdx) {
	if(colIdx < 3) return
	let a = document.getElementById(`c${colIdx}r${rowIdx}`).style.backgroundColor
	let b = document.getElementById(`c${(colIdx - 1)}r${(rowIdx)}`).style.backgroundColor || "black"
	let c = document.getElementById(`c${(colIdx - 2)}r${(rowIdx)}`).style.backgroundColor || "black"
	let d = document.getElementById(`c${(colIdx - 3)}r${(rowIdx)}`).style.backgroundColor || "black"

	console.log(a, b, c, d)
	
	if (b != null && c != null && d != null) {
		checkTrue(a, b, c, d)
	}

}

function checkRow() {
	console.log('There is a winner')
	if (winner === true && turns === true) {
		player1Display.textContent = "Player 1 Wins!"
	} 
	if (winner === true && turns === false) {
		player2Display.textContent = "Player 2 Wins!"
	}

}

function checkTrue(a, b, c, d) {
	if (a === b && a === c && a === d) {
		winner = true;
		console.log('This are all the same right', winner)
	}
}








