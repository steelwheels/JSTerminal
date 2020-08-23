

# AppleScript support
This document contains sample AppleScript files to control [JSTerminal](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md) application.

## Open and execute the script

### Execute "*.js" file
````
-- open-1.applescript
tell application "JSTerminal"
	open "/Users/tomoo/Project/JSTerminal/Resource/Sample/hello.js"
end tell

````

### Execute "*.jspkg" file
````
-- open-2.applescript
tell application "JSTerminal"
	open "/Users/tomoo/Project/JSTerminal/Resource/Sample/hello.jspkg"
end tell

````

## Change the terminal property
Change the foreground color to green
````
-- control.scpt
tell application "JSTerminal"
	set fcol to green
	set foreground color to fcol
end tell

````

Change the foreground and background color 
````
tell application "JSTerminal"
	set background color to blue
	set foreground color to yellow
end tell

````

# References
* [User's manual](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md): User's manual of JSTerminal.

