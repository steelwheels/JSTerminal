

# Sample Scripts: GUI
This document contains the sample Amber Script to implemenent GUI.

## VBox and Button component
### Package name
`Sample/buttons.jspkg`

### Screen shot
![Table View](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Images/buttons-screenshot.png)

### Script
````
top: VBox {
    ok_button: Button {
        title:  String "OK"
        pressed: Event() %{
		console.log("pressed: OK") ;
	    	leaveView(1) ;
        %}
    }
    cancel_button: Button {
        title:  String "Cancel"
        pressed: Event() %{
		console.log("pressed: Cancel") ;
		leaveView(0) ;
        %}
    }
}


````
The [VBox/HBox component](https://github.com/steelwheels/KiwiCompnents/blob/master/Document/Components/Box.md) has multiple components in it. It is arranged vertically or horizontally.
The [Button component](https://github.com/steelwheels/KiwiCompnents/blob/master/Document/Components/Button.md) is button to be pressed. The designet can implement the action when the button is pressed.

## Table component

### Package name
`Sample/table.jspkg`

### Screen shot
![Table View](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Images/table-screenshot.png)

### Script
The cell is defined by `cell` property.
````
top: VBox {
	selection: Int 0
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
				case 5: image = "umblrella" ;	break ;
			}
			self.title = image ;
			self.image = image ;
		%}
		pressed: Event(col: Int, row: Int) %{
			let idx = row * 2 + col ;
			top.selection = idx ;
		%}
    }
    quit_button: Button {
   		title: String "Quit"
		pressed: Event() %{
			leaveView(top.selection) ;
        %}
    }
}


````

The [table component](https://github.com/steelwheels/KiwiCompnents/blob/master/Document/Components/Table.md)
contains NxM child components (called as *cell*).
N is number of columns and M is number of rows for each colmun.

## 2D graphics component

### Package name
`Sample/graphics.jspkg`

### Screen shot
![Table View](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Images/graphics-2d-screenshot-1.png)

### Script
````
top: VBox {
    graphics: Graphics2D {
        width:      Int         640
        height:     Int         480
        size_x:     Float       6.28
        size_y:     Float       6.28
        origin_x:   Float       -3.14
        origin_y:   Float       -3.14
        draw: Event(context: Int) %{
            let frame = context.logicalFrame ;
            let minx  = frame.x ;
            let maxx  = frame.x + frame.width ;
            let step  = frame.width / 100 ;
            console.log("minx: " + minx + ", maxx: " + maxx) ;
            /* Move to first position */
            context.moveTo(minx, Math.sin(minx)) ;
            /* Draw sin curves */
            for(let x=minx ; x<=maxx ; x+=step) {
                context.lineTo(x, Math.sin(x)) ;
            }
        %}
    }
    quit_button: Button {
   		title: String "Quit"
		pressed: Event() %{
			leaveView(1) ;
        %}
    }
}


````

# Reference
* [Component Library](https://github.com/steelwheels/KiwiCompnents/blob/master/Document/Library.md): The list of all components

