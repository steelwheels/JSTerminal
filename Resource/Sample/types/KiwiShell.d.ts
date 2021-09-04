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
declare type MenuItem = {
    key: string;
    label: string;
};
declare class ReadlineObject {
    constructor();
    inputLine(): string;
    inputInteger(): number;
    menu(items: MenuItem[]): number;
    stringsToMenuItems(labels: string[], doescape: boolean): MenuItem[];
}
declare const Readline: ReadlineObject;
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="Builtin.d.ts" />
/// <reference path="Readline.d.ts" />
declare class ValueEditor {
    editDictionary(val: {
        [name: string]: string;
    }): {
        [name: string]: string;
    } | null;
    editString(val: string): string | null;
    checkToReplace(): boolean;
}
