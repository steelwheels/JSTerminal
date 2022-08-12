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

	let table = TableStorage("storage", "root") ;
	if(table == null){
			console.error("[Error] Failed to generate table\n") ;
			return -1 ;
	}

	console.print("table = " + table.toString() + "\n") ;

	let count = table.recordCount ;
	for(let i=0 ; i<count ; i++){
		let rec = table.record(i) ;
		if(rec != null){
			console.print("week[" + i + "] = " + rec.value("week") + "\n") ;
		} else {
			console.print("week[" + i + "] = null\n")  ;
		}
	}

    return 0;
}

