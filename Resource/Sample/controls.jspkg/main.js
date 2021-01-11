/*
 * main.js
 */

function main(args)
{
	console.log("enterView: controls") ;
	let vstat = enterView("controls", function(retval){
		console.log(  "Result = {\n" 
			    + "  check0: " + retval.check0 + "\n"
			    + "  check1: " + retval.check1 + "\n"
			    + "}") ;
	}) ;
}

