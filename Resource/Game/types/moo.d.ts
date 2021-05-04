/**
 * @file moo.ts
 */
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiShell.d.ts" />
declare type Result = {
    bull: number;
    cow: number;
};
declare class Letters {
    length: number;
    values: number[];
    constructor(num: number);
    randomize(): void;
    set(index: number, value: number): void;
    get(index: number): number | null;
    compare(source: Letters): Result;
    contains(src: number): boolean;
    print(): void;
}
declare function main(args: string[]): number;
declare function input(length: number): Letters;
