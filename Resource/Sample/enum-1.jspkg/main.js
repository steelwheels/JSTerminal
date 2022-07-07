"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="types/enum.d.ts"/>
function main(args) {
    console.print("# enum-1.jspkg\n");
    console.print(" .sun	= " + Weekday.sun + "\n");
    console.print(" .mon	= " + Weekday.mon + "\n");
    console.print(" .tue	= " + Weekday.tue + "\n");
    let table = Table("storage", "root");
    if (table == null) {
        console.error("[Error] Failed to generate table\n");
        return -1;
    }
    console.print("table = " + table.toString() + "\n");
    return 0;
}
