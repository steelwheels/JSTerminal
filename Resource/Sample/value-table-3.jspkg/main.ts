/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# value-table\n") ;

	let storage = ValueStorage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}

	let table = ValueTable("storage", storage) ;
	if(table == null){
		console.print("Failed to allocate table\n") ;
		return -1 ;
	}

	let count = table.recordCount ;
	console.print("recode-count = " + count + "\n") ;

	console.print("table = " + table.toString()) ;

	let newrec = ValueRecord() ;
	newrec.setValue(100, "c0") ;
	newrec.setValue(101, "c1") ;
	newrec.setValue(102, "c2") ;

        table.append(newrec) ;
        console.print("result = " + table.toString()) ;

	return 0 ;
}

