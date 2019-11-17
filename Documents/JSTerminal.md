# JSTerminal

## Introduction
The `JSTerminal` is a macOS terminal application to execute shell program.
The user can use JavaScript language for shell scripting.

## Synopsis
You can launch this application by `open` command on macOS terminal.
````
open -a JSTerminal.app --args [options] script-file
````

## Description
Following command line options are supported:

|Short  |Long       |argument |Description            |
|:---   |:---       |:---     |:---                   |
|       |--version  |         |Display version information
|       |--log      |string   |Set log level: "error", "warning", "flow" or "detail" |

## Related Links
* [jsh-lang](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-lang.md): The language specification of jsh.
* [JStools](https://github.com/steelwheels/JSTools): Command line tools for JavaScript processing. It contains command line version of [jsh](https://github.com/steelwheels/JSTools/blob/master/Document/jsh-man.md).
* [Steel Wheels Project](http://steelwheels.github.io): Project web page
