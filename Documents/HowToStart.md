# How to start development
This document describes about *how to development the application on [JSTerminal](https://github.com/steelwheels/JSTerminal#readme)*. The sample application [hello.jspkg](https://github.com/steelwheels/JSTerminal/tree/master/Resource/Sample/hello.jspkg) is used to explain coding steps.

## Make package directory
The files for an application are packed into a directory named '`*.jspkg`'. The extension `jspkg` presents the *JavaScript package*. The manifest file under the directory declares the location of files to be used by the application. 

````
% mkdir hello.jspkg
````

## Prepare `manifest.json` file
The application requires the manifest file named `manifest.json`. It is used to declare the location and the role of files which is used by the application. For more details, see the [JavaScript package](https://github.com/steelwheels/JSTools/blob/master/Document/jspkg.md).

The `application` section is always required. It defines the file which has `main` function. The `JSTerminal` call this function to launch the application:
````
% cat ./hello.jspkg/manifest.json 
{
	application: "main.js"
}
````

## Write `main` function
The sample application print the usual message to the console. The `main` function is required:

````
% cat ./hello.jspkg/main.js 
function main(args)
{
        console.print("Hello from main function\n") ;
}
````

## Launch the application
You can launch the application by [run command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/run-man.md) on the terminal screen of JSTerminal.
````
jsh> run Sample/hello.jspkg
Hello from main function
````

# References
* [JSTerminal](https://github.com/steelwheels/JSTerminal#readme): The main application
* [Steel Wheels Project](http://steelwheels.github.io): Developper's web site
