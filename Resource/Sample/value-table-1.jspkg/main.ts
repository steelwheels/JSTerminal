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
	console.print("dump: " + storage.toString()) ;

	let table = ValueTable("storage", storage) ;
	if(table == null){
		console.print("Failed to allocate table\n") ;
		return -1 ;
	}

	let count = table.recordCount ;
	console.print("recode-count = " + count + "\n") ;

	let fnames = table.allFieldNames ;
	console.print("all-field-names = " + fnames + "\n") ;

	printTable(table) ;

	console.print("remove record [2]  -> ") ;
	if(table.remove(2)){
		console.print("OK\n") ;
	} else {
		console.print("Error\n") ;
	}
	printTable(table) ;

	console.print("save table -> ") ;
	if(table.save()){
		console.print("OK\n") ;
	} else {
		console.print("Error\n") ;
	}

	return 0 ;
}

function printTable(table: TableIF)
{
	let count = table.recordCount ;
	for(let i=0 ; i<count ; i++){
		let record = table.record(i) ;
		if(record != null){
			console.print("Record[" + i + "]\n") ;
			let fnames = record.fieldNames ;
			console.print(" field-names : " + fnames + "\n") ;
                        for(let fname of fnames){
                                let val = record.value(fname) ;
                                if(val != null){
                                        console.print(fname + ": "+ val +"\n");
                                } else {
                                        console.print(fname + ": <none>\n") ;
                                }
                        }
		} else {
			console.print("[Error] No record at " + i + "\n") ;
		}
	}
}

