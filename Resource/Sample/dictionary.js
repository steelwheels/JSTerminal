"use strict";
/**
 * @main dictionary.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(argv) {
    console.print("Hello, dictionary.\n");
    let result = true;
    let dict = Dictionary();
    if (dict == null) {
        result = false;
    }
    dict.setNumber("n0", 1234);
    dict.setString("s0", "hello");
    let rn0 = dict.number("n0");
    if (rn0 != null) {
        if (rn0 == 1234) {
            console.print("rn0 -> exp:1234 -> result:1234\n");
        }
        else {
            console.error("[Error] Invalid value: rn0\n");
        }
    }
    else {
        console.error("[Error] unexpected null for rn0\n");
        result = false;
    }
    let rs0 = dict.string("s0");
    if (rs0 != null) {
        if (rs0 == "hello") {
            console.print("rs0 -> exp:hello -> result:hello\n");
        }
        else {
            console.error("[Error] Invalid value: rs0\n");
        }
    }
    else {
        console.error("[Error] unexpected null for rs0\n");
        result = false;
    }
    if (result) {
        console.print("Summary: OK\n");
    }
    else {
        console.print("Summary: Error\n");
    }
    return 0;
}
