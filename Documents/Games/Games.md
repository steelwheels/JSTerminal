# Retro computer games

## `moo`
### Description
Number guessing game, available in 1970 on Multics and in 1968 on University of Cambridge mainframe. A version of the mind or paper game Bulls and Cows (See [THE EARLIEST UNIX CODE: AN ANNIVERSARY SOURCE CODE RELEASE](https://computerhistory.org/blog/the-earliest-unix-code-an-anniversary-source-code-release/)).

### Screen shot
````
jsh> run moo.js
guess? > 1234
bull=0, cow=2
guess? > 4321
bull=0, cow=2
...
guess? > 2545
bull=4, cow=0
Congratulations !!
jsh> 
````

### Manual
* [moo - guessing game](http://man.cat-v.org/unix-6th/6/moo): The unix and linux forum.

### The original implementation
Not found

### The TypeScript implementation
[moo.ts](https://github.com/steelwheels/JSTerminal/blob/master/Resource/Game/moo.ts)

### Related links
* [Bulls and cows](https://en.wikipedia.org/wiki/Bulls_and_Cows): Wikipedia
* [数当てゲームMOOの最小質問戦略と最強戦略](https://www.tanaka.ecc.u-tokyo.ac.jp/ktanaka/moo/moo.html) (Japanese):

## `hangman`
### Description
The word to guess is represented by a row of dashes, representing each letter of the word. For more details, see [wikipedia about the game](https://en.wikipedia.org/wiki/Hangman_(game)).

### Screenshot
````
word: o - - o b e r 
character> c
 +----+
 o    |
\|/   |
 |    |
/     |
      |
+-----+
word: o c - o b e r 
character> t
Conguraturations !
````

### Manual
* [Education Web Games](http://hangman.educationwebgames.com/rules.html): Online game. The 1st page is manual page.

### The original implementation
Not found

### The TypeScript implementation
[hangman.ts](https://github.com/steelwheels/JSTerminal/blob/master/Resource/Game/hangman.ts)

# Reference
* [User's manual](https://github.com/steelwheels/JSTerminal#readme): JSTerminal application.
* [Vintage Games](http://www.vintage-basic.net/games.html):
* [BSD games](https://dyama.org/2010/11/bsdgames-パッケージについて/) (Japanese): 
* [THE EARLIEST UNIX CODE: AN ANNIVERSARY SOURCE CODE RELEASE](https://computerhistory.org/blog/the-earliest-unix-code-an-anniversary-source-code-release/):
