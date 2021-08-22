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

	console.print("adb - addressbook database manager\n") ;
	console.print("type '?' to print help\n") ;

	let prompt = "adb> " ;
	let doquit = false ;

	while(!doquit){
		console.print(prompt) ;
		let line = Readline.inputLine();
		switch(line.trim()){
		  case "?":
			usage() ;
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
	console.log("'q': Quit this utility") ;
}

