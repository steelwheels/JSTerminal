/*
 * enum-0.js
 */

function main(args)
{
	let result = true ;

	console.print("*** enum-0.js\n") ;

	console.print(" - FontSize: " + FontSize.small) ;
	if(FontSize.small == 11){
			console.print(" -> OK\n") ;
	} else {
			console.error(" -> Invalid value\n") ;
			result = false ;
	}

	console.print(" - TextAlign: " + TextAlign.center) ;
	if(TextAlign.center == 2){
			console.print(" -> OK\n") ;
	} else {
			console.error(" -> Invalid value\n") ;
			result = false ;
	}

	if(result){
		console.print("Summary: OK\n") ;
	} else {
		console.print("Summary: Error\n") ;
	}
	return 0 ;
}

