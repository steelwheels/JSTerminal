/**
 * namespace.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

namespace ns {
	export function add(a: number, b: number): number {
		return a + b ;
	}
}

function main(args: string[]): number
{
	console.log("1 + 2 = " + ns.add(1, 2)) ;
	return 0 ;
}

