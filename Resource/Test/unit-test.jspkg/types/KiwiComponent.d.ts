/**
 * Builtin.d.ts : Built-in objects in KiwiComponents
 */

declare function _enterView(path: string, cbfunc: (retval: any) => void): void ;
declare function _alert(message: string, cbfunc: (retval: number) => void): void ;

declare function leaveView(param: any): void ;


/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="Builtin.d.ts" />
declare function alert(message: string): number;
declare function enterView(path: string): any;
