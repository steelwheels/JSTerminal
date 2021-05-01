/*
 * openPanel.js 
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(): number
{
	let url = openPanel("Select JS file", FileType.file, ["js"]) ;
	console.log("Selected URL = " + url.path) ;
	return 0 ;
}

