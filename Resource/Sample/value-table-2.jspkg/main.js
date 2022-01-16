"use strict";
/*
 * main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    console.log("# value-table");
    let storage = ValueStorage("root");
    if (storage == null) {
        console.log("Failed to allocate storage");
        return -1;
    }
    let table = ValueTable("characters", storage);
    if (table == null) {
        console.log("Failed to allocate table");
        return -1;
    }
    let count = table.recordCount;
    console.log("recode-count = " + count);
    for (let i = 0; i < count; i++) {
        let record = table.record(i);
        if (record != null) {
            console.log("Record[" + i + "]");
            let fnames = record.fieldNames;
            console.log(" field-names : " + fnames);
            for (let fname of fnames) {
                let val = record.value(fname);
                if (val != null) {
                    console.log(fname + ": " + val);
                }
                else {
                    console.log(fname + ": <none>");
                }
            }
        }
        else {
            console.log("[Error] No record at " + i);
        }
    }
    return 0;
}
