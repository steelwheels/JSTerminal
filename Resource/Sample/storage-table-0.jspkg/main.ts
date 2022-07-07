/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-table-0\n") ;

	let table = Table("storage", "table") ;
	if(table == null){
		console.print("Failed to allocate table\n") ;
		return -1 ;
	}

	let count = table.recordCount ;
	console.print("recode-count = " + count + "\n") ;

	let fields = table.defaultFields ;
	let fnames = Object.keys(fields) ;
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

