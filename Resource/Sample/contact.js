"use strict";
/* contact.ts */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
        let result = 1 ;
        if(setupContacts()){
                console.log("record_count = " + Contacts.recordCount);
                Contacts.forEach(function (record) {
                    console.log(record.givenName);
                });
        } else {
                console.log("[Error] Failed to setup contact") ;
        }
        return result ;
}
