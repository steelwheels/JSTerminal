/**
 * @file curses.js
 */

function main(args)
{
	Curses.begin() ;

	let width  = Curses.width ;
	let height = Curses.height ;

	Curses.fill(0, 0, width, height, "+") ;

	Curses.moveTo(width/2, height/2) ;
	console.print(`Hello, World !! ${width}x${height}`) ;
	
	for(let x=0 ; x<width ; x++) {
		let v = x % 10 ;
		Curses.moveTo(x, 0) ;
		console.print(`${v}`) ;

		Curses.moveTo(x, height - 1) ;
		console.print(`${v}`) ;
	}

	sleep(20) ;
	Curses.end() ;
}

