/* Number guessing game */

function main(args)
{
	let target = Math.randomInt(0, 10) ;
	//console.print("target value = " + target + "\n") ;

	let docont = true ;
	while(docont) {
		console.print("Input number between 0 to 10 > ") ;
		let line = Readline.input() ;
		let no   = parseInt(line) ;
		if(isNaN(no)) {
			console.print("Is not number\n") ;
		} else {
			if(target == no) {
				console.print("Matched !!\n") ;
				docont = false ;
			} else if(target < no) {
				console.print("More small\n") ;
			} else {
				console.print("More big\n") ;
			}
		}
	}
	return 0 ;
}

