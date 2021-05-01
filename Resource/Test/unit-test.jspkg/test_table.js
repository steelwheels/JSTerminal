"use strict";
/*
 * test_table.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function test_table() {
    let table = new Table(4, 5);
    if (table.width != 4 || table.height != 5) {
        console.log(`[Error] Invalud width or height: ${table.width}, ${table.height}`);
        return false;
    }
    for (let y = 0; y < table.height; y++) {
        for (let x = 0; x < table.width; x++) {
            table.setElement(x, y, x + y);
        }
    }
    let val11 = table.element(1, 1);
    console.print(`table[1][1] = ${val11}\n`);
    if (val11 != 2) {
        console.log(`[Error] Unexpected value at (1,1): ${val11}`);
    }
    console.print("- initial\n");
    dump_table(table);
    table.forEach(function (value, index) {
        if (value == 4) {
            console.log(`value 4 -> (${index.x}, ${index.y})`);
        }
    });
    table.forEach((value, index) => {
        if (value == 5) {
            console.log(`value 5 -> (${index.x}, ${index.y})`);
        }
    });
    let ret0 = table.find(value => value > 2);
    console.log(`find: value > 2 ---> value=${ret0}`);
    let ret1 = table.findIndex(value => value > 2);
    console.log(`find: value > 2 ---> (${ret1.x}, ${ret1.y})`);
    return true;
}
function dump_table(table) {
    let lines = table.toStrings(function (c) {
        return `/${c}/`;
    });
    for (let line of lines) {
        console.log(line);
    }
}
