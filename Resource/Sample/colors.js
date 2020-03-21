
function main(args)
{
	for(var fg=Color.min ; fg<=Color.max ; fg++){
		for(var bg=Color.min ; bg<=Color.max ; bg++){
			let fgstr  = EscapeCode.color(1, fg) ;
			let bgstr  = EscapeCode.color(0, bg) ;
			let fgname = colorName(fg) ;
			let bgname = colorName(bg) ;
			console.print(fgstr + bgstr + fgname + "/" + bgname) ;
		}
		console.print("\n") ;
	}
	console.print(EscapeCode.reset()) ;
}

function colorName(code)
{
	let result = "?" ;
	switch(code){
	  case 0:	result = "black  " ;	break ;
	  case 1:	result = "red    " ;	break ;
	  case 2:	result = "green  " ;	break ;
	  case 3:	result = "yellow " ;	break ;
	  case 4:	result = "blue   " ;	break ;
	  case 5:	result = "magenta" ;	break ;
	  case 6:	result = "cyan   " ;	break ;
	  case 7:	result = "white  " ;	break ;
	}
	return result ;
}
