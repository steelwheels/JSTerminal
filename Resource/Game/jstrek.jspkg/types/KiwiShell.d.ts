/**
 * Builtin.d.ts
 */

interface _ReadlineCore {
	input():	string | null ;
	history():	string[] ;
}

declare var _readlineCore:	_ReadlineCore ;

/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="Builtin.d.ts" />
declare class _Readline {
    constructor();
    inputLine(): string;
    inputInteger(): number;
    menu(items: string[]): number;
}
declare const Readline: _Readline;
