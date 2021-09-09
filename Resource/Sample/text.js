"use strict";
/*
 * main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    let line0 = TextLine("Hello");
    let line1 = TextLine("Good morning");
    let rec0 = TextRecord();
    rec0.append("C0R0: A");
    rec0.append("C1R0: B");
    rec0.append("C2R0: CDE");
    let rec1 = TextRecord();
    rec1.append("C0R1: FGH");
    rec1.append("C1R1: IJ");
    rec1.append("C2R1: K");
    let table0 = TextTable();
    table0.add(rec0);
    table0.add(rec1);
    let sect0 = TextSection();
    sect0.add(line0);
    sect0.add(line1);
    sect0.add(table0);
    console.log("Result:");
    let result = sect0.toStrings(0);
    for (let res of result) {
        console.log(res);
    }
    return 0;
}
