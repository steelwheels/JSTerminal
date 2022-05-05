"use strict";
/*
 * exit.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    console.error("Test to exit with error\n");
    exit(ExitCode.exception);
    console.print("This message must not printed\n");
    return 0;
}
