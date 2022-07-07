"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
function main(args) {
    console.print("# storage-mapping-0\n");
    let result = 0;
    /* allocate mapping table */
    let table = MappingTable("storage", "members");
    if (table == null) {
        console.print("Failed to allocate table\n");
        return -1;
    }
    console.print("***** Initial state\n");
    console.print("recordCount = " + table.recordCount + "\n");
    if (table.recordCount != 5) {
        console.print("Unexpected record count\n");
        return -1;
    }
    printTable(table);
    console.print("***** Set for sorting\n");
    table.sortOrder = SortOrder.increasing;
    table.setCompareFunction(function (rec0, rec1) {
        let pid0 = rec0.value("pid");
        let pid1 = rec1.value("pid");
        return compareNumbers(pid0, pid1);
    });
    table.setFilterFunction(function (rec) {
        return rec.value("pid") > 0;
    });
    printTable(table);
    return result;
}
function printTable(table) {
    let result = 0;
    let count = table.recordCount;
    for (let i = 0; i < count; i++) {
        let rec = table.record(i);
        if (rec != null) {
            console.print(rec.toString() + "\n");
        }
        else {
            console.print("Failed to get record: " + i + "\n");
        }
    }
    return result;
}
