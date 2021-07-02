/* contact.ts */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args: string[]): number
{
	let contacts = new Contacts() ;
	if(contacts.load()){
		console.log("Loaded") ;
		console.log("record_count = " + contacts.recordCount) ;
	} else {
		console.log("Failed to load") ;
	}
	return 0 ;
}

