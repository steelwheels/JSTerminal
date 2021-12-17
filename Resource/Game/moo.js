"use strict";
/**
 * @file moo.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
class Letters {
    constructor(num) {
        this.length = num;
        this.values = [];
        for (let i = 0; i < num; i++) {
            this.values.push(0);
        }
    }
    randomize() {
        for (let i = 0; i < this.length; i++) {
            this.values[i] = Math.randomInt(0, 9);
        }
    }
    set(index, value) {
        if (0 <= index && index < this.length) {
            this.values[index] = value;
        }
    }
    get(index) {
        if (0 <= index && index < this.length) {
            return this.values[index];
        }
        else {
            return null;
        }
    }
    compare(source) {
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < this.length; i++) {
            let expc = this.get(i);
            let srcc = source.get(i);
            if (expc == srcc) {
                bulls += 1;
            }
            else if (srcc != null && this.contains(srcc)) {
                cows += 1;
            }
        }
        let result = {
            bull: bulls,
            cow: cows
        };
        return result;
    }
    contains(src) {
        let result = false;
        for (let val of this.values) {
            if (val == src) {
                result = true;
                break;
            }
        }
        return result;
    }
    print() {
        for (let i = 0; i < this.length; i++) {
            console.print(`${this.values[i]}`);
        }
    }
}
function main(args) {
    const LETTER_NUM = 4;
    /* Allocate expected */
    let expval = new Letters(LETTER_NUM);
    expval.randomize();
    //console.print("expval: ") ; expval.print() ; console.print("\n") ;
    let docont = true;
    while (docont) {
        let inval = input(LETTER_NUM);
        //console.print("inval: "); inval.print(); console.print("\n");
        let compres = expval.compare(inval);
        console.log(`bull=${compres.bull}, cow=${compres.cow}`);
        if (compres.bull == LETTER_NUM) {
            console.log("Congratulations !!");
            docont = false;
        }
    }
    return 0;
}
function input(length) {
    while (true) {
        let letters = new Letters(length);
        console.print("guess? > ");
        let line = Readline.inputLine();
        if (line.length != length) {
            console.error("Error: Invalid length\n");
            continue;
        }
        for (let i = 0; i < length; i++) {
            let val = parseInt(line.charAt(i));
            if (0 <= val && val <= 9) {
                letters.set(i, val);
            }
            else {
                console.error("Error: Digit value required\n");
                continue;
            }
        }
        return letters;
    }
}
