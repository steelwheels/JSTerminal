/* stdin.js */

function main(args)
{
	let docont = true ;
	console.print("input any characters ('q' to quit)> ") ;
	while(docont){
		let c = stdin.getc() ;
		if(c != null){
			console.print(c) ;
			if(c == "q"){
				console.print("\n") ;
				docont = false ;
			}
		}
	}
	return 0 ;
}

