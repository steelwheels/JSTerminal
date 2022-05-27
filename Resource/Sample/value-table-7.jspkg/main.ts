/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args : [string])
{
	console.print("# value-table-7\n") ;

	let storage = Storage("storage") ;
	if(storage == null){
			console.error("Failed to load storage\n") ;
			return -1 ;
	}

	let table = Table("root", storage) ;
	if(table == null){
			console.error("Failed to allocate table\n") ;
			return -1 ;
	}

	printTable(table) ;

	console.print("bye\n") ;
	return 0 ;
}

function printTable(table: TableIF)
{
	let recnum = table.recordCount ;
	console.print("recnum = " + recnum + "\n") ;

	for(let i=0 ; i<recnum ; i++){
		let rec = table.record(i) ;
		if(rec != null){
			console.print("{\n") ;
			let fields = rec.fieldNames ;
			for(let field of fields){
				let value = rec.value(field) ;
				console.print("field:" + field + ", value: " + value + "\n") ;
			}
			console.print("}\n") ;
		} else {
			console.error("Null record\n") ;
			return ;
		}
	}
}

