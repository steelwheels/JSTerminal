"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
function main(args) {
    console.print("# storage-table-5\n");
    let result = 0;
    let storage = Storage("storage");
    if (storage == null) {
        console.print("Failed to allocate storage\n");
        return -1;
    }
    let party = TableStorage("storage", "party");
    if (party == null) {
        console.error("Failed to allocate party table\n");
        return -1;
    }
    let members = TableStorage("storage", "members");
    if (members == null) {
        console.error("Failed to allocate members table\n");
        return -1;
    }
    /* Add new member */
    let newmemb = members.newRecord();
    newmemb.setValue("Bill Wyman", "name");
    members.append(newmemb);
    /* get pointer of new member */
    let membptr = members.pointer("Bill Wyman", "name");
    if (membptr != null) {
        console.print("pointer ... success: " + membptr.path + "\n");
        /* Add new character to party */
        party.appendPointer(membptr);
    }
    else {
        console.print("pointer ... faileda\n");
        result = -1;
    }
    if (storage.save()) {
        console.print("save ... success\n");
    }
    else {
        console.print("save ... faileda\n");
        result = -1;
    }
    if (result == 0) {
        console.print("summary ... OK\n");
    }
    else {
        console.print("summary ... Error\n");
    }
    return result;
}
