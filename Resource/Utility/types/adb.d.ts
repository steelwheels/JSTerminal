/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiShell.d.ts" />
declare function main(args: string[]): -1 | 0;
declare function usage(): void;
declare function incIndex(idx: number): number;
declare function decIndex(idx: number): number;
declare function dumpRecord(index: number): void;
declare function dumpValue(name: string, val: any): void;
declare function editRecord(index: number): void;
declare function selectField(index: number): string | null;
