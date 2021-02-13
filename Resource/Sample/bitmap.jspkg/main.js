/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	let vstat = enterView("bitmap", function(retval){
		console.log("Result = " + retval) ;
	}) ;
}

