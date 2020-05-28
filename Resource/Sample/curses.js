
function main()
{
	console.log("setup curses start\n") ;

	Curses.start() ;

	let width  = Curses.width ;
	let height = Curses.height ;

	/* Left: top -> bottom */
	for(i=0 ; i<height ; i++){
		Curses.moveTo(0, i) ;
		console.print(i % 10) ;
	}
	/* Right: top -> bottom */
	for(i=0 ; i<height ; i++){
		Curses.moveTo(width-1, i) ;
		console.print(i % 10) ;
	}

	/* Top: left -> right */
	for(i=0 ; i<width ; i++){
		Curses.moveTo(i, 0) ;
		console.print(i % 10) ;
	}
	/* Bottom: left -> right */
	for(i=0 ; i<width ; i++){
		Curses.moveTo(i, height-1) ;
		console.print(i % 10) ;
	}

	/* Cross */
	for(i=0 ; i<width ; i++){
		let y0 = Math.floor(i * height / width) ;
		Curses.moveTo(i, y0) ;
		console.print(i % 10) ;

		let y1 = height - 1 - y0 ;
		Curses.moveTo(i, y1) ;
		console.print(i % 10) ;
	}


	while(Curses.inkey() == null){
		sleep(0.1) ;
	}

	Curses.end() ;

	return 0 ;
}

