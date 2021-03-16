
function main(args)
{
	let docont = true ;
	while(docont){
		let c = stdin.getc() ;
		let code = c.charCodeAt(0) ;
		printCode(code) ;
		docont = (c != "q") ;
	}
	return 0 ;
}

function printCode(code)
{
	let name = asciiCodeName(code) ;
	if(name == null){
		name = "?" ;
	}
	let hexcode = "0x" + code.toString(16) ;
	stdout.put(name + ":" + hexcode + "\n") ;
}

