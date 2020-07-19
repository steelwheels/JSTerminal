/**
 * main.js
 */

function main(args)
{
	Curses.start() ;

	/* Allocate field for entire screen */
	let origin   = new Point(0, 0) ;
	let fullsize = new Size(Curses.width, Curses.height) ;
	let screen   = new CComponent(origin, fullsize) ;
	screen.foregroundColor = Color.yellow ;
	screen.backgroundColor = Color.blue ;
	screen.clear() ;

	/* Allocate label */
	let label = new CLabel(new Point(10, 10), new Size(20, 5)) ;
	screen.addItem(label) ;

	/* Draw items */
	screen.draw() ;

	/* Wait until any key pressed */
	let docont = true ;
	while(docont){
		let c = Curses.inkey() ;
		if(c != null){
			switch(c){
			  case "q": docont = false ; break ;
			}
		}
	}

	Curses.end() ;
	return 0 ;
}

