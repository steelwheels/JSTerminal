"use strict";
/* contact.ts */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    let contacts = new Contacts();
    if (contacts.load()) {
        console.log("Loaded");
        console.log("record_count = " + contacts.recordCount);
    }
    else {
        console.log("Failed to load");
    }
    return 0;
}
