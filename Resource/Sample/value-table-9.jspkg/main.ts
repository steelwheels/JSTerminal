/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>

function main(args : [string])
{
	console.print("# value-table-9\n") ;
	let retval = enterView("table", null) ;
	console.print("retval = " + retval + "\n") ;
	return 0 ;
}

