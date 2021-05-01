/*
 * test_graphics.js
 */

function test_graphics()
{
	let result = true ;

	/*
	 * Test for Point
	 */
	let pt0 = Point(12.3, 45.6) ;
	console.log("pt0.x = " + pt0.x + ", pt0.y = " + pt0.y) ;

	if(!isPoint(pt0)){
		result = false ;
	}

	let pt1 = Point(-12.3, -45.6) ;
	let pt2 = addPoint(pt0, pt1) ;
	console.log("pt2.x = " + pt2.x + ", pt2.y = " + pt2.y) ;
	if(pt2.x != 0.0 || pt2.y != 0.0){
		result = false ;
	}

	let pt3 = clampPoint(pt0, 0.0, 0.0, 10.0, 20.0) ;
	console.log("pt3.x = " + pt3.x + ", pt3.y = " + pt3.y) ;
	if(pt3.x != 10.0 || pt3.y != 20.0){
		result = false ;
	}

	/*
	 * Test for Size
	 */
	let sz0 = Size(23.4, 56.7) ;
	console.log("sz0.width=" + sz0.width + ", sz0.height=" + sz0.height) ;

	if(!isSize(sz0)){
		result = false ;
	}

	/*
	 * Test for Rect
	 */
	let rct0 = Rect(pt0, sz0) ;
	if(!isRect(rct0)){
		result = false ;
	}

	if(result){
		console.log("test_graphics ... OK")
	} else {
		console.log("test_graphics ... NG")
	}
	return result ;
}

