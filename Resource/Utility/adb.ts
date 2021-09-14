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
		  case "d":
			dumpRecord(index) ;
		  break ;
		  case "e":
			editRecord(index) ;
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
	console.log("'d': Dump current record") ;
	console.log("'e': Edit current record") ;
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

function dumpRecord(index: number)
{
	let record = Contacts.record(index) ;
	if(record != null){
                let table  = TextTable() ;
                let fnames = record.fieldNames ;
                fnames.forEach(fname => {
                        let val = record!.value(fname) ;
			if(val != null){
                                let txt = toText(val) ;
                                let trec = TextRecord() ;
                                trec.append(fname) ;
                                trec.append(":") ;
                                trec.append(txt.toStrings(0).join("\n")) ;
                                table.add(trec) ;
			}
                }) ;
                let lines = table.toStrings(0) ;
                for(let line of lines){
                        console.print(line + "\n") ;
                }
	} else {
		console.print("[Error] No record at " + index + "\n") ;
	}
}

function dumpValue(name: string, val: any)
{
	if(isObject(val)){
		if(!isEmptyObject(val)){
			console.print(name + ": ") ;
			let file = new JSONFile() ;
			file.write(stdout, val) ;
		}
	} else if(isString(val)){
		if(!isEmptyString(val)){
			console.print(name + ": " + val + "\n") ;
		}
	} else {
		console.print(name + ": " + val + "\n") ;
	}
}

function editRecord(index: number): void
{
	let record = Contacts.record(index) ;
	if(record == null){
		return ;
	}

	let fname = selectField(index) ;
	if(fname == null){
		return ;
	}

	let val = record.value(fname) ;
	if(val == null){
		return ;
	}

	console.print("[current value] ") ;
	dumpValue(fname, val) ;

	let editor = new ValueEditor() ;
	let newval = editor.edit(val) ;

        if(newval != null){
                if(record.save()){
                        console.print("[new value] ") ;
	                dumpValue(fname, newval) ;
                } else {
                        console.print("[Error] Failed to save\n")
                }
        }
}

function selectField(index: number): string | null
{
	let record = Contacts.record(index) ;
	if(record != null){
		let fnames = record.fieldNames ;
		let items: MenuItem[] = [] ;
		for(let i=0 ; i<fnames.length ; i++){
			let item: MenuItem = {
				key:	`${i}`,
				label:	fnames[i]
			} ;
			items.push(item) ;
		}
		/* Add quit menu */
		let quitid = items.length ;
		let qitem: MenuItem = {
			key:	"q",
			label:	"Quit this menu"
		} ;
		items.push(qitem) ;
		let menuid = Readline.menu(items) ;
		return menuid != quitid ? fnames[menuid] : null ;
	}
	return null ;
}

