/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	enterView("welcome", function(retval){
		console.log("Result = " + retval) ;
	}) ;
}

