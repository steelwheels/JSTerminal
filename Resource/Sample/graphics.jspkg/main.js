/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	let vstat = enterView("graphics", function(retval){
		console.log("Result = " + retval) ;
	}) ;
}

