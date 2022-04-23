"use strict";
/*
 * main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    console.print("# value-storage-3\n");
    let result = 0;
    let storage = ValueStorage("storage");
    if (storage == null) {
        console.print("Failed to allocate storage\n");
        return -1;
    }
    /* Check array value */
    let val0 = checkValue(storage, "data[0].c0");
    checkValue(storage, "data[1].c1");
    checkValue(storage, "data[2].c1");
    let val3 = checkValue(storage, "data[2].c2");
    if (val0 != val3) {
        console.print("unexpected result (0): " + val0 + ", " + val3 + "\n");
        result = -1;
    }
    /* Check dictionary value */
    let elm0 = checkValue(storage, "dict.a0.b0");
    checkValue(storage, "dict.a2");
    let elm1 = checkValue(storage, "dict.a2.b0");
    if (elm0 != elm1) {
        console.print("unexpected result (1): " + elm0 + ", " + elm1 + "\n");
        result = -1;
    }
    /* Check pointer value */
    setValue(storage, 20, "dict.a0.b0");
    let elm2 = checkValue(storage, "dict.a2.b0");
    if (elm2 != 20) {
        console.print("unexpected result (2): " + elm2 + "\n");
        result = -1;
    }
    /* Check labeled value */
    dumpStorage(storage);
    let elm3 = checkValue(storage, "table.id");
    let elm4 = checkValue(storage, "@id0.records[0].c0");
    let elm5 = checkValue(storage, "table.records[0].c0");
    if (elm4 != elm5) {
        console.print("unexpected result (3): " +
            elm4 + "<->" + elm5 + "\n");
        result = -1;
    }
    /* Check labeled pointer */
    let elm6 = checkValue(storage, "dict.a3.c2");
    let elm7 = checkValue(storage, "table.records[0].c2");
    if (elm6 != elm7) {
        console.print("unexpected result (4): " +
            elm6 + "<->" + elm7 + "\n");
        result = -1;
    }
    /* Save entire value */
    /*
        if(storage.save()){
            console.print("store ... done\n") ;
        } else {
            console.print("store ... failed\n") ;
        }
    */
    if (result == 0) {
        console.print("summary ... OK\n");
    }
    else {
        console.print("summary ... Error\n");
    }
    return result;
}
function checkValue(storage, path) {
    console.print("path: " + path + " = ");
    let val = storage.value(path);
    if (val != null) {
        console.print(val + "\n");
        return val;
    }
    else {
        console.print("null\n");
        return null;
    }
}
function setValue(storage, value, path) {
    console.print("path: " + path + " <- " + value + "\n");
    if (storage.set(value, path)) {
        let newval = storage.value(path);
        if (value == newval) {
            return true;
        }
        else {
            console.print("Failed to check\n");
            return false;
        }
    }
    else {
        console.print("Failed to set\n");
        return false;
    }
}
function dumpStorage(storage) {
    console.log("storage = " + storage.toString());
}
