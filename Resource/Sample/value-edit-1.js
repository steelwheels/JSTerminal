"use strict";
/*
 * value-edit.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
function main(args) {
    let value = {};
    value["key-a"] = "value-a";
    value["key-b"] = "value-b";
    value["key-c"] = "value-c";
    /* Edit */
    let editor = new ValueEditor();
    let modval = editor.editDictionary(value);
    let result;
    if (modval != null) {
        result = modval;
    }
    else {
        result = value;
    }
    /* Output result */
    let file = new JSONFile();
    file.write(stdout, value);
    return 0;
}
