/*
 * test_graphics.js
 */

function test_graphics()
{
	let result = true ;

	let pt0 = Point(12.3, 45.6) ;
	console.log("pt0.x = " + pt0.x + ", pt0.y = " + pt0.y) ;

	if(!isPoint(pt0)){
		result = false ;
	}

	let sz0 = Size(23.4, 56.7) ;
	console.log("sz0.width=" + sz0.width + ", sz0.height=" + sz0.height) ;

	if(!isSize(sz0)){
		result = false ;
	}

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

