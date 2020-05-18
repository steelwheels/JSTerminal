# JSTerminal: Terminal application for JavaScript shell

## Introduction
The *JSTerminal* is a terminal application to execute JavaScript shell.
The JavaScript shell (named *jsh*) is extended JavaScript to make shell scripting easier. See [jsh language manual](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-lang.md) for more details.

This application is open source software.
If you have any question or suggestions please send e-mail to [Steel Wheels Project](mailto:steel.wheels.project@gmail.com) or write issue to the [Github repository](https://github.com/steelwheels/JSTerminal).

This is a sample screen short of this application.
![Main window](./Images/main-screenshot.png)

In the following section, this document describes:
* [Licence](#License): The license information
* [How to use](#How): Step by step examination of the introduction to use this software
* [Programming](#Programming): Documents for programming
* [Bug and restrictions](#Bug): Known problems
* [Related documents](#Related): Links for references

## License
Copyright (C) 2020 [Steel Wheels Project](https://github.com/steelwheels).
This software is distributed under [GNU GENERAL PUBLIC LICENSE Version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) and the document is distributed under [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.en.html).

## Download
You can download this software from App Store.
[This page](https://apps.apple.com/jp/app/jsterminal/id1511276015?mt=12) links to the page to download this application.
On the otherwise, please search by keyword "JSTerminal" on the .

## How to use
### Boot
Double click the icon of JSTerminal or execute following command at the `Terminal.app`.
````
open -a /Applications/JSTerminal.app
````
You will see the following window:
![Boot window](./Images/boot-window.png)

The word `jsh>` is called prompt. It encourage the input from the user.
Type `ls Documents` on the window. You will see the contents of `documents` folder:
````
jsh> ls Documents
iChats
jsh>
````

### Set home directory
The *JSTerminal* is sandbox application to protect user from hacking.
This application allows to access __under home directory only__.
You can define home directory at the [Preference Window](#Preference).

The changing home directory means that you allow this application accesses your files. If you don't like it, do not change the home directory (See [Privacy Policy](https://github.com/steelwheels/JSTerminal/blob/master/Documents/PrivacyPolicy.txt)).

You can use this application without changing home directory.
But if you want to change your home directory, change the `Home directory` section by clicking `select` button:
![Select home directory](./Images/preference-homedir.png)

The setting will be activated for the next new window.
Please select `New` menu item from the `File` menu.

### Setup
To install some scripts into the home directory, execute the [setup command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/setup-man.md). This command initialize the file system under home directory.
````
jsh> pwd
/Users/tomoo/Development/Shell
jsh> setup
Make directory: /Users/tomoo/Development/Shell/Documents
Make directory: /Users/tomoo/Development/Shell/Library
Copy from /Applications/JSTerminal.app/Contents/Resources/Documents/Sample to /Users/tomoo/Development/Shell/Documents/Sample
Setup file system ... done
jsh> ls Documents
Sample
jsh> ls Documents/Sample
colors.js
hello.js
keycode.js
jsh>
````

### Execute shell command
The prompt `'>'` means *shell mode* .
The shell mode accepts shell commands such as `ls` command.
````
jsh> echo "Hello, world"
Hello, world
````
You can execute the JavaScript by prepending `%` at the head of the statement.
````
jsh> % console.log("Hello, world") ;
Hello, world
````
You can switch the *shell mode* into *JavaScript mode* by entering `%` key. The JavaScript mode accepts JavaScript code dynamically.
````
jsh> %
jsh% let a = 10 ;
jsh% console.log("a = " + a) ;
a = 10
jsh%
````
You can switch to shell mode by entering `>` key.
````
jsh% >
jsh> ls
Documents
jsh>
````

### Execute sample script
You can use [run command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/run-man.md) to execute the script (Both JavaScript and Shell scripts are supported).

This is famous demo program for `jsh`.
````
jsh> run Documents/Sample/hello.js
Hello, world !!
````
And this is sample program to test terminal color.
````
run Documents/Sample/colors.js
````
And you will get following outputs:
![Screenshot of colors script](./Images/script-colors.png)

When the run command is executed without script path, the dialog is used to select the file.
For more details, see [run command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/run-man.md).

### Execute script by menu
You can select the script by menu. Select *Open* menu item from *File* menu. In this case, the new window will be opened to execute the script.

### Stop the process
You can stop the process in the current window by choosing
_Stop menu item_ at Edit menu or pressing COMMAND-. key (`period` key + `command` key).

## How to program
### Programming
Please read [jsh language manual](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-lang.md) to know how to describe the shell script by JavaScript.

### Details
For more details (except shell script function), See the following documents.
* [Terminal](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Terminal.md): The specification of the terminal
* [Desktop menu](https://github.com/steelwheels/JSTerminal/blob/master/Documents/DesktopMenu.md): The specification of the desktop menu

## Bug and Restrictions
See [Bug & Restrictions](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Restrictions.md).

## Release history
|Version        |Date           |Description            |
|:--            |:--            |:--                    |
|1.0            |2020/05/05     |Initial Version        |
|1.1            |Not released yet   |Update to support [Curses Class](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Class/Curses.md). |

## Related document
* [README.md](https://github.com/steelwheels/JSTerminal): Top level document of this application.
* [Kiwi Standard Library](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Library.md): The JSTerminal support this.
* [Steel Wheels Project](http://steelwheels.github.io): Developer's web site.
