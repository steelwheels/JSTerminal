/*
 * test_graphics.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function test_graphics(): boolean
{
	let result = true ;

	/*
	 * Test for Point
	 */
	let pt0 = Point(12.3, 45.6) ;
	console.print("pt0.x = " + pt0.x + ", pt0.y = " + pt0.y + "\n") ;

	if(!isPoint(pt0)){
		console.error("[Error] is not point\n") ;
		result = false ;
	}

	let pt1 = Point(-12.3, -45.6) ;
	let pt2 = addPoint(pt0, pt1) ;
	console.print("pt2.x = " + pt2.x + ", pt2.y = " + pt2.y + "\n") ;
	if(pt2.x != 0.0 || pt2.y != 0.0){
		console.error("[Error] unexpected point (1)\n") ;
		result = false ;
	}

	let pt3 = clampPoint(pt0, 0.0, 0.0, 10.0, 20.0) ;
	console.print("pt3.x = " + pt3.x + ", pt3.y = " + pt3.y + "\n") ;
	if(pt3.x != 10.0 || pt3.y != 20.0){
		console.error("[Error] unexpected point (2)\n") ;
		result = false ;
	}

	// Test for Size
	let sz0 = Size(23.4, 56.7) ;
	console.print("sz0.width=" + sz0.width + ", sz0.height=" + sz0.height + "\n") ;

	if(!isSize(sz0)){
		console.error("[Error] is not size\n") ;
		result = false ;
	}

	// Test for Rect
	let rct0 = Rect(pt0.x, pt0.y, sz0.width, sz0.height) ;
	if(!isRect(rct0)){
		console.error("[Error] is not rect\n") ;
		result = false ;
	}

	if(result){
		console.print("test_graphics ... OK\n")
	} else {
		console.print("test_graphics ... NG\n")
	}
	return result ;
}

