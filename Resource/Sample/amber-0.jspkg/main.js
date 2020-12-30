/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	let vstat = enterView("buttons", function(retval){
		console.log("Result = " + retval) ;
	}) ;
}

