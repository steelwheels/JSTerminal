"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
var character;
(function (character) {
    class Attributes {
        constructor(rec) {
            this.record = rec;
        }
    }
    character.Attributes = Attributes;
    ;
})(character || (character = {}));
; // end of module
