/*
 * hello_color.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args: string[]): number
{
	setColor(Curses.black) ; 	console.print('Hello World\n')
	setColor(Curses.red) ;   	console.print('Hello World\n')
	setColor(Curses.green) ; 	console.print('Hello World\n')
	setColor(Curses.yellow) ;	console.print('Hello World\n')
	setColor(Curses.blue) ;		console.print('Hello World\n')
	setColor(Curses.magenta) ;	console.print('Hello World\n')
	setColor(Curses.cyan) ;		console.print('Hello World\n')
	setColor(Curses.white) ;	console.print('Hello World\n')
	return 0 ;
}

function setColor(color: number)
{
	let colstr = EscapeCode.color(1, color) ;
	if(colstr != null){
		console.print(colstr) ;
	}
}

