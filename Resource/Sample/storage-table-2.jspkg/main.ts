/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-table-2\n") ;

	let storage = Storage("root") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}

	let table = TableInStorage("character", storage) ;
	if(table == null){
		console.print("Failed to allocate table\n") ;
		return -1 ;
	}

	let count = table.recordCount ;
	console.print("recode-count = " + count + "\n") ;

	for(let i=0 ; i<count ; i++){
		let record = table.record(i) ;
		if(record != null){
			console.print("Record[" + i + "]\n") ;
			let fnames = record.fieldNames ;
			console.print(" field-names : " + fnames + "\n") ;
                        for(let fname of fnames){
                                let val = record.value(fname) ;
                                if(val != null){
                                        console.print(fname + ": "+ val +"\n") ;
                                } else {
                                        console.print(fname + ": <none>\n") ;
                                }
                        }
		} else {
			console.print("[Error] No record at " + i + "\n") ;
		}
	}

	return 0 ;
}

