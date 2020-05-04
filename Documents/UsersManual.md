# JSTerminal: Terminal application for JavaScript shell

## Introduction
The *JSTerminal* is a terminal application to execute JavaScript shell.
The JavaScript shell (named *jsh*) is extended JavaScript to make shell scripting easier. See [jsh language manual](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-lang.md) for more details.

This is a sample screen short of this application.
![Main window](./Images/main-screenshot.png)

You can see some sample scripts at [sample scripts](https://github.com/steelwheels/JSTools/blob/master/Document/samples/sample.md).

## How to use
### Boot
Double click the icon of JSTerminal or execute following command at the `Terminal.app`.
````
open -a /Applications/JSTerminal.app
````
You will see the following window:
![Boot window](./Images/boot-window.png)

The word `jsh>` is called prompt. It encourage the input from the user.
Type `ls -l Documents` on the window. You will see the contents of `documents` folder:
````
jsh> ls Documents
iChats
jsh>
````

### Set home directory
The *JSTerminal* is sandbox application to protect user from hacking.
This application allows to access __under home directory only__.
You can define home directory at the [Preference Window](#Preference).

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

### Execute sample script
You can use [run command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/run-man.md) to execute the script (Both JavaScript and Shell scripts are supported).
````
run Documents/Sample/colors.js
````
And you will get following outputs:
![Screenshot of colors script](./Images/script-colors.png)

### Terminal
There are input mode on terminal.
The prompt `'>'` means *shell mode* and `'%'` is *script mode*.
The shell mode accepts shell commands such as `ls` command.
And the script mode accepts JavaScript code.
You can switch these mode by `'>'` and `'%'`.

![Two modes](Images/mode2.png)

### JavaScript shell (aka jsh)
You have to know about JavaScript and [JavaScript Shell (aka jsh)](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-lang.md).
See [language manual](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-lang.md). And there are some sample programs. See [sample scripts](https://github.com/steelwheels/JSTools/blob/master/Document/samples/sample.md).

The *jsh* supports custom JavaScript library named [Kiwi Standard Library](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Library.md).

## Execute the script file on JSTerminal
### Run command
You can use *run* command to execute script on the JavaScript Shell.
````
jsh> run /Users/steel_wheels/Develop/hello.js
Hello, world !!
````

When the run command is executed without script path, the dialog is used to select the file.
For more details, see [run command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/run-man.md).

### "Open" menu
You can select the script file by "open" menu.
The opened script is executed on the new terminal window.

### Stop the process
You can stop the process in the current window by choosing
_Stop menu item_ at Edit menu or pressing COMMAND-. key (`period` key + `command` key).

## Menu
This section describes about functions of desktop menu items.
### File Menu
1. ___New___: Open the new window and execute *jsh* on it.
2. ___Open___: Select script file and open the new window to execute it.
3. ___Open Recent___: Select script files from the list of files that you opened.
4. ___Close___: Close the current window
5. Save
6. Duplicate
7. Rename
8. Move to

### Edit Menu

## Preference window
You can change the terminal attributes by preference window.
![Preference window](./Images/preference-screenshot.png)

### Home directory
Set the home directory for you. Each users can have user's own directory.
### Size
Define the number of columns and rows in the terminal.
### Font
Define the kind of the font and it's size for the terminal.
### Color
Define the foreground and background color of the terminal.

# Bug and Restrictions
See [Bug & Restrictions](https://github.com/steelwheels/JSTerminal/blob/master/Documents/Restrictions.md).

# Related document
* [README.md](https://github.com/steelwheels/JSTerminal): Top level document of this application.
* [Kiwi Standard Library](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Library.md): The JSTerminal support this.
* [Steel Wheels Project](http://steelwheels.github.io): Developer's web site.
