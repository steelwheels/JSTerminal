#
# Makefile
#

srcs	= alert.ts \
	  collection0.ts \
	  colors.ts \
	  console-1.ts \
	  curses-frame.ts \
	  dictionary.ts \
	  escape-code.ts \
	  exit.ts \
	  file.ts \
	  hello.ts \
	  hello_color.ts \
	  keycode.ts \
	  openPanel.ts \
	  readline.ts \
	  readline-menu.ts \
	  scroll0.ts \
	  stdin.ts \
	  symbol.ts \
	  text.ts \
	  value-storage-1.jspkg/main.ts \
	  value-table-1.jspkg/main.ts \
	  value-table-2.jspkg/main.ts \
	  value-table-3.jspkg/main.ts \
	  value-table-4.jspkg/main.ts \
	  turtle.jspkg/pattern.ts

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) resources $(dsts)

$(srcdecl): dummy
	cp ../Library/types/*.d.ts ./types

clean:
	rm -f $(dsts)

resources: ./icon.jspkg/terminal-icon.png

./icon.jspkg/terminal-icon.png: ../Welcome.jspkg/terminal-icon.png
	cp $< $@


dummy:

