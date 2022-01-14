"use strict";
/*
 * main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    console.log("# value-storage");
    let result = 0;
    let storage = ValueStorage("storage");
    if (storage == null) {
        console.log("Failed to allocate storage");
        return -1;
    }
    /* set/get scalar */
    storage.set(1234, "a");
    console.log("a = " + storage.value("a"));
    /* set/get object */
    let obj0 = {
        v0: -1234,
        v1: "hello"
    };
    console.log("obj0 = " + obj0);
    storage.set(obj0, "b");
    console.log("b.v0 = " + storage.value("b.v0"));
    console.log("b    = " + storage.value("b"));
    /* Save entire value */
    if (storage.store()) {
        console.log("store ... done");
    }
    else {
        console.log("store ... failed");
    }
    return result;
}
