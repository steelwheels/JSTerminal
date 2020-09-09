# Control TextEdit.app
This document describes about how to control the `TextEdit` application by the JavaScript on the [JSTerminal](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md).

The sample JavaScript file [TextEdit.js](https://github.com/steelwheels/JSTerminal/blob/master/Resource/Sample/TextEdit.js) uses below methods.

## Allocate the object
````
let textedit = TextEdit() ;
````

## Control the TextEdit
### Create new document
````
let result = textedit.makeNewDocument() ;
```` 
The `result` has boolean value. When the new document is created without any errors, this value will be `true`.

### Open the document
````
let result = textedit.open(url) ;
````
The parameter `url` is object of [URL class](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Class/URL.md). It must present the location of the file to load the document into the new window.
The `result` has boolean value. When the file is opened without any errors, this value will be `true`.

### Save the document
````
let result = textedit.save(url) ;
````
The parameter `url` is object of [URL class](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Class/URL.md). It must present the location of the file to save the content of the document in the front window.
The `result` has boolean value. When the content is saved without any errors, this value will be `true`.


## Edit the document
### Get content of the document in the front window
```
let str = textedit.contentOfFrontWindow() ;
```
The `result` has string or `null` value. The string will have the entire document. If the getting of it is failed, this value will be `null`.

### Set content of the document by given value
````
let result = textedit.setContentOfFrontWindow("hello") ;
````
Replace the content of the document in the front window by the given string. When the replacement is finished without any errors, the return value will be `true`.

## Related links
* [JSTerminal](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md): This is a documentation for JSTerminal
* [Steel Wheels Project](https://steelwheels.github.io): Developper's web site
