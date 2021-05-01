/* file.ts */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args: string[]): number
{
	let pipe = Pipe() ;

	/* Setup writer */
	let writer = pipe.writing ;
	writer.put("Hello, world !!\n") ;
	writer.close() ;

	/* Setup reader */
	let docont = true ;
	let reader = pipe.reading ;
	while(docont){
		let c = reader.getc() ;
		if(isEOF(c)){
			docont = false ;
		} else {
			console.log("char = " + c) ;
		}
	}
	return 0 ;
}

