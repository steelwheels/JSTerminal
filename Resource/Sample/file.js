/* file.js */

function main(args)
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
		let c= reader.getc() ;
		if(c != null){
			if(c == EOF){
				docont = false ;
			} else {
				console.log("char = " + c) ;
			}
		}
	}
	return 0 ;
}

