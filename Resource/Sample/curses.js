
function main()
{
	console.log("setup curses start\n") ;

	Curses.start() ;

	let width  = Curses.width ;
	let height = Curses.height ;

	for(i=0 ; i<height ; i++){
		Curses.moveTo(0, i) ;
		console.print(i % 10) ;
	}
	for(i=0 ; i<width-1 ; i++){
		Curses.moveTo(i, 0) ;
		console.print(i % 10) ;
	}

	//Curses.moveTo(width/2, height/2) ;
	//console.log("Press any key: " + width + "x" + height) ;

	while(true){
		let c = stdin.getc() ;
		if(c != null){
			break ;
		}
	}

	Curses.end() ;

	return 0 ;
}

