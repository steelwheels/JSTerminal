/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

module character {

export class Attributes {
	record: ValueRecordIF ;

	constructor(rec: ValueRecordIF){
		this.record = rec ;
	}

} ;

} ; // end of module

