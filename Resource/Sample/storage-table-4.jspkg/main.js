"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
function main(args) {
    console.print("# storage-table-4\n");
    let storage = Storage("storage");
    if (storage == null) {
        console.print("Failed to allocate storage\n");
        return -1;
    }
    console.print("dump: " + storage.toString());
    let table0 = TableInStorage("table0", storage);
    if (table0 == null) {
        console.print("Failed to allocate table0\n");
        return -1;
    }
    let table1 = TableInStorage("table1", storage);
    if (table1 == null) {
        console.print("Failed to allocate table1\n");
        return -1;
    }
    let ptr0 = table0.pointer(0, "c0");
    if (ptr0 == null) {
        console.print("Failed to get pointer (0)\n");
        return -1;
    }
    table1.appendPointer(ptr0);
    let ptr1 = table1.pointer(0, "c0");
    if (ptr1 == null) {
        console.print("Failed to get pointer (1)\n");
        return -1;
    }
    if (!table0.save()) {
        console.print("Failed to save table0\n");
    }
    if (!table1.save()) {
        console.print("Failed to save table1\n");
    }
    console.print("Summary ... OK\n");
    return 0;
}
