"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
function main(args) {
    console.print("# table-storage-6\n");
    let result = 0;
    let storage = Storage("storage");
    if (storage == null) {
        console.print("Failed to allocate storage\n");
        return -1;
    }
    /* set/get scalar */
    storage.set(1234, "a");
    console.print("a = " + storage.value("a") + "\n");
    /* set/get object */
    let obj0 = {
        v0: -1234,
        v1: "hello"
    };
    console.print("obj0 = " + obj0 + "\n");
    storage.set(obj0, "b");
    console.print("b    = " + storage.value("b") + "\n");
    console.print("b.v0 = " + storage.value("b.v0") + "\n");
    console.print("b.v1 = " + storage.value("b.v1") + "\n");
    /* Save entire value */
    if (storage.save()) {
        console.print("store ... done\n");
    }
    else {
        console.print("store ... failed\n");
    }
    return result;
}
