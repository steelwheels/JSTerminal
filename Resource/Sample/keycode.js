
function main(args)
{
	let c     = "?" ;
	let prevc = "-" ;
	while(c != "q"){
		c = stdin.getc() ;
		if(c != null && c != prevc){
			let len = c.length ;
			for(let i=0 ; i<len ; i++){
				let code = c.charCodeAt(i) ;
				printCode(code) ;
			}
			prevc = c ;
		}
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

