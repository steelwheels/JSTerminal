/*
 * main.js
 */

function main(args)
{
	console.log("Hello, world !!") ;
	if(enterView("buttons")){
		let retval = waitUntilActivate() ;
		console.log("Result = " + retval) ;
	} else {
		console.log("[Error] Failed to open new view") ;
	}
}

