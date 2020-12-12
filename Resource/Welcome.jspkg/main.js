/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	let vstat = enterView("welcome") ;
	console.log("vstat = " + vstat) ;

	while(!vstat.readyToReturn){
		sleep(0.5) ;
	}

	let retval = vstat.returnValue ;
	console.log("Result = " + retval) ;
}

