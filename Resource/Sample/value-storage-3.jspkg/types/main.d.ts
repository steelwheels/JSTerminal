/// <reference path="../../types/KiwiLibrary.d.ts" />
declare function main(args: [string]): number;
declare function checkValue(storage: StorageIF, path: string): number | null;
declare function setValue(storage: StorageIF, value: number, path: string): boolean;
declare function dumpStorage(storage: StorageIF): void;
