/**
 * Builtin.d.ts
 */

interface ReadlineCoreIF {
	input():	string | null ;
	history():	string[] ;
}

declare var _readlineCore:	ReadlineCoreIF ;

/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="Builtin.d.ts" />
declare class _Readline {
    constructor();
    inputLine(): string;
    inputInteger(): number;
    menu(items: string[]): number;
}
declare const Readline: _Readline;
