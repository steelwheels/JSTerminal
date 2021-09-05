/*
 * value-edit-2.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args : string[]): number
{
	let value: string[] = [
                "value-a",
                "value-b",
                "value-c"
        ] ;

	/* Edit */
	let editor = new ValueEditor() ;
	let modval = editor.editArray(value) ;

	let result: string[] ;
	if(modval != null){
		result = modval ;
	} else {
		result = value ;
	}

	/* Output result */
	let file = new JSONFile() ;
	file.write(stdout, value) ;
	return 0 ;
}

