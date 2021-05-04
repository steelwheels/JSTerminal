/**
 * @file hangman.ts
 */
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiShell.d.ts" />
declare const MAX_IMAGE_NUM = 7;
declare class Word {
    target: string;
    chars: string[];
    count: number;
    constructor(word: string);
    didMatched(): boolean;
    doMatch(c: string): void;
    toString(): string;
}
declare function main(args: string[]): number;
declare function selectTarget(): string;
declare function countToLevel(repcount: number, limit: number): number;
declare function hangmanStrings(level: number): string[];
