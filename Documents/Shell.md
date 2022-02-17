# Shell
## Execute shell command
The prompt `'>'` means *shell mode* .
The shell mode accepts shell commands such as `echo` command.
````
jsh> echo "Hello, world"
Hello, world
````
You can execute the JavaScript by prepending `%` at the head of the statement.
````
jsh> % console.print("Hello, world\n") ;
Hello, world
````
You can switch the *shell mode* into *JavaScript mode* by entering `%` key. The JavaScript mode accepts JavaScript code dynamically.
````
jsh> %
jsh% let a = 10 ;
jsh% console.print("a = " + a + "\n") ;
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

## Execute sample script
You can use [run command](https://github.com/steelwheels/JSTools/blob/master/Document/builtins/run-man.md) to execute the script (Both JavaScript and Shell scripts are supported).

This is famous demo program for JavaScript.
````
jsh> cat Sample/hello.js
function main(args)
{
	console.print("Hello, world !!\n") ;
}

jsh> run Sample/hello.js
Hello, world !!
````

## File extensions
The file extension (such as `.js`, `.jsh`) is refered to determine the contents of the file (or package).
This is the table of extensions that this application supports as a script file.

|Extension  |Contents                       |
|:--        |:--                            |
|.js        |JavaScript Program             |
|.jsh       |JavaScript Shell               |
|.jspkg     |JavaScript package (See next section)  |
|.amb       |[AmberScript](https://github.com/steelwheels/Amber/blob/master/Document/amber-language.md) |

## File package
The bundle of the files are used for scripting. It is called _JavaScript Package_ . You can implement JavaScript program by multiple script files.
For more details, see [JavaScript Package](https://github.com/steelwheels/JSTools/blob/master/Document/jspkg.md).
This is sample implementation of `manifest.json` file which presents the bundled files for an application script:
````
{
	application:	"main.js",
	libraries: [
		"lib_a.js",
		"lib_b.js"
	],
	threads: {
		"thread_a": "thread_a.js",
		"thread_b": "thread_b.js"
	}
}
````
The format of `manifest.json` is defined in [extended JavaScript Object Notation](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Data/object-notation.md).

## `.jshrc` file
If you put .jshrc JavScript file on your home directory, the file is parsed at the boot time (before outputting 1st prompt).

This is a samle context of `.jshrc` file. You can get the version of shell and change the prompt on the shell by referencing/updating [Preference Object](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Class/Preference.md).

````
/* Print version */
console.print("jsh: version: " + Preference.system.version + "\n") ;

/* Set prompt */
Preference.shell.prompt = function() {
        let orgcol = Preference.terminal.foregroundColor ;
        let orgesc = EscapeCode.color(1, orgcol) ;
        let newcol = Curses.blue ;
        let newesc = EscapeCode.color(1, newcol) ;
        return newesc + "jsh" + orgesc ;
} ;
````

# References
* [User's manual](https://github.com/steelwheels/JSTerminal#readme): The main document for the user. This document is refered by it.
