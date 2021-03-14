
function main()
{
	let url = openPanel("Select JS file", FileType.file, ["js"]) ;
	console.log("Selected URL = " + url) ;
	return 0 ;
}

