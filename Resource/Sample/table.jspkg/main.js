/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	let vstat = enterView("table", function(retval){
		console.log("Result = " + retval) ;
	}) ;
}

