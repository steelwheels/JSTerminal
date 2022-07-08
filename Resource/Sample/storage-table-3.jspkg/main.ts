/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-table-3\n") ;

	let table = TableStorage("storage", "storage") ;
	if(table == null){
		console.print("Failed to allocate table\n") ;
		return -1 ;
	}

	let count = table.recordCount ;
	console.print("recode-count = " + count + "\n") ;

	console.print("table = " + table.toString()) ;

	let newrec = table.newRecord() ;
	newrec.setValue(100, "c0") ;
	newrec.setValue(101, "c1") ;
	newrec.setValue(102, "c2") ;

        table.append(newrec) ;
        console.print("result = " + table.toString()) ;

	return 0 ;
}

