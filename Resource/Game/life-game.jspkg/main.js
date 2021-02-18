/*
 * main.js
 */

function main(args)
{
	console.log("Life Game !!") ;
	let vstat = enterView("setup", function(retval){
		console.log("Result = " + retval) ;
	}) ;
}

