/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="types/enum.d.ts"/>

function main(args: string[])
{
    console.print("# enum-1.jspkg\n");
    console.print(" .sun	= " + Weekday.sun + "\n");
    console.print(" .mon	= " + Weekday.mon + "\n");
    console.print(" .tue	= " + Weekday.tue + "\n");

	let storage = Storage("storage") ;
	if(storage == null){
			console.error("[Error] Failed to load\n") ;
			return -1 ;
	}

	let table = TableInStorage("root", storage) ;
	if(table == null){
			console.error("[Error] Failed to generate table\n") ;
			return -1 ;
	}

	console.print("table = " + table.toString() + "\n") ;

    return 0;
}

