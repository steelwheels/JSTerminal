# Setup

At the first boot, the following window will be appeared.
This window is used to select _home directory_ of this application.
The *JSTerminal* is [sandboxed application](https://developer.apple.com/documentation/security/app_sandbox).
You must select the directory where the application can access it.

1. Push "Select Home Directory" button and select home directory
2. Press "OK" button to finialize the selection

![Setup window](./Images/setup-window.png)

After pressing the "OK" button, you will see the following window:
![Boot window](./Images/boot-window.png)

The word `jsh>` is called prompt. It encourage the input from the user.
Type `ls` on the window. You will see the contents of current directory:
````
jsh> ls
Game
Sample
````

## Set home directory
You can re-define home directory at the [Preference Window](#Preference).

The changing home directory means that you allow this application accesses your files. If you don't like it, do not change the home directory (See [Privacy Policy](https://github.com/steelwheels/JSTerminal/blob/master/Documents/PrivacyPolicy.txt)).

The default home directory is your top home directory.
You can change the `Home directory` section by clicking `select` button:
![Select home directory](./Images/preference-homedir.png)


## Install built-in resource files
The [install command](https://github.com/steelwheels/JSTools/tree/master/Document/builtins/install-man.md) is used to install built-in resource files. They will be placed under home directory.

You don't have to install these files. But it helps you to learn how to programming on this environment.

````
jsh> install
Remove directory: /Users/tomoo/Development/Library
Copy directory: file:///Applications/JSTerminal.app/Contents/Resources/Library/ --> file:///Users/tomoo/Development/Library/
Remove directory: /Users/tomoo/Development/Game
Copy directory: file:///Applications/JSTerminal.app/Contents/Resources/Game/ --> file:///Users/tomoo/Development/Game/
Remove directory: /Users/tomoo/Development/Sample
Copy directory: file:///Applications/JSTerminal.app/Contents/Resources/Sample/ --> file:///Users/tomoo/Development/Sample/
jsh> 
````

# References
* [User's manual](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md): The main document for the user. This document is refered by it.

