# Bug & Restrictions
## Terminal
### `isatty` function returns `false`.
The terminal view is not linked with `/dev/*` devices.
It has the risk that the unix command does not think it is executed on the terminal.

### Can not detect CTRL-C
The current software can not detect CTRL-C key binding.
Now COMMAND+. is used to stop the process instead of it.

## FileSystem
### Can not access `/tmp` directory
The sandboxed macOS application _can not access_ `/tmp` directory.
So the application which access the directory such as [wall command](https://github.com/freebsd/freebsd/blob/master/usr.bin/wall/wall.c) does not work on this application.

# Related link
* [JSTerminal](https://github.com/steelwheels/JSTerminal): Main web page for JSTerminal.
* [User's Manual](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md): User's manual for JSTerminal.
* [Steel Wheels Project](https://steelwheels.github.io): Developer's web site.
