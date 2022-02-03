"use strict";
/* pattern.ts */
/// <reference path="types/KiwiLibrary.d.ts"/>
function makeOnePattern(pattern) {
    let patlen = pattern.length;
    let result = "";
    for (let i = 0; i < patlen; i++) {
        let c = pattern.charAt(i);
        if (c == "A") {
            result = result + "B+A+B";
        }
        else if (c == "B") {
            result = result + "A-B-A";
        }
        else {
            result = result + c;
        }
    }
    return result;
}
function makePattern(turtle) {
    turtle.setup(2, 5, Math.PI / 2.0, 0.2);
    turtle.movingAngle = Math.PI * 60 / 180.0;
    turtle.movingDistance = 1.5;
    let pat = "A";
    for (let i = 0; i < 6; i++) {
        pat = makeOnePattern(pat);
    }
    //console.log(`result = ${pat}`)
    return pat.replace(/A/g, 'F').replace(/B/g, 'F');
}
