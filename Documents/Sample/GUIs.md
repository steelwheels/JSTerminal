

# Sample Scripts: GUI
This document contains the sample Amber Script to implemenent GUI.

## Table component
### Package name
`Sample/table.jspkg`

### Screen shot
![Table View](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Images/table-screenshot.png)

### Script
````
top: VBox {
    table: Table {
	columnCount:	Int	3
	rowCount:	Int	2
	cell: Icon {
		image: String "calendar"
		title: String "calendar"
	}
	make: Event(col: Int, row: Int) %{
		let idx   = row * 2 + col ;
		let image = "?" ;
		switch(idx){
			case 0: image = "bag" ;		break ;
			case 1: image = "book" ; 	break ;
			case 2: image = "calendar" ;	break ;
			case 3: image = "clock" ;	break ;
			case 4: image = "telescope" ;	break ;
			case 4: image = "umblrella" ;	break ;
		}
		self.title = image ;
		self.image = image ;
	%}
    }
    quit_button: Button {
   	title: String "Quit"
	pressed: Event() %{
		leaveView(result) ;
        %}
    }
}


````

