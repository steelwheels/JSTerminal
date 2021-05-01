/*
 * openPanel.js 
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(): number
{
	let result = -1 ;
	let url = openPanel("Select JS file", FileType.file, ["js"]) ;
	if(url != null){
		console.log("Selected URL = " + url.path) ;
		result = 0 ;
	} else {
		console.log("Selected URL = NULL") ;
	}
	return result ;
}

