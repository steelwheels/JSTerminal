"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
function main(args) {
    let result = true;
    console.print("# storage-table-0\n");
    let table = TableStorage("storage", "table");
    if (table == null) {
        console.print("Failed to allocate table\n");
        return -1;
    }
    let count = table.recordCount;
    console.print("recode-count = " + count + "\n");
    let fields = table.defaultFields;
    let fnames = Object.keys(fields);
    console.print("all-field-names = " + fnames + "\n");
    printTable(table);
    console.print("remove record [2]  -> ");
    if (table.remove(2)) {
        console.print("OK\n");
    }
    else {
        console.print("Error\n");
    }
    printTable(table);
    console.print("Update content of record[0] -> ");
    let rec0 = table.record(0);
    if (rec0 != null) {
        if (rec0.value("axis") == Axis.horizontal) {
            console.print("from horizontal to vertical\n");
            rec0.setValue(Axis.vertical, "axis");
        }
        else {
            console.print("from vertical to horizontal\n");
            rec0.setValue(Axis.horizontal, "axis");
        }
    }
    else {
        console.print("[Error] No record[0]\n");
        result = false;
    }
    console.print("save table -> ");
    if (table.save()) {
        console.print("OK\n");
    }
    else {
        console.print("Error\n");
        result = false;
    }
    if (result) {
        console.print("SUMMARY: OK\n");
    }
    else {
        console.print("SUMMARY: Error\n");
    }
    return 0;
}
function printTable(table) {
    console.print(table.toString());
}
