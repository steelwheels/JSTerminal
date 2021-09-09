#
# Makefile
#

srcs	= alert.ts \
	  colors.ts \
	  escape-code.ts \
	  file.ts \
	  hello.ts \
	  hello_color.ts \
	  keycode.ts \
	  openPanel.ts \
	  readline.ts \
	  readline-menu.ts \
	  scroll0.ts \
	  stdin.ts \
	  text.ts \
	  value-edit-1.ts \
	  value-edit-2.ts

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) $(dsts)

$(srcdecl): dummy
	cp ../Library/types/*.d.ts ./types

clean:
	rm -f $(dsts)

dummy:

