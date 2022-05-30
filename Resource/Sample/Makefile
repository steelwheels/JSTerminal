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
		  namespace.ts \
		  openPanel.ts \
		  primitives-0.ts \
		  readline.ts \
		  readline-menu.ts \
		  scroll0.ts \
		  stdin.ts \
		  symbol.ts \
		  text.ts

dirs	= `find . -name "*.jspkg"`

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" \
	  --declaration \
	  --declarationDir $(CURDIR)/types \
	  --typeRoots $(CURDIR)/types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) resources $(dsts) dirs

$(srcdecl): dummy
	cp ../Library/types/*.d.ts ./types

clean:
	rm -f $(dsts)
	(for dir in $(dirs) ; do \
		cd $$dir && make clean ; \
		cd .. ; \
	 done )

dirs: dummy
	(for dir in $(dirs) ; do \
		cd $$dir && make ; \
		cd .. ; \
	 done )

resources: ./icon.jspkg/terminal-icon.png

./icon.jspkg/terminal-icon.png: ../Welcome.jspkg/terminal-icon.png
	cp $< $@


dummy:

