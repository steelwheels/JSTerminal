/*
 * adb: Address book database manager
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>

function main(args : string[])
{
	if(!requestContactAccess()){
		console.print("[Error] Can not access contact database\n") ;
		return -1 ;
	}

	if(!Contacts.load(null)){
		console.print("[Error] Failed to load database\n") ;
		return -1 ;
	}

	console.print("adb - addressbook database manager\n") ;
	console.print("record count: " + Contacts.recordCount + "\n") ;
	console.print("type '?' to print help\n") ;

	let index  = 0 ;
	let prompt = "adb" ;
	let doquit = false ;

	while(!doquit){
		console.print(prompt + ":" + index + "> ") ;
		let line = Readline.inputLine();
		switch(line.trim()){
		  case "?":
			usage() ;
		  break ;
		  case "f":
			dumpFieldNames() ;
		  break ;
		  case "r":
			dumpRecord(index) ;
		  break ;
		  case "+":
			index = incIndex(index) ;
		  break ;
		  case "-":
			index = decIndex(index) ;
		  break ;
		  case "q":
			doquit = true ;
		  break ;
		}
	}
	return 0 ;
}

function usage()
{
	console.log("'f': Dump field names") ;
	console.log("'r': Dump current record") ;
	console.log("'+': Increment record index") ;
	console.log("'-': Decrement record index") ;
	console.log("'q': Quit this utility") ;
}

function incIndex(idx: number): number
{
	let nxtidx = idx + 1 ;
	if(nxtidx < Contacts.recordCount){
		return nxtidx ;
	} else {
		return idx ; // Not updated
	}
}

function decIndex(idx: number): number
{
	if(idx > 0){
		return idx - 1 ;
	} else {
		return idx ; // Not updated
	}
}

function dumpFieldNames()
{
	if(Contacts.recordCount > 0){
		let record = Contacts.record(0) ;
		if(record != null){
			let names = record.fieldNames ;
			names.forEach(name => console.log(name)) ;
		}
	}
}

function dumpRecord(index: number)
{
	let record = Contacts.record(index) ;
	if(record != null){
		let fnames = record.fieldNames ;
		fnames.forEach(name => {
			let val = record!.value(name) ;
			if(val != null){
				console.print(name + ": ") ;
				if(isObject(val)){
                                        console.print("{") ;
					let keys = Object.keys(val) ;
					keys.forEach(key => {
						let v = val[key] ;
						console.print("key = " + key 
						  + ", val = " + v 
						  + "\n") ;
					}) ;
                                        console.print("} \n") ;
				} else {
					console.print(val + "\n") ;
				}
			}
		}) ;
	} else {
		console.print("[Error] No record at " + index + "\n") ;
	}
}

