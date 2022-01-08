/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.log("# value-table") ;

	let storage = ValueStorage("storage") ;
	if(storage == null){
		console.log("Failed to allocate storage") ;
		return -1 ;
	}

	let table = ValueTable(["data"], storage) ;
	if(table == null){
		console.log("Failed to allocate table") ;
		return -1 ;
	}

	let count = table.recordCount ;
	console.log("recode-count = " + count) ;

	let fnames = table.allFieldNames ;
	console.log("all-field-names = " + fnames) ;

	for(let i=0 ; i<count ; i++){
		let record = table.record(i) ;
		if(record != null){
			console.log("Record[" + i + "]") ;
			let fnames = record.fieldNames ;
			console.log(" field-names : " + fnames) ;
                        for(let fname of fnames){
                                let val = record.value(fname) ;
                                if(val != null){
                                        console.log(fname + ": " + val) ;
                                } else {
                                        console.log(fname + ": <none>") ;
                                }
                        }
		} else {
			console.log("[Error] No record at " + i) ;
		}
	}

	console.log("# set active fields") ;
	let fields:string[] = ['c0', 'c1'] ;
	table.activeFieldNames = fields ;
	console.log("active-field-names = " + table.activeFieldNames) ;

	return 0 ;
}

