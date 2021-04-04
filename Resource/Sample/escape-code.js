/**
 * escape-code.js
 */

function main(args)
{
	let ecode =   "01234567890123456789\n"
		    + "abcdefghijklmnopqrst\n"
		    + "01234567890123456789\n"
		    + "abcdefghijklmnopqrst\n"
		    + "01234567890123456789\n"

	ecode +=   EscapeCode.cursorUp(1)		// ... 678|9
		 + "*" ;

	/*
		jsh> run
		01234567890123456789
		abcdefghijklmnopqrst
		01234567890123456789
		abcdefghijklmnopqrst
		*|1234567890123456789	| ... cursor

		----- Bye
	 */
	ecode +=   EscapeCode.cursorForward(3)
		 + EscapeCode.cursorUp(3)
		 + EscapeCode.delete()
		 + "+" ;
	/*
		01234567890123456789
		abc+fghijklmnopqrst
		01234567890123456789
		abcdefghijklmnopqrst
		*1234567890123456789

		----- Bye
	 */
	ecode +=   EscapeCode.cursorBackward(1)
		 + EscapeCode.cursorDown(1)
		 + EscapeCode.delete()
		 + "-" ;

	/*
		01234567890123456789
		abc+fghijklmnopqrst
		01-4567890123456789
		abcdefghijklmnopqrst
		*1234567890123456789

		----- Bye
	 */
	ecode +=   EscapeCode.cursorNextLine(3)
		 + "$" ;

	/*
		01234567890123456789
		abc+fghijklmnopqrst
		01-4567890123456789
		abcdefghijklmnopqrst
		*1234567890123456789
		$
		----- Bye
	 */
	ecode +=   EscapeCode.cursorPreviousLine(5)
		 + EscapeCode.delete()
		 + "/" ;

	/*
		/1234567890123456789
		abc+fghijklmnopqrst
		01-4567890123456789
		abcdefghijklmnopqrst
		*1234567890123456789
		$
		----- Bye
	 */
	ecode +=   EscapeCode.cursorNextLine(99)	// Move to last

	console.print(ecode) ;

	console.print("----- Bye\n") ;
	return 0 ;
}

